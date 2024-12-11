import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('conversations');
    const { id, specificId } = req.query;

    if (req.method === 'GET') {
      if (specificId) {
        const conversation = await collection.findOne({ _id: new ObjectId(String(specificId)) });
        if (!conversation) {
          return res.status(404).json({ error: 'Specific conversation not found' });
        }
        return res.status(200).json([conversation]);
      } else if (id) {
        const conversation = await collection.findOne({ _id: new ObjectId(id) });
        if (!conversation) {
          return res.status(404).json({ error: 'Conversation not found' });
        }
        return res.status(200).json(conversation);
      } else {
        const count = await collection.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const results = await collection.find({}).skip(randomIndex).limit(1).toArray();
        return res.status(200).json(results);
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch conversation' });
  }
}