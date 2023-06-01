const express = require('express');

const { matematicas } = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();


routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas))
})

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema
  const result = matematicas.filter(curso => curso.tema === tema)
  if (result.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`)
  }
  res.send(JSON.stringify(result))
})

module.exports = routerMatematicas