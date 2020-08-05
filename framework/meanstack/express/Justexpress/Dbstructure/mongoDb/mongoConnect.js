const express = require('express');
const mongoDb = require('mongodb');
const mongoClient = mongoDb.MongoClient;

const mongoUrl = 'mongodb://localhost:27017';

mongoClient.connect(mongoUrl, (error, databaseconn) => {
  const db = databaseconn.db('nameofdb');

  app.get('/', (req, res) => {
    db.collection('collectionname')
      .find({})
      .toArray((query, carResults) => {
        console.log(carResults);
        res.json(carResults);
      });
  });
});
