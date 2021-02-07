const Persona = require("./persona");

class Personas {
	constructor() {
		this.personas = [];
	}

	addPersona(persona = new Persona()) {
		this.personas.push(persona);
	}

	getPersonas() {
		return this.personas;
	}

	deletePersona(obj_id = "") {
		this.personas = this.personas.filter(
			(persona) => persona.obj_id !== obj_id
		);
		return this.personas;
	}
}
module.exports = Personas;
