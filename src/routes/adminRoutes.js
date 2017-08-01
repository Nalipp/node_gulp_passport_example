var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
      title: 'To Kill a Mockingbird',
      genre: 'Fiction',
      author: 'Harper Lee',
      read: false
    },
    {
      title: 'Ruby on Rails Tutorial',
      genre: 'Eduction',
      author: 'Michael Hartl',
      read: true
    },
    {
      title: 'Rails Testing',
      genre: 'Eduction',
      author: 'Thoughtbot',
      read: false
    },
    {
      title: 'How To Program',
      genre: 'Eduction',
      author: 'Chris Pine',
      read: true
    }
  ];

var router = function(nav) {
  adminRouter.route('/addBooks')
    .get(function(req, res) {
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function(err, db) {
        var collection = db.collection('books'); 
        collection.insertMany(books, function(err, results) {
          res.send(results);
          db.close();
        });
      });
    });

  return adminRouter;
};

module.exports = router;
