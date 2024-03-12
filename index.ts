// Parte 1
//     • Instalar las dependencias necesarias para desarrollar el servidor REST con Axios.
// Parte 2
//     • Desarrollar la interface necesaria para dar soporte a la estructura de la información de RestCountries.
// Parte 3
// Desarrollar en un controller los métodos necesarios para seleccionar la siguiente información:
//     • Todos los países
//     • Países de un continente
//     • Información de un país concreto
// Parte 4
//     • Desarrollar un sistema de rutas en index.ts para cada requerimiento del punto 3. Cada ruta deberá registrar los argumentos necesarios para dar soporte a ese requerimiento.

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getTodosLosPaises, getPaisesDeUnContinente, getInformacionPais } 
  from './controllers/countriesController';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.get('/api/countries/paises', getTodosLosPaises);
app.get('/api/countries/continentes/:continenteSolicitado', getPaisesDeUnContinente);
app.get('/api/countries/informacion/pais/:paisSolicitado', getInformacionPais);

app.listen(port, () => {
  console.log('Servidor en ejecución en puerto ' + port);
});