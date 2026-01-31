import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let database;

export const initDb = async () => {
  if (database) {
    return database;
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    database = client.db('contactsDB');
    console.log('MongoDB connected to contactsDB');
    return database;
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err;
  }
};

export const getDb = () => {
  if (!database) {
    throw Error('Database not initialized');
  }
  return database;
};

