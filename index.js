const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = process.env.PORT || 6000;

// << db setup >>
const db = require("./db");
const dbName = "alumno";
const collectionName = "alumnos";

db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
   server.get("/ListEnrrollements", (request, response) => {
      dbCollection.find().toArray((error, result) => {
         if (error) throw error;
         response.json(result);
         //console.log(result.codigo)s
         data=result
        return result
      });
      
   });


   server.post("/addEnrollement", (request, response) => {
      const data = request.body;
      dbCollection.insertOne(data, (error, result) => { 
         const msg="Enrollement was succefull added"
         response.json(msg)
      });
   });

}, function (err) { 
   throw (err);
});

server.listen(port, () => {
   console.log(`Server listening at ${port}`);
});


