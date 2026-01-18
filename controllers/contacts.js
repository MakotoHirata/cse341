const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

const getAllContacts = async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('contacts').find();
    const contacts = await result.toArray();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSingleContact = async (req, res) => {
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

module.exports = {
  getAllContacts,
  getSingleContact
};
