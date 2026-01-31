import { ObjectId } from 'mongodb';
import { getDb } from '../db/connect.js';

export const getAllContacts = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('contacts').find();
    const contacts = await result.toArray();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSingleContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const db = getDb();

    const result = await db
      .collection('contacts')
      .find({ _id: contactId });

    const contact = await result.toArray();
    res.json(contact[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createContact = async (req, res) => {
  const db = getDb();
  const contact = req.body;

  const { firstName, lastName, email, favoriteColor, birthday } = contact;
  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const result = await db.collection('contacts').insertOne(contact);
  res.status(201).json({ id: result.insertedId });
};

export const updateContact = async (req, res) => {
  const db = getDb();
  const id = req.params.id;

  await db.collection('contacts').updateOne(
    { _id: new ObjectId(id) },
    { $set: req.body }
  );

  res.sendStatus(204);
};

export const deleteContact = async (req, res) => {
  const db = getDb();
  const id = req.params.id;

  await db.collection('contacts').deleteOne({
    _id: new ObjectId(id),
  });

  res.sendStatus(200);
};
