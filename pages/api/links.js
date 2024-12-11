// example/pages/api/links.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { link, userData } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db('test');
      const collection = db.collection('links');

      // Capture IP address from request headers
      const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      userData.ipAddress = ipAddress;

      const result = await collection.insertOne({ link, userData });
      console.log('Link saved:', result);

      res.status(200).json({ message: 'Link saved successfully' });
    } catch (error) {
      console.error('Error saving link:', error.message);
      res.status(500).json({ error: 'Failed to save link', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}