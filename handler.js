"use strict";
const swapi = require("swapi-node");
const pool = require("./database/config");
const Persona = require("./models/entity/persona");
const Personas = require("./models/entity/personas");

module.exports.getPersonas = async (event, context, callback) => {
	const { page } = event.queryStringParameters;
	const personas = new Personas();
	const personasResult = await swapi
		.get(`https://swapi.dev/api/personas/?page=${page}`)
		.then((result) => result);

	for (let i = 0; i < personasResult.results.length; i++) {
		personas.addPersona(new Persona(personasResult.results[i]));
	}
	const response = {
		statusCode: 200,
		personas: personas.getPersonas(),
	};

	return callback(null, response);
};

module.exports.getPersona = async (event, context, callback) => {
	const { id } = event.queryStringParameters;
	const personaResult = await swapi
		.get(`https://swapi.dev/api/persona/?id=${id}`)
		.then((result) => result);
	const persona = new Persona(personaResult);
	const response = {
		statusCode: 200,
		personas: persona,
	};

	return callback(null, response);
};

// Obtener todas las personas de MYSQL
module.exports.getApiPersonas = async (event, context, callback) => {
	const personas = await pool.query("SELECT * FROM personas");
	const response = {
		statusCode: 200,
		personas: personas,
	};
	return callback(null, response);
};

// Obtener una persona de MYSQL
module.exports.getApiPersona = async (event, context, callback) => {
	const { id } = event.queryStringParameters;
	const persona = await pool.query("SELECT * FROM personas WHERE id = ?", [id]);
	const response = {
		statusCode: 200,
		persona: persona,
	};
	return callback(null, response);
};
