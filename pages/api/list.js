import  clientPromise from "../../lib/mongodb";

export default async function handler(request, response) {
    try {
      const mongoClient = await clientPromise;
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
