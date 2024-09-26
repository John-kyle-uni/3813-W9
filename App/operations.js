exports.insertDocuments = function(collection, docArray, callback) { 
    collection.insertMany (docArray, function(err, result) {
        onsole.log("Inserted the following documents into the collection:"); 
        console.log(docArray);
        callback(result);
    });
}

exports.updateDocument = function(collection, queryJSON, updateJSON, callback) {
    collection.updateOne (queryJSON, { $set: updateJSON }, function(err, result) { 
        console.log("for the documents with");
        console.log(queryJSON);
        console.log("SET: ");
        console.log(updateJSON);
        callback(result);
    });
};

exports.findDocuments = function (collection, queryJSON, callback) {
    // Find some documents
    collection.find(queryJSON).toArray(function(err, docs) { 
        console.log("Found the following records");
        console.log(docs);
        callback (docs);
    });
};
exports.removeDocument = function (collection, queryJSON, callback) { 
    collection.delete0ne (queryJSON, function(err, result) {
        console.log("Removed the documents with");
        console.log(queryJSON);
        callback(result);
    });
}