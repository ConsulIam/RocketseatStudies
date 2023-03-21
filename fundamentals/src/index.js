const { request, response } = require('express');
const express = require('express')

const app = express();
app.use(express.json()); // para receber respostas json

app.get("/", (request, response) => {
  // return response.send("Hey men!");
  return response.json( {message: "Hey people, what's go in on?. All right?"} );
});

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json( ["Curso 1", "Curso 2", "Curso 3"] );
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json( ["Curso 1", "Curso 2", "Curso 3", "Curso 4"] );
});

app.put("/courses/:id", (request, response) => {
  const params = request.params;
  const { id } = request.params;
  console.log(params, id);
  return response.json( ["Curso 7", "Curso 2", "Curso 3", "Curso 4"] );
});

app.patch("/courses/:id", (request, response) => {
  return response.json( ["Curso 7", "Curso 11", "Curso 3", "Curso 4"] );
});

app.delete("/courses/:id", (request, response) => {
  return response.json( ["Curso 11", "Curso 3", "Curso 4"] );
});

app.listen(5555);
