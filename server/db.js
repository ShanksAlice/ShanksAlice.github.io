/**
 * Created by huangling on 19/5/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/homepage';

var MONGO_DB;

var getDB = function(callback) {
    if (MONGO_DB) {
        callback(MONGO_DB);
    } else {
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            MONGO_DB = db;
            callback(db);
        });
    }
};

var insert = function(coll, data, callback) {
    getDB(function(db) {
        // Get the documents collection
        var collection = db.collection(coll);
        // Insert some documents
        collection.insertOne(data, function(err, result) {
            assert.equal(err, null);
            console.log(data);
            if (callback) {
                callback(result);
            }
        });
    });
};

var find = function(coll, filter, callback) {
    getDB(function(db) {
        // Get the documents collection
        var collection = db.collection(coll);
        // Find some documents
        collection.find(filter).toArray(function(err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    });
};

var update = function(coll, filter, data, callback) {
    getDB(function(db) {
        // Get the documents collection
        var collection = db.collection(coll);
        collection.updateOne(filter, { $set: data }, function(err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    });
};


var deleteOne = function(coll, filter, callback) {
    getDB(function(db) {
        // Get the documents collection
        var collection = db.collection(coll);
        collection.findOneAndDelete(filter, function(err, r) {
            assert.equal(err, null);
            if (callback) {
                callback(r);
            }
        });
    });
};

var updateDocuments = function(data, callback) {
    update('documents', {id: data.id}, data, callback);

    var doc = {
        title: data.title,
        img: data.img,
        id: data.id,
        tags: data.tags,
        type: data.type
    };

    update('docs', {id: doc.id}, doc, callback);
};

var insertDocuments = function(data, callback) {
    insert('documents', data, callback);

    var doc = {
        title: data.title,
        img: data.img,
        id: data.id,
        tags: data.tags,
        type: data.type
    };

    insert('docs', doc, callback);
};

var recordLike = function(data, callback) {
    find('updateInfo', { id: data.id }, function(record) {
        var updateRecord = record[0];
        for (var i = 0; i < updateRecord.details.length; i++) {
            var detail = updateRecord.details[i];
            if (detail.id == data.detailId) {
                detail.likeCount = (detail.likeCount || 0) + 1;
                update('updateInfo', { id: data.id }, {details: updateRecord.details}, callback);
                return;
            }
        }
        callback();
    });
};

var deleteDocuments = function (filter, callback) {
    deleteOne('docs', {id: filter.id}, () => {
        deleteOne('documents', {id: filter.id}, callback);
    });
};

module.exports = {
    insertDocuments,
    deleteDocuments,
    updateDocuments,
    insert,
    find,
    deleteOne,
    recordLike,
    update
};