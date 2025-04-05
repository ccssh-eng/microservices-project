const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://mongo:27017';
const DB_NAME = 'microservices';
const serviceDirs = [
  'auth-service',
  'product-service',
  'order-service',
  'cart-service',
  'inventory-service',
  'notification-service'
];

// Wait until MongoDB is ready
async function waitForMongo(uri, maxRetries = 10, delay = 2000) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const client = new MongoClient(uri);
      await client.connect();
      await client.close();
      console.log('✅ MongoDB is ready!');
      return;
    } catch (err) {
      console.log(`⏳ Waiting for MongoDB (${retries + 1}/${maxRetries})...`);
      await new Promise((res) => setTimeout(res, delay));
      retries++;
    }
  }
  throw new Error('MongoDB did not become ready in time.');
}

async function seed() {
  const client = new MongoClient(MONGO_URI);

  try {
    await waitForMongo(MONGO_URI);
    await client.connect();
    const db = client.db(DB_NAME);

    for (const service of serviceDirs) {
      const filePath = path.join(__dirname, service, 'db.json');

      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  ${filePath} not found. Skipping.`);
        continue;
      }

      const rawData = fs.readFileSync(filePath);
      let jsonData;

      try {
        jsonData = JSON.parse(rawData);
      } catch (err) {
        console.error(`❌ Invalid JSON in ${filePath}:`, err.message);
        continue;
      }

      for (const [collectionName, documents] of Object.entries(jsonData)) {
        if (!Array.isArray(documents)) {
          console.warn(`⚠️  ${collectionName} in ${filePath} is not an array. Skipping.`);
          continue;
        }

        const collection = db.collection(collectionName);
        await collection.deleteMany({});
        if (documents.length > 0) {
          await collection.insertMany(documents);
        }

        console.log(`✅ Seeded ${documents.length} docs into '${collectionName}' from ${service}`);
      }
    }

    console.log('🚀 Seeding complete!');
  } catch (err) {
    console.error('❌ Error seeding MongoDB:', err.message);
  } finally {
    await client.close();
  }
}

seed();
