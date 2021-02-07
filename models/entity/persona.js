const { v4: uuidV4 } = require("uuid");

class Persona {
	constructor(persona) {
		this.obj_id = uuidV4();
		this.nombre = persona.name;
		this.altura = persona.height;
		this.masa = persona.mass;
		this.color_pelo = persona.hair_color;
		this.color_piel = persona.skin_color;
		this.color_ojo = persona.eye_color;
		this.nacimiento = persona.birth_year;
		this.genero = persona.gender;
		this.planeta_natal = persona.homeworld;
		this.pelicula = persona.films;
		this.especie = persona.species;
		this.vehiculo = persona.vehicles;
		this.nave_estelar = persona.starships;
		this.creado = persona.created;
		this.editado = persona.edited;
		this.url = persona.url;
	}
}

module.exports = Persona;
