/**
 * Created by huangling on 20/05/2017.
 */
var db = require('./db');
var markdownpdf = require("markdown-pdf");
var fs = require("fs");
var path = require('path');

var generatePdf = function (data) {
    var fileName = data.linkName;
    if (fileName) {
        var title = data.title;
        var toPath = path.resolve(path.join(__dirname, '../src/pdf/', fileName));
        var content = data.content;
        markdownpdf({
            cssPath: path.resolve(path.join(__dirname, '../src/style/', 'markdown.css'))
        }).from.string('## ' + title + '\n' + content).to(toPath, function () {
            console.log("generated pdf: " + fileName);
        });
    }
};

module.exports = function(app) {
    app.post('/db/library/add', function(req, res) {
        generatePdf(req.body);
        db.insertDocuments(req.body, function() {
            res.end();
        })
    });

    app.post('/db/library/update', function (req, res) {
        generatePdf(req.body);
        db.updateDocuments(req.body, function () {
            res.end();
        })
    });

    app.get('/db/library/get', function (req, res) {
        db.find('documents', req.query, function (docs) {
            res.send(docs[0]);
        })
    });

    app.get('/db/library/delete', function (req, res) {
        db.deleteDocuments(req.query, function (result) {
            res.send(result);
        })
    });

    app.get('/db/library/list', function (req, res) {
        db.find('docs', {}, function (docs) {
            res.send(docs || []);
        })
    });

    app.get('/db/updateInfo/get', function (req, res) {
        db.find('updateInfo', { id: req.query.id }, function (docs) {
            res.send(docs[0]);
        })
    });

    app.post('/db/updateInfo/add', function (req, res) {
        var data = req.body;
        var details = req.body.details;
        for (var i = 0; i < details.length; i++) {
            details[i].likeCount = details[i].likeCount || 0;
        }
        db.insert('updateInfo', data, function () {
            res.end();
        })
    });

    app.post('/db/updateInfo/update', function (req, res) {
        var data = req.body;
        db.find('updateInfo', { id: data.id }, function(record) {
            var updateRecord = record[0];
            for (var i = 0; i < updateRecord.details.length; i++) {
                data.details[i].likeCount = updateRecord.details[i].likeCount;
            }

            db.update('updateInfo', { id: data.id }, data, function () {
                res.end();
            });
        });
    });

    app.get('/db/updateInfo/list', function (req, res) {
        db.find('updateInfo', {}, function (docs) {
            res.send(docs || []);
        })
    });

    app.get('/db/updateInfo/delete', function (req, res) {
        db.deleteOne('updateInfo', { id: req.query.id }, function () {
            res.end();
        })
    });

    app.get('/db/like', function (req, res) {
        db.recordLike(req.query, function () {
            res.end();
        })
    });

    app.post('/db/form/submit', function (req, res) {
        db.insert('form', req.body, function () {
            res.end();
        })
    });
};