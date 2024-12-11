import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

export default async function handler(request, response) {
    try {
      const mongoClient = await (new MongoClient(uri, options)).connect();
      console.log("Just connected!");
      const db = mongoClient.db("test");
      const collection = db.collection("links");
      const results = await collection
          .find({})
          .sort({ _id: -1 }) // Sort by _id in descending order
          .limit(2)          // Limit to the last 2 entries
          .toArray();
  
      response.status(200).json(results);
  
    } catch(e) {
      console.error(e);
      response.status(500).json(e);
    }
}
