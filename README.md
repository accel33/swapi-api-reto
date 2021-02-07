##### Reto SWAPI

Reemplazar por variables de entorno propias

```javascript
module.exports = {
	database: {
		host: "localhost",
		user: "usuario",
		password: "contraseña",
		database: "swapi_db",
	},
};
```

# Instalar:

#### Ejecutar para empezar (en la raiz)

- $ npm install

### Commando de prueba local:

- `$ serverless invoke local -f getPersona --data '{ "queryStringParameters": {"id":"1"}}' // Obtiene persona del servicio SWAPI/`

#### Metodo GET que obtiene persona por Id

```javascript
{
    "statusCode": 200,
    "personas": {
        "obj_id": "95ae5f90-96fd-4846-a28b-eb944dd32911",
        "nombre": "Luke Skywalker",
        "altura": "172",
        "masa": "77",
        "color_pelo": "blond",
        "color_piel": "fair",
        "color_ojo": "blue",
        "nacimiento": "19BBY",
        "genero": "male",
        "planeta_natal": "http://swapi.dev/api/planets/1/",
        "pelicula": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/"
        ],
        "especie": [],
        "vehiculo": [
            "http://swapi.dev/api/vehicles/14/",
            "http://swapi.dev/api/vehicles/30/"
        ],
        "nave_estelar": [
            "http://swapi.dev/api/starships/12/",
            "http://swapi.dev/api/starships/22/"
        ],
        "creado": "2014-12-09T13:50:51.644000Z",
        "editado": "2014-12-20T21:17:56.891000Z",
        "url": "http://swapi.dev/api/persona/1/"
    }
}

```

### Commando de prueba local:

- `$ serverless invoke local -f getPersonas --data '{ "queryStringParameters": {"page":"1"}}' `

#### Metodo GET que obtiene todas las personas por pagina

```javascript
{
    "statusCode": 200,
    "personas": [
        {
            "obj_id": "ad7d103b-a873-4743-ad2b-fbf70239273e",
            "nombre": "Luke Skywalker",
            "altura": "172",
            "masa": "77",
            "color_pelo": "blond",
            "color_piel": "fair",
            "color_ojo": "blue",
            "nacimiento": "19BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [],
            "vehiculo": [
                "http://swapi.dev/api/vehicles/14/",
                "http://swapi.dev/api/vehicles/30/"
            ],
            "nave_estelar": [
                "http://swapi.dev/api/starships/12/",
                "http://swapi.dev/api/starships/22/"
            ],
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.dev/api/persona/1/"
        },
        {
            "obj_id": "26bf5a28-8633-4138-948d-a7830738113e",
            "nombre": "C-3PO",
            "altura": "167",
            "masa": "75",
            "color_pelo": "n/a",
            "color_piel": "gold",
            "color_ojo": "yellow",
            "nacimiento": "112BBY",
            "genero": "n/a",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [
                "http://swapi.dev/api/species/2/"
            ],
            "vehiculo": [],
            "nave_estelar": [],
            "creado": "2014-12-10T15:10:51.357000Z",
            "editado": "2014-12-20T21:17:50.309000Z",
            "url": "http://swapi.dev/api/persona/2/"
        },
        {
            "obj_id": "33c830f9-0fe1-4c60-a5dd-dcc715df6e3b",
            "nombre": "R2-D2",
            "altura": "96",
            "masa": "32",
            "color_pelo": "n/a",
            "color_piel": "white, blue",
            "color_ojo": "red",
            "nacimiento": "33BBY",
            "genero": "n/a",
            "planeta_natal": "http://swapi.dev/api/planets/8/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [
                "http://swapi.dev/api/species/2/"
            ],
            "vehiculo": [],
            "nave_estelar": [],
            "creado": "2014-12-10T15:11:50.376000Z",
            "editado": "2014-12-20T21:17:50.311000Z",
            "url": "http://swapi.dev/api/persona/3/"
        },
        {
            "obj_id": "c9cf3e28-f906-4e4d-9b06-6682db032373",
            "nombre": "Darth Vader",
            "altura": "202",
            "masa": "136",
            "color_pelo": "none",
            "color_piel": "white",
            "color_ojo": "yellow",
            "nacimiento": "41.9BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [],
            "vehiculo": [],
            "nave_estelar": [
                "http://swapi.dev/api/starships/13/"
            ],
            "creado": "2014-12-10T15:18:20.704000Z",
            "editado": "2014-12-20T21:17:50.313000Z",
            "url": "http://swapi.dev/api/persona/4/"
        },
        {
            "obj_id": "71323eb1-a4fe-41c7-b0bc-79b89e10e1f1",
            "nombre": "Leia Organa",
            "altura": "150",
            "masa": "49",
            "color_pelo": "brown",
            "color_piel": "light",
            "color_ojo": "brown",
            "nacimiento": "19BBY",
            "genero": "female",
            "planeta_natal": "http://swapi.dev/api/planets/2/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [],
            "vehiculo": [
                "http://swapi.dev/api/vehicles/30/"
            ],
            "nave_estelar": [],
            "creado": "2014-12-10T15:20:09.791000Z",
            "editado": "2014-12-20T21:17:50.315000Z",
            "url": "http://swapi.dev/api/persona/5/"
        },
        {
            "obj_id": "7157a59a-e370-47f4-ab23-924805776e67",
            "nombre": "Owen Lars",
            "altura": "178",
            "masa": "120",
            "color_pelo": "brown, grey",
            "color_piel": "light",
            "color_ojo": "blue",
            "nacimiento": "52BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [],
            "vehiculo": [],
            "nave_estelar": [],
            "creado": "2014-12-10T15:52:14.024000Z",
            "editado": "2014-12-20T21:17:50.317000Z",
            "url": "http://swapi.dev/api/persona/6/"
        },
        {
            "obj_id": "63dddc92-3840-4aec-91f3-45126f63b6b8",
            "nombre": "Beru Whitesun lars",
            "altura": "165",
            "masa": "75",
            "color_pelo": "brown",
            "color_piel": "light",
            "color_ojo": "blue",
            "nacimiento": "47BBY",
            "genero": "female",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [],
            "vehiculo": [],
            "nave_estelar": [],
            "creado": "2014-12-10T15:53:41.121000Z",
            "editado": "2014-12-20T21:17:50.319000Z",
            "url": "http://swapi.dev/api/persona/7/"
        },
        {
            "obj_id": "55fea466-c726-472d-a375-aa5c141a19b8",
            "nombre": "R5-D4",
            "altura": "97",
            "masa": "32",
            "color_pelo": "n/a",
            "color_piel": "white, red",
            "color_ojo": "red",
            "nacimiento": "unknown",
            "genero": "n/a",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": [
                "http://swapi.dev/api/films/1/"
            ],
            "especie": [
                "http://swapi.dev/api/species/2/"
            ],
            "vehiculo": [],
            "nave_estelar": [],
            "creado": "2014-12-10T15:57:50.959000Z",
            "editado": "2014-12-20T21:17:50.321000Z",
            "url": "http://swapi.dev/api/persona/8/"
        },
        {
            "obj_id": "417eb701-ccfd-47fa-a2c9-4ddb1d5ad8ed",
            "nombre": "Biggs Darklighter",
            "altura": "183",
            "masa": "84",
            "color_pelo": "black",
            "color_piel": "light",
            "color_ojo": "brown",
            "nacimiento": "24BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": [
                "http://swapi.dev/api/films/1/"
            ],
            "especie": [],
            "vehiculo": [],
            "nave_estelar": [
                "http://swapi.dev/api/starships/12/"
            ],
            "creado": "2014-12-10T15:59:50.509000Z",
            "editado": "2014-12-20T21:17:50.323000Z",
            "url": "http://swapi.dev/api/persona/9/"
        },
        {
            "obj_id": "c522252e-0484-452e-b975-79fffe928587",
            "nombre": "Obi-Wan Kenobi",
            "altura": "182",
            "masa": "77",
            "color_pelo": "auburn, white",
            "color_piel": "fair",
            "color_ojo": "blue-gray",
            "nacimiento": "57BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/20/",
            "pelicula": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "especie": [],
            "vehiculo": [
                "http://swapi.dev/api/vehicles/38/"
            ],
            "nave_estelar": [
                "http://swapi.dev/api/starships/48/",
                "http://swapi.dev/api/starships/59/",
                "http://swapi.dev/api/starships/64/",
                "http://swapi.dev/api/starships/65/",
                "http://swapi.dev/api/starships/74/"
            ],
            "creado": "2014-12-10T16:16:29.192000Z",
            "editado": "2014-12-20T21:17:50.325000Z",
            "url": "http://swapi.dev/api/persona/10/"
        }
    ]
}
```

### Commando de prueba local:

- `$ serverless invoke local -f getApiPersona --data '{ "queryStringParameters": {"id":"1"}}'`

#### API Endpoint de la Base de Datos MySQL

```javascript
{
    "statusCode": 200,
    "persona": [
        {
            "id": 1,
            "obj_id": "10b575ed-d854-44d2-8960-a92cd4bfeb2e",
            "nombre": "Luke Skywalker",
            "altura": "180",
            "masa": "77",
            "color_pelo": "blond",
            "color_piel": "fair",
            "color_ojo": "blue",
            "nacimiento": "19BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": "[\"http://swapi.dev/api/films/1/\",\"http://swapi.dev/api/films/2/\",\"http://swapi.dev/api/films/3/\",\"http://swapi.dev/api/films/6/\"]",
            "especie": "[]",
            "vehiculo": "[\"http://swapi.dev/api/vehicles/14/\",\"http://swapi.dev/api/vehicles/30/\"]",
            "nave_estelar": "[\"http://swapi.dev/api/starships/12/\",\"http://swapi.dev/api/starships/22/\"]",
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.dev/api/persona/1/",
            "created_at": "2020-11-30T21:07:32.000Z"
        }
    ]
}
```

### Commando de prueba local:

- `$ serverless invoke local -f getApiPersonas `

#### API Endpoint de la Base de Datos MySQL. Extrae de la tabla personas.

```javascript
{
    "statusCode": 200,
    "personas": [
        {
            "id": 1,
            "obj_id": "10b575ed-d854-44d2-8960-a92cd4bfeb2e",
            "nombre": "Luke Skywalker",
            "altura": "180",
            "masa": "77",
            "color_pelo": "blond",
            "color_piel": "fair",
            "color_ojo": "blue",
            "nacimiento": "19BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": "[\"http://swapi.dev/api/films/1/\",\"http://swapi.dev/api/films/2/\",\"http://swapi.dev/api/films/3/\",\"http://swapi.dev/api/films/6/\"]",
            "especie": "[]",
            "vehiculo": "[\"http://swapi.dev/api/vehicles/14/\",\"http://swapi.dev/api/vehicles/30/\"]",
            "nave_estelar": "[\"http://swapi.dev/api/starships/12/\",\"http://swapi.dev/api/starships/22/\"]",
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.dev/api/persona/1/",
            "created_at": "2020-11-30T21:07:32.000Z"
        },
        {
            "id": 2,
            "obj_id": "10b575ed-d854-44d2-8960-a92cd4bfeb2e",
            "nombre": "Luke Skywalker",
            "altura": "172",
            "masa": "77",
            "color_pelo": "blond",
            "color_piel": "fair",
            "color_ojo": "blue",
            "nacimiento": "19BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": "[\"http://swapi.dev/api/films/1/\",\"http://swapi.dev/api/films/2/\",\"http://swapi.dev/api/films/3/\",\"http://swapi.dev/api/films/6/\"]",
            "especie": "[]",
            "vehiculo": "[\"http://swapi.dev/api/vehicles/14/\",\"http://swapi.dev/api/vehicles/30/\"]",
            "nave_estelar": "[\"http://swapi.dev/api/starships/12/\",\"http://swapi.dev/api/starships/22/\"]",
            "creado": "2014-12-09T13:50:51.644000Z",
            "editado": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.dev/api/persona/1/",
            "created_at": "2020-11-30T21:33:45.000Z"
        },
        {
            "id": 3,
            "obj_id": "e22ae9c3-ea8a-413c-a48d-f0af9110c83c",
            "nombre": "Owen Lars",
            "altura": "178",
            "masa": "120",
            "color_pelo": "brown, grey",
            "color_piel": "light",
            "color_ojo": "blue",
            "nacimiento": "52BBY",
            "genero": "male",
            "planeta_natal": "http://swapi.dev/api/planets/1/",
            "pelicula": "[\"http://swapi.dev/api/films/1/\",\"http://swapi.dev/api/films/5/\",\"http://swapi.dev/api/films/6/\"]",
            "especie": "[]",
            "vehiculo": "[]",
            "nave_estelar": "[]",
            "creado": "2014-12-10T15:52:14.024000Z",
            "editado": "2014-12-20T21:17:50.317000Z",
            "url": "http://swapi.dev/api/persona/6/",
            "created_at": "2020-11-30T21:51:25.000Z"
        }
    ]
}
```
