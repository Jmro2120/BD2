const City = require('../../models/city');

function createCities() {
    City.bulkCreate(
        [
            {
                "cityId": 5001,
                "cityName": "Medellín",
                "departamentId": 5
            },
            {
                "cityId": 5002,
                "cityName": "Abejorral",
                "departamentId": 5
            },
            {
                "cityId": 5004,
                "cityName": "Abriaquí",
                "departamentId": 5
            },
            {
                "cityId": 5021,
                "cityName": "Alejandría",
                "departamentId": 5
            },
            {
                "cityId": 503,
                "cityName": "Amagá",
                "departamentId": 5
            },
            {
                "cityId": 5031,
                "cityName": "Amalfi",
                "departamentId": 5
            },
            {
                "cityId": 5034,
                "cityName": "Andes",
                "departamentId": 5
            },
            {
                "cityId": 5036,
                "cityName": "Angelópolis",
                "departamentId": 5
            },
            {
                "cityId": 5038,
                "cityName": "Angostura",
                "departamentId": 5
            },
            {
                "cityId": 504,
                "cityName": "Anorí",
                "departamentId": 5
            },
            {
                "cityId": 15832,
                "cityName": "Tununguá",
                "departamentId": 15
            },
            {
                "cityId": 5044,
                "cityName": "Anza",
                "departamentId": 5
            },
            {
                "cityId": 5045,
                "cityName": "Apartadó",
                "departamentId": 5
            },
            {
                "cityId": 5051,
                "cityName": "Arboletes",
                "departamentId": 5
            },
            {
                "cityId": 5055,
                "cityName": "Argelia",
                "departamentId": 5
            },
            {
                "cityId": 5059,
                "cityName": "Armenia",
                "departamentId": 5
            },
            {
                "cityId": 5079,
                "cityName": "Barbosa",
                "departamentId": 5
            },
            {
                "cityId": 5088,
                "cityName": "Bello",
                "departamentId": 5
            },
            {
                "cityId": 5091,
                "cityName": "Betania",
                "departamentId": 5
            },
            {
                "cityId": 5093,
                "cityName": "Betulia",
                "departamentId": 5
            },
            {
                "cityId": 5101,
                "cityName": "Ciudad Bolívar",
                "departamentId": 5
            },
            {
                "cityId": 5107,
                "cityName": "Briceño",
                "departamentId": 5
            },
            {
                "cityId": 5113,
                "cityName": "Buriticá",
                "departamentId": 5
            },
            {
                "cityId": 512,
                "cityName": "Cáceres",
                "departamentId": 5
            },
            {
                "cityId": 5125,
                "cityName": "Caicedo",
                "departamentId": 5
            },
            {
                "cityId": 5129,
                "cityName": "Caldas",
                "departamentId": 5
            },
            {
                "cityId": 5134,
                "cityName": "Campamento",
                "departamentId": 5
            },
            {
                "cityId": 5138,
                "cityName": "Cañasgordas",
                "departamentId": 5
            },
            {
                "cityId": 5142,
                "cityName": "Caracolí",
                "departamentId": 5
            },
            {
                "cityId": 5145,
                "cityName": "Caramanta",
                "departamentId": 5
            },
            {
                "cityId": 5147,
                "cityName": "Carepa",
                "departamentId": 5
            },
            {
                "cityId": 15476,
                "cityName": "Motavita",
                "departamentId": 15
            },
            {
                "cityId": 515,
                "cityName": "Carolina",
                "departamentId": 5
            },
            {
                "cityId": 5154,
                "cityName": "Caucasia",
                "departamentId": 5
            },
            {
                "cityId": 5172,
                "cityName": "Chigorodó",
                "departamentId": 5
            },
            {
                "cityId": 519,
                "cityName": "Cisneros",
                "departamentId": 5
            },
            {
                "cityId": 5197,
                "cityName": "Cocorná",
                "departamentId": 5
            },
            {
                "cityId": 5206,
                "cityName": "Concepción",
                "departamentId": 5
            },
            {
                "cityId": 5209,
                "cityName": "Concordia",
                "departamentId": 5
            },
            {
                "cityId": 5212,
                "cityName": "Copacabana",
                "departamentId": 5
            },
            {
                "cityId": 5234,
                "cityName": "Dabeiba",
                "departamentId": 5
            },
            {
                "cityId": 5237,
                "cityName": "Don Matías",
                "departamentId": 5
            },
            {
                "cityId": 524,
                "cityName": "Ebéjico",
                "departamentId": 5
            },
            {
                "cityId": 525,
                "cityName": "El Bagre",
                "departamentId": 5
            },
            {
                "cityId": 5264,
                "cityName": "Entrerrios",
                "departamentId": 5
            },
            {
                "cityId": 5266,
                "cityName": "Envigado",
                "departamentId": 5
            },
            {
                "cityId": 5282,
                "cityName": "Fredonia",
                "departamentId": 5
            },
            {
                "cityId": 23675,
                "cityName": "San Bernardo del Viento",
                "departamentId": 23
            },
            {
                "cityId": 5306,
                "cityName": "Giraldo",
                "departamentId": 5
            },
            {
                "cityId": 5308,
                "cityName": "Girardota",
                "departamentId": 5
            },
            {
                "cityId": 531,
                "cityName": "Gómez Plata",
                "departamentId": 5
            },
            {
                "cityId": 27361,
                "cityName": "Istmina",
                "departamentId": 27
            },
            {
                "cityId": 5315,
                "cityName": "Guadalupe",
                "departamentId": 5
            },
            {
                "cityId": 5318,
                "cityName": "Guarne",
                "departamentId": 5
            },
            {
                "cityId": 5321,
                "cityName": "Guatapé",
                "departamentId": 5
            },
            {
                "cityId": 5347,
                "cityName": "Heliconia",
                "departamentId": 5
            },
            {
                "cityId": 5353,
                "cityName": "Hispania",
                "departamentId": 5
            },
            {
                "cityId": 536,
                "cityName": "Itagui",
                "departamentId": 5
            },
            {
                "cityId": 5361,
                "cityName": "Ituango",
                "departamentId": 5
            },
            {
                "cityId": 5086,
                "cityName": "Belmira",
                "departamentId": 5
            },
            {
                "cityId": 5368,
                "cityName": "Jericó",
                "departamentId": 5
            },
            {
                "cityId": 5376,
                "cityName": "La Ceja",
                "departamentId": 5
            },
            {
                "cityId": 538,
                "cityName": "La Estrella",
                "departamentId": 5
            },
            {
                "cityId": 539,
                "cityName": "La Pintada",
                "departamentId": 5
            },
            {
                "cityId": 54,
                "cityName": "La Unión",
                "departamentId": 5
            },
            {
                "cityId": 5411,
                "cityName": "Liborina",
                "departamentId": 5
            },
            {
                "cityId": 5425,
                "cityName": "Maceo",
                "departamentId": 5
            },
            {
                "cityId": 544,
                "cityName": "Marinilla",
                "departamentId": 5
            },
            {
                "cityId": 5467,
                "cityName": "Montebello",
                "departamentId": 5
            },
            {
                "cityId": 5475,
                "cityName": "Murindó",
                "departamentId": 5
            },
            {
                "cityId": 548,
                "cityName": "Mutatá",
                "departamentId": 5
            },
            {
                "cityId": 5483,
                "cityName": "Nariño",
                "departamentId": 5
            },
            {
                "cityId": 549,
                "cityName": "Necoclí",
                "departamentId": 5
            },
            {
                "cityId": 5495,
                "cityName": "Nechí",
                "departamentId": 5
            },
            {
                "cityId": 5501,
                "cityName": "Olaya",
                "departamentId": 5
            },
            {
                "cityId": 5541,
                "cityName": "Peñol",
                "departamentId": 5
            },
            {
                "cityId": 5543,
                "cityName": "Peque",
                "departamentId": 5
            },
            {
                "cityId": 5576,
                "cityName": "Pueblorrico",
                "departamentId": 5
            },
            {
                "cityId": 5579,
                "cityName": "Puerto Berrío",
                "departamentId": 5
            },
            {
                "cityId": 5585,
                "cityName": "Puerto Nare",
                "departamentId": 5
            },
            {
                "cityId": 5591,
                "cityName": "Puerto Triunfo",
                "departamentId": 5
            },
            {
                "cityId": 5604,
                "cityName": "Remedios",
                "departamentId": 5
            },
            {
                "cityId": 5607,
                "cityName": "Retiro",
                "departamentId": 5
            },
            {
                "cityId": 5615,
                "cityName": "Rionegro",
                "departamentId": 5
            },
            {
                "cityId": 5628,
                "cityName": "Sabanalarga",
                "departamentId": 5
            },
            {
                "cityId": 5631,
                "cityName": "Sabaneta",
                "departamentId": 5
            },
            {
                "cityId": 5642,
                "cityName": "Salgar",
                "departamentId": 5
            },
            {
                "cityId": 15189,
                "cityName": "Ciénega",
                "departamentId": 15
            },
            {
                "cityId": 52699,
                "cityName": "Santacruz",
                "departamentId": 52
            },
            {
                "cityId": 5652,
                "cityName": "San Francisco",
                "departamentId": 5
            },
            {
                "cityId": 5656,
                "cityName": "San Jerónimo",
                "departamentId": 5
            },
            {
                "cityId": 68575,
                "cityName": "Puerto Wilches",
                "departamentId": 68
            },
            {
                "cityId": 68573,
                "cityName": "Puerto Parra",
                "departamentId": 68
            },
            {
                "cityId": 566,
                "cityName": "San Luis",
                "departamentId": 5
            },
            {
                "cityId": 5664,
                "cityName": "San Pedro",
                "departamentId": 5
            },
            {
                "cityId": 5667,
                "cityName": "San Rafael",
                "departamentId": 5
            },
            {
                "cityId": 567,
                "cityName": "San Roque",
                "departamentId": 5
            },
            {
                "cityId": 5674,
                "cityName": "San Vicente",
                "departamentId": 5
            },
            {
                "cityId": 5679,
                "cityName": "Santa Bárbara",
                "departamentId": 5
            },
            {
                "cityId": 569,
                "cityName": "Santo Domingo",
                "departamentId": 5
            },
            {
                "cityId": 5697,
                "cityName": "El Santuario",
                "departamentId": 5
            },
            {
                "cityId": 5736,
                "cityName": "Segovia",
                "departamentId": 5
            },
            {
                "cityId": 5761,
                "cityName": "Sopetrán",
                "departamentId": 5
            },
            {
                "cityId": 5037,
                "cityName": "Uribe",
                "departamentId": 50
            },
            {
                "cityId": 5789,
                "cityName": "Támesis",
                "departamentId": 5
            },
            {
                "cityId": 579,
                "cityName": "Tarazá",
                "departamentId": 5
            },
            {
                "cityId": 5792,
                "cityName": "Tarso",
                "departamentId": 5
            },
            {
                "cityId": 5809,
                "cityName": "Titiribí",
                "departamentId": 5
            },
            {
                "cityId": 5819,
                "cityName": "Toledo",
                "departamentId": 5
            },
            {
                "cityId": 5837,
                "cityName": "Turbo",
                "departamentId": 5
            },
            {
                "cityId": 5842,
                "cityName": "Uramita",
                "departamentId": 5
            },
            {
                "cityId": 5847,
                "cityName": "Urrao",
                "departamentId": 5
            },
            {
                "cityId": 5854,
                "cityName": "Valdivia",
                "departamentId": 5
            },
            {
                "cityId": 5856,
                "cityName": "Valparaíso",
                "departamentId": 5
            },
            {
                "cityId": 5858,
                "cityName": "Vegachí",
                "departamentId": 5
            },
            {
                "cityId": 5861,
                "cityName": "Venecia",
                "departamentId": 5
            },
            {
                "cityId": 5885,
                "cityName": "Yalí",
                "departamentId": 5
            },
            {
                "cityId": 5887,
                "cityName": "Yarumal",
                "departamentId": 5
            },
            {
                "cityId": 589,
                "cityName": "Yolombó",
                "departamentId": 5
            },
            {
                "cityId": 5893,
                "cityName": "Yondó",
                "departamentId": 5
            },
            {
                "cityId": 5895,
                "cityName": "Zaragoza",
                "departamentId": 5
            },
            {
                "cityId": 8001,
                "cityName": "Barranquilla",
                "departamentId": 8
            },
            {
                "cityId": 8078,
                "cityName": "Baranoa",
                "departamentId": 8
            },
            {
                "cityId": 8141,
                "cityName": "Candelaria",
                "departamentId": 8
            },
            {
                "cityId": 8296,
                "cityName": "Galapa",
                "departamentId": 8
            },
            {
                "cityId": 8421,
                "cityName": "Luruaco",
                "departamentId": 8
            },
            {
                "cityId": 8433,
                "cityName": "Malambo",
                "departamentId": 8
            },
            {
                "cityId": 8436,
                "cityName": "Manatí",
                "departamentId": 8
            },
            {
                "cityId": 8549,
                "cityName": "Piojó",
                "departamentId": 8
            },
            {
                "cityId": 8558,
                "cityName": "Polonuevo",
                "departamentId": 8
            },
            {
                "cityId": 8634,
                "cityName": "Sabanagrande",
                "departamentId": 8
            },
            {
                "cityId": 8638,
                "cityName": "Sabanalarga",
                "departamentId": 8
            },
            {
                "cityId": 8675,
                "cityName": "Santa Lucía",
                "departamentId": 8
            },
            {
                "cityId": 8685,
                "cityName": "Santo Tomás",
                "departamentId": 8
            },
            {
                "cityId": 8758,
                "cityName": "Soledad",
                "departamentId": 8
            },
            {
                "cityId": 877,
                "cityName": "Suan",
                "departamentId": 8
            },
            {
                "cityId": 8832,
                "cityName": "Tubará",
                "departamentId": 8
            },
            {
                "cityId": 8849,
                "cityName": "Usiacurí",
                "departamentId": 8
            },
            {
                "cityId": 13006,
                "cityName": "Achí",
                "departamentId": 13
            },
            {
                "cityId": 13042,
                "cityName": "Arenal",
                "departamentId": 13
            },
            {
                "cityId": 13052,
                "cityName": "Arjona",
                "departamentId": 13
            },
            {
                "cityId": 13062,
                "cityName": "Arroyohondo",
                "departamentId": 13
            },
            {
                "cityId": 1314,
                "cityName": "Calamar",
                "departamentId": 13
            },
            {
                "cityId": 1316,
                "cityName": "Cantagallo",
                "departamentId": 13
            },
            {
                "cityId": 13188,
                "cityName": "Cicuco",
                "departamentId": 13
            },
            {
                "cityId": 13212,
                "cityName": "Córdoba",
                "departamentId": 13
            },
            {
                "cityId": 13222,
                "cityName": "Clemencia",
                "departamentId": 13
            },
            {
                "cityId": 13248,
                "cityName": "El Guamo",
                "departamentId": 13
            },
            {
                "cityId": 1343,
                "cityName": "Magangué",
                "departamentId": 13
            },
            {
                "cityId": 13433,
                "cityName": "Mahates",
                "departamentId": 13
            },
            {
                "cityId": 1344,
                "cityName": "Margarita",
                "departamentId": 13
            },
            {
                "cityId": 13458,
                "cityName": "Montecristo",
                "departamentId": 13
            },
            {
                "cityId": 13468,
                "cityName": "Mompós",
                "departamentId": 13
            },
            {
                "cityId": 13473,
                "cityName": "Morales",
                "departamentId": 13
            },
            {
                "cityId": 1349,
                "cityName": "Norosí",
                "departamentId": 13
            },
            {
                "cityId": 13549,
                "cityName": "Pinillos",
                "departamentId": 13
            },
            {
                "cityId": 1358,
                "cityName": "Regidor",
                "departamentId": 13
            },
            {
                "cityId": 136,
                "cityName": "Río Viejo",
                "departamentId": 13
            },
            {
                "cityId": 13647,
                "cityName": "San Estanislao",
                "departamentId": 13
            },
            {
                "cityId": 1365,
                "cityName": "San Fernando",
                "departamentId": 13
            },
            {
                "cityId": 13657,
                "cityName": "San Juan Nepomuceno",
                "departamentId": 13
            },
            {
                "cityId": 13673,
                "cityName": "Santa Catalina",
                "departamentId": 13
            },
            {
                "cityId": 13683,
                "cityName": "Santa Rosa",
                "departamentId": 13
            },
            {
                "cityId": 13744,
                "cityName": "Simití",
                "departamentId": 13
            },
            {
                "cityId": 1376,
                "cityName": "Soplaviento",
                "departamentId": 13
            },
            {
                "cityId": 1378,
                "cityName": "Talaigua Nuevo",
                "departamentId": 13
            },
            {
                "cityId": 1381,
                "cityName": "Tiquisio",
                "departamentId": 13
            },
            {
                "cityId": 13836,
                "cityName": "Turbaco",
                "departamentId": 13
            },
            {
                "cityId": 13838,
                "cityName": "Turbaná",
                "departamentId": 13
            },
            {
                "cityId": 13873,
                "cityName": "Villanueva",
                "departamentId": 13
            },
            {
                "cityId": 15001,
                "cityName": "Tunja",
                "departamentId": 15
            },
            {
                "cityId": 15022,
                "cityName": "Almeida",
                "departamentId": 15
            },
            {
                "cityId": 15047,
                "cityName": "Aquitania",
                "departamentId": 15
            },
            {
                "cityId": 15051,
                "cityName": "Arcabuco",
                "departamentId": 15
            },
            {
                "cityId": 1509,
                "cityName": "Berbeo",
                "departamentId": 15
            },
            {
                "cityId": 15092,
                "cityName": "Betéitiva",
                "departamentId": 15
            },
            {
                "cityId": 15097,
                "cityName": "Boavita",
                "departamentId": 15
            },
            {
                "cityId": 15104,
                "cityName": "Boyacá",
                "departamentId": 15
            },
            {
                "cityId": 15106,
                "cityName": "Briceño",
                "departamentId": 15
            },
            {
                "cityId": 15109,
                "cityName": "Buena Vista",
                "departamentId": 15
            },
            {
                "cityId": 15114,
                "cityName": "Busbanzá",
                "departamentId": 15
            },
            {
                "cityId": 15131,
                "cityName": "Caldas",
                "departamentId": 15
            },
            {
                "cityId": 15135,
                "cityName": "Campohermoso",
                "departamentId": 15
            },
            {
                "cityId": 15162,
                "cityName": "Cerinza",
                "departamentId": 15
            },
            {
                "cityId": 15172,
                "cityName": "Chinavita",
                "departamentId": 15
            },
            {
                "cityId": 15176,
                "cityName": "Chiquinquirá",
                "departamentId": 15
            },
            {
                "cityId": 1518,
                "cityName": "Chiscas",
                "departamentId": 15
            },
            {
                "cityId": 15183,
                "cityName": "Chita",
                "departamentId": 15
            },
            {
                "cityId": 15185,
                "cityName": "Chitaraque",
                "departamentId": 15
            },
            {
                "cityId": 15187,
                "cityName": "Chivatá",
                "departamentId": 15
            },
            {
                "cityId": 15204,
                "cityName": "Cómbita",
                "departamentId": 15
            },
            {
                "cityId": 15212,
                "cityName": "Coper",
                "departamentId": 15
            },
            {
                "cityId": 15215,
                "cityName": "Corrales",
                "departamentId": 15
            },
            {
                "cityId": 15218,
                "cityName": "Covarachía",
                "departamentId": 15
            },
            {
                "cityId": 15223,
                "cityName": "Cubará",
                "departamentId": 15
            },
            {
                "cityId": 15224,
                "cityName": "Cucaita",
                "departamentId": 15
            },
            {
                "cityId": 15226,
                "cityName": "Cuítiva",
                "departamentId": 15
            },
            {
                "cityId": 15232,
                "cityName": "Chíquiza",
                "departamentId": 15
            },
            {
                "cityId": 15236,
                "cityName": "Chivor",
                "departamentId": 15
            },
            {
                "cityId": 15238,
                "cityName": "Duitama",
                "departamentId": 15
            },
            {
                "cityId": 15244,
                "cityName": "El Cocuy",
                "departamentId": 15
            },
            {
                "cityId": 15248,
                "cityName": "El Espino",
                "departamentId": 15
            },
            {
                "cityId": 15272,
                "cityName": "Firavitoba",
                "departamentId": 15
            },
            {
                "cityId": 15276,
                "cityName": "Floresta",
                "departamentId": 15
            },
            {
                "cityId": 15293,
                "cityName": "Gachantivá",
                "departamentId": 15
            },
            {
                "cityId": 15296,
                "cityName": "Gameza",
                "departamentId": 15
            },
            {
                "cityId": 15299,
                "cityName": "Garagoa",
                "departamentId": 15
            },
            {
                "cityId": 15317,
                "cityName": "Guacamayas",
                "departamentId": 15
            },
            {
                "cityId": 15322,
                "cityName": "Guateque",
                "departamentId": 15
            },
            {
                "cityId": 15325,
                "cityName": "Guayatá",
                "departamentId": 15
            },
            {
                "cityId": 15332,
                "cityName": "Güicán",
                "departamentId": 15
            },
            {
                "cityId": 15362,
                "cityName": "Iza",
                "departamentId": 15
            },
            {
                "cityId": 15367,
                "cityName": "Jenesano",
                "departamentId": 15
            },
            {
                "cityId": 15368,
                "cityName": "Jericó",
                "departamentId": 15
            },
            {
                "cityId": 15377,
                "cityName": "Labranzagrande",
                "departamentId": 15
            },
            {
                "cityId": 1538,
                "cityName": "La Capilla",
                "departamentId": 15
            },
            {
                "cityId": 15401,
                "cityName": "La Victoria",
                "departamentId": 15
            },
            {
                "cityId": 15425,
                "cityName": "Macanal",
                "departamentId": 15
            },
            {
                "cityId": 15442,
                "cityName": "Maripí",
                "departamentId": 15
            },
            {
                "cityId": 15455,
                "cityName": "Miraflores",
                "departamentId": 15
            },
            {
                "cityId": 15464,
                "cityName": "Mongua",
                "departamentId": 15
            },
            {
                "cityId": 15466,
                "cityName": "Monguí",
                "departamentId": 15
            },
            {
                "cityId": 15469,
                "cityName": "Moniquirá",
                "departamentId": 15
            },
            {
                "cityId": 1548,
                "cityName": "Muzo",
                "departamentId": 15
            },
            {
                "cityId": 15491,
                "cityName": "Nobsa",
                "departamentId": 15
            },
            {
                "cityId": 15494,
                "cityName": "Nuevo Colón",
                "departamentId": 15
            },
            {
                "cityId": 155,
                "cityName": "Oicatá",
                "departamentId": 15
            },
            {
                "cityId": 15507,
                "cityName": "Otanche",
                "departamentId": 15
            },
            {
                "cityId": 15511,
                "cityName": "Pachavita",
                "departamentId": 15
            },
            {
                "cityId": 15514,
                "cityName": "Páez",
                "departamentId": 15
            },
            {
                "cityId": 15516,
                "cityName": "Paipa",
                "departamentId": 15
            },
            {
                "cityId": 15518,
                "cityName": "Pajarito",
                "departamentId": 15
            },
            {
                "cityId": 15522,
                "cityName": "Panqueba",
                "departamentId": 15
            },
            {
                "cityId": 15531,
                "cityName": "Pauna",
                "departamentId": 15
            },
            {
                "cityId": 15533,
                "cityName": "Paya",
                "departamentId": 15
            },
            {
                "cityId": 15542,
                "cityName": "Pesca",
                "departamentId": 15
            },
            {
                "cityId": 1555,
                "cityName": "Pisba",
                "departamentId": 15
            },
            {
                "cityId": 15572,
                "cityName": "Puerto Boyacá",
                "departamentId": 15
            },
            {
                "cityId": 1558,
                "cityName": "Quípama",
                "departamentId": 15
            },
            {
                "cityId": 15599,
                "cityName": "Ramiriquí",
                "departamentId": 15
            },
            {
                "cityId": 156,
                "cityName": "Ráquira",
                "departamentId": 15
            },
            {
                "cityId": 15621,
                "cityName": "Rondón",
                "departamentId": 15
            },
            {
                "cityId": 15632,
                "cityName": "Saboyá",
                "departamentId": 15
            },
            {
                "cityId": 15638,
                "cityName": "Sáchica",
                "departamentId": 15
            },
            {
                "cityId": 15646,
                "cityName": "Samacá",
                "departamentId": 15
            },
            {
                "cityId": 1566,
                "cityName": "San Eduardo",
                "departamentId": 15
            },
            {
                "cityId": 15673,
                "cityName": "San Mateo",
                "departamentId": 15
            },
            {
                "cityId": 15686,
                "cityName": "Santana",
                "departamentId": 15
            },
            {
                "cityId": 1569,
                "cityName": "Santa María",
                "departamentId": 15
            },
            {
                "cityId": 15696,
                "cityName": "Santa Sofía",
                "departamentId": 15
            },
            {
                "cityId": 1572,
                "cityName": "Sativanorte",
                "departamentId": 15
            },
            {
                "cityId": 15723,
                "cityName": "Sativasur",
                "departamentId": 15
            },
            {
                "cityId": 1574,
                "cityName": "Siachoque",
                "departamentId": 15
            },
            {
                "cityId": 15753,
                "cityName": "Soatá",
                "departamentId": 15
            },
            {
                "cityId": 15755,
                "cityName": "Socotá",
                "departamentId": 15
            },
            {
                "cityId": 15757,
                "cityName": "Socha",
                "departamentId": 15
            },
            {
                "cityId": 15759,
                "cityName": "Sogamoso",
                "departamentId": 15
            },
            {
                "cityId": 15761,
                "cityName": "Somondoco",
                "departamentId": 15
            },
            {
                "cityId": 15762,
                "cityName": "Sora",
                "departamentId": 15
            },
            {
                "cityId": 15763,
                "cityName": "Sotaquirá",
                "departamentId": 15
            },
            {
                "cityId": 15764,
                "cityName": "Soracá",
                "departamentId": 15
            },
            {
                "cityId": 15774,
                "cityName": "Susacón",
                "departamentId": 15
            },
            {
                "cityId": 15776,
                "cityName": "Sutamarchán",
                "departamentId": 15
            },
            {
                "cityId": 15778,
                "cityName": "Sutatenza",
                "departamentId": 15
            },
            {
                "cityId": 1579,
                "cityName": "Tasco",
                "departamentId": 15
            },
            {
                "cityId": 15798,
                "cityName": "Tenza",
                "departamentId": 15
            },
            {
                "cityId": 15804,
                "cityName": "Tibaná",
                "departamentId": 15
            },
            {
                "cityId": 15808,
                "cityName": "Tinjacá",
                "departamentId": 15
            },
            {
                "cityId": 1581,
                "cityName": "Tipacoque",
                "departamentId": 15
            },
            {
                "cityId": 15814,
                "cityName": "Toca",
                "departamentId": 15
            },
            {
                "cityId": 1582,
                "cityName": "Tópaga",
                "departamentId": 15
            },
            {
                "cityId": 15822,
                "cityName": "Tota",
                "departamentId": 15
            },
            {
                "cityId": 15835,
                "cityName": "Turmequé",
                "departamentId": 15
            },
            {
                "cityId": 15839,
                "cityName": "Tutazá",
                "departamentId": 15
            },
            {
                "cityId": 15842,
                "cityName": "Umbita",
                "departamentId": 15
            },
            {
                "cityId": 15861,
                "cityName": "Ventaquemada",
                "departamentId": 15
            },
            {
                "cityId": 15879,
                "cityName": "Viracachá",
                "departamentId": 15
            },
            {
                "cityId": 15897,
                "cityName": "Zetaquira",
                "departamentId": 15
            },
            {
                "cityId": 17001,
                "cityName": "Manizales",
                "departamentId": 17
            },
            {
                "cityId": 17013,
                "cityName": "Aguadas",
                "departamentId": 17
            },
            {
                "cityId": 17042,
                "cityName": "Anserma",
                "departamentId": 17
            },
            {
                "cityId": 1705,
                "cityName": "Aranzazu",
                "departamentId": 17
            },
            {
                "cityId": 17088,
                "cityName": "Belalcázar",
                "departamentId": 17
            },
            {
                "cityId": 17174,
                "cityName": "Chinchiná",
                "departamentId": 17
            },
            {
                "cityId": 17272,
                "cityName": "Filadelfia",
                "departamentId": 17
            },
            {
                "cityId": 1738,
                "cityName": "La Dorada",
                "departamentId": 17
            },
            {
                "cityId": 17388,
                "cityName": "La Merced",
                "departamentId": 17
            },
            {
                "cityId": 17433,
                "cityName": "Manzanares",
                "departamentId": 17
            },
            {
                "cityId": 17442,
                "cityName": "Marmato",
                "departamentId": 17
            },
            {
                "cityId": 17446,
                "cityName": "Marulanda",
                "departamentId": 17
            },
            {
                "cityId": 17486,
                "cityName": "Neira",
                "departamentId": 17
            },
            {
                "cityId": 17495,
                "cityName": "Norcasia",
                "departamentId": 17
            },
            {
                "cityId": 17513,
                "cityName": "Pácora",
                "departamentId": 17
            },
            {
                "cityId": 17524,
                "cityName": "Palestina",
                "departamentId": 17
            },
            {
                "cityId": 17541,
                "cityName": "Pensilvania",
                "departamentId": 17
            },
            {
                "cityId": 17614,
                "cityName": "Riosucio",
                "departamentId": 17
            },
            {
                "cityId": 17616,
                "cityName": "Risaralda",
                "departamentId": 17
            },
            {
                "cityId": 17653,
                "cityName": "Salamina",
                "departamentId": 17
            },
            {
                "cityId": 17662,
                "cityName": "Samaná",
                "departamentId": 17
            },
            {
                "cityId": 17665,
                "cityName": "San José",
                "departamentId": 17
            },
            {
                "cityId": 17777,
                "cityName": "Supía",
                "departamentId": 17
            },
            {
                "cityId": 17867,
                "cityName": "Victoria",
                "departamentId": 17
            },
            {
                "cityId": 17873,
                "cityName": "Villamaría",
                "departamentId": 17
            },
            {
                "cityId": 17877,
                "cityName": "Viterbo",
                "departamentId": 17
            },
            {
                "cityId": 18001,
                "cityName": "Florencia",
                "departamentId": 18
            },
            {
                "cityId": 18029,
                "cityName": "Albania",
                "departamentId": 18
            },
            {
                "cityId": 18205,
                "cityName": "Curillo",
                "departamentId": 18
            },
            {
                "cityId": 18247,
                "cityName": "El Doncello",
                "departamentId": 18
            },
            {
                "cityId": 18256,
                "cityName": "El Paujil",
                "departamentId": 18
            },
            {
                "cityId": 18479,
                "cityName": "Morelia",
                "departamentId": 18
            },
            {
                "cityId": 18592,
                "cityName": "Puerto Rico",
                "departamentId": 18
            },
            {
                "cityId": 18756,
                "cityName": "Solano",
                "departamentId": 18
            },
            {
                "cityId": 18785,
                "cityName": "Solita",
                "departamentId": 18
            },
            {
                "cityId": 1886,
                "cityName": "Valparaíso",
                "departamentId": 18
            },
            {
                "cityId": 19001,
                "cityName": "Popayán",
                "departamentId": 19
            },
            {
                "cityId": 19022,
                "cityName": "Almaguer",
                "departamentId": 19
            },
            {
                "cityId": 1905,
                "cityName": "Argelia",
                "departamentId": 19
            },
            {
                "cityId": 19075,
                "cityName": "Balboa",
                "departamentId": 19
            },
            {
                "cityId": 191,
                "cityName": "Bolívar",
                "departamentId": 19
            },
            {
                "cityId": 1911,
                "cityName": "Buenos Aires",
                "departamentId": 19
            },
            {
                "cityId": 1913,
                "cityName": "Cajibío",
                "departamentId": 19
            },
            {
                "cityId": 19137,
                "cityName": "Caldono",
                "departamentId": 19
            },
            {
                "cityId": 19142,
                "cityName": "Caloto",
                "departamentId": 19
            },
            {
                "cityId": 19212,
                "cityName": "Corinto",
                "departamentId": 19
            },
            {
                "cityId": 19256,
                "cityName": "El Tambo",
                "departamentId": 19
            },
            {
                "cityId": 1929,
                "cityName": "Florencia",
                "departamentId": 19
            },
            {
                "cityId": 193,
                "cityName": "Guachené",
                "departamentId": 19
            },
            {
                "cityId": 19318,
                "cityName": "Guapi",
                "departamentId": 19
            },
            {
                "cityId": 19355,
                "cityName": "Inzá",
                "departamentId": 19
            },
            {
                "cityId": 19364,
                "cityName": "Jambaló",
                "departamentId": 19
            },
            {
                "cityId": 19392,
                "cityName": "La Sierra",
                "departamentId": 19
            },
            {
                "cityId": 19397,
                "cityName": "La Vega",
                "departamentId": 19
            },
            {
                "cityId": 19418,
                "cityName": "López",
                "departamentId": 19
            },
            {
                "cityId": 1945,
                "cityName": "Mercaderes",
                "departamentId": 19
            },
            {
                "cityId": 19455,
                "cityName": "Miranda",
                "departamentId": 19
            },
            {
                "cityId": 19473,
                "cityName": "Morales",
                "departamentId": 19
            },
            {
                "cityId": 19513,
                "cityName": "Padilla",
                "departamentId": 19
            },
            {
                "cityId": 19532,
                "cityName": "Patía",
                "departamentId": 19
            },
            {
                "cityId": 19533,
                "cityName": "Piamonte",
                "departamentId": 19
            },
            {
                "cityId": 19548,
                "cityName": "Piendamó",
                "departamentId": 19
            },
            {
                "cityId": 19573,
                "cityName": "Puerto Tejada",
                "departamentId": 19
            },
            {
                "cityId": 19585,
                "cityName": "Puracé",
                "departamentId": 19
            },
            {
                "cityId": 19622,
                "cityName": "Rosas",
                "departamentId": 19
            },
            {
                "cityId": 19701,
                "cityName": "Santa Rosa",
                "departamentId": 19
            },
            {
                "cityId": 19743,
                "cityName": "Silvia",
                "departamentId": 19
            },
            {
                "cityId": 1976,
                "cityName": "Sotara",
                "departamentId": 19
            },
            {
                "cityId": 1978,
                "cityName": "Suárez",
                "departamentId": 19
            },
            {
                "cityId": 19785,
                "cityName": "Sucre",
                "departamentId": 19
            },
            {
                "cityId": 19807,
                "cityName": "Timbpio",
                "departamentId": 19
            },
            {
                "cityId": 19809,
                "cityName": "Timbiquí",
                "departamentId": 19
            },
            {
                "cityId": 19821,
                "cityName": "Toribio",
                "departamentId": 19
            },
            {
                "cityId": 19824,
                "cityName": "Totoró",
                "departamentId": 19
            },
            {
                "cityId": 19845,
                "cityName": "Villa Rica",
                "departamentId": 19
            },
            {
                "cityId": 20001,
                "cityName": "Valledupar",
                "departamentId": 20
            },
            {
                "cityId": 20011,
                "cityName": "Aguachica",
                "departamentId": 20
            },
            {
                "cityId": 20013,
                "cityName": "Agustín Codazzi",
                "departamentId": 20
            },
            {
                "cityId": 20032,
                "cityName": "Astrea",
                "departamentId": 20
            },
            {
                "cityId": 20045,
                "cityName": "Becerril",
                "departamentId": 20
            },
            {
                "cityId": 2006,
                "cityName": "Bosconia",
                "departamentId": 20
            },
            {
                "cityId": 20175,
                "cityName": "Chimichagua",
                "departamentId": 20
            },
            {
                "cityId": 20178,
                "cityName": "Chiriguaná",
                "departamentId": 20
            },
            {
                "cityId": 20228,
                "cityName": "Curumaní",
                "departamentId": 20
            },
            {
                "cityId": 20238,
                "cityName": "El Copey",
                "departamentId": 20
            },
            {
                "cityId": 2025,
                "cityName": "El Paso",
                "departamentId": 20
            },
            {
                "cityId": 20295,
                "cityName": "Gamarra",
                "departamentId": 20
            },
            {
                "cityId": 2031,
                "cityName": "González",
                "departamentId": 20
            },
            {
                "cityId": 20383,
                "cityName": "La Gloria",
                "departamentId": 20
            },
            {
                "cityId": 20443,
                "cityName": "Manaure",
                "departamentId": 20
            },
            {
                "cityId": 20517,
                "cityName": "Pailitas",
                "departamentId": 20
            },
            {
                "cityId": 2055,
                "cityName": "Pelaya",
                "departamentId": 20
            },
            {
                "cityId": 2057,
                "cityName": "Pueblo Bello",
                "departamentId": 20
            },
            {
                "cityId": 20621,
                "cityName": "La Paz",
                "departamentId": 20
            },
            {
                "cityId": 2071,
                "cityName": "San Alberto",
                "departamentId": 20
            },
            {
                "cityId": 2075,
                "cityName": "San Diego",
                "departamentId": 20
            },
            {
                "cityId": 2077,
                "cityName": "San Martín",
                "departamentId": 20
            },
            {
                "cityId": 20787,
                "cityName": "Tamalameque",
                "departamentId": 20
            },
            {
                "cityId": 23001,
                "cityName": "Montería",
                "departamentId": 23
            },
            {
                "cityId": 23068,
                "cityName": "Ayapel",
                "departamentId": 23
            },
            {
                "cityId": 23079,
                "cityName": "Buenavista",
                "departamentId": 23
            },
            {
                "cityId": 2309,
                "cityName": "Canalete",
                "departamentId": 23
            },
            {
                "cityId": 23162,
                "cityName": "Cereté",
                "departamentId": 23
            },
            {
                "cityId": 23168,
                "cityName": "Chimá",
                "departamentId": 23
            },
            {
                "cityId": 23182,
                "cityName": "Chinú",
                "departamentId": 23
            },
            {
                "cityId": 233,
                "cityName": "Cotorra",
                "departamentId": 23
            },
            {
                "cityId": 23417,
                "cityName": "Lorica",
                "departamentId": 23
            },
            {
                "cityId": 23419,
                "cityName": "Los Córdobas",
                "departamentId": 23
            },
            {
                "cityId": 23464,
                "cityName": "Momil",
                "departamentId": 23
            },
            {
                "cityId": 235,
                "cityName": "Moñitos",
                "departamentId": 23
            },
            {
                "cityId": 23555,
                "cityName": "Planeta Rica",
                "departamentId": 23
            },
            {
                "cityId": 2357,
                "cityName": "Pueblo Nuevo",
                "departamentId": 23
            },
            {
                "cityId": 23574,
                "cityName": "Puerto Escondido",
                "departamentId": 23
            },
            {
                "cityId": 23586,
                "cityName": "Purísima",
                "departamentId": 23
            },
            {
                "cityId": 2366,
                "cityName": "Sahagún",
                "departamentId": 23
            },
            {
                "cityId": 2367,
                "cityName": "San Andrés Sotavento",
                "departamentId": 23
            },
            {
                "cityId": 23672,
                "cityName": "San Antero",
                "departamentId": 23
            },
            {
                "cityId": 23686,
                "cityName": "San Pelayo",
                "departamentId": 23
            },
            {
                "cityId": 23807,
                "cityName": "Tierralta",
                "departamentId": 23
            },
            {
                "cityId": 23815,
                "cityName": "Tuchín",
                "departamentId": 23
            },
            {
                "cityId": 23855,
                "cityName": "Valencia",
                "departamentId": 23
            },
            {
                "cityId": 25035,
                "cityName": "Anapoima",
                "departamentId": 25
            },
            {
                "cityId": 25053,
                "cityName": "Arbeláez",
                "departamentId": 25
            },
            {
                "cityId": 25086,
                "cityName": "Beltrán",
                "departamentId": 25
            },
            {
                "cityId": 25095,
                "cityName": "Bituima",
                "departamentId": 25
            },
            {
                "cityId": 25099,
                "cityName": "Bojacá",
                "departamentId": 25
            },
            {
                "cityId": 2512,
                "cityName": "Cabrera",
                "departamentId": 25
            },
            {
                "cityId": 25123,
                "cityName": "Cachipay",
                "departamentId": 25
            },
            {
                "cityId": 25126,
                "cityName": "Cajicá",
                "departamentId": 25
            },
            {
                "cityId": 25148,
                "cityName": "Caparrapí",
                "departamentId": 25
            },
            {
                "cityId": 25151,
                "cityName": "Caqueza",
                "departamentId": 25
            },
            {
                "cityId": 25168,
                "cityName": "Chaguaní",
                "departamentId": 25
            },
            {
                "cityId": 25178,
                "cityName": "Chipaque",
                "departamentId": 25
            },
            {
                "cityId": 25181,
                "cityName": "Choachí",
                "departamentId": 25
            },
            {
                "cityId": 25183,
                "cityName": "Chocontá",
                "departamentId": 25
            },
            {
                "cityId": 252,
                "cityName": "Cogua",
                "departamentId": 25
            },
            {
                "cityId": 25214,
                "cityName": "Cota",
                "departamentId": 25
            },
            {
                "cityId": 25224,
                "cityName": "Cucunubá",
                "departamentId": 25
            },
            {
                "cityId": 25245,
                "cityName": "El Colegio",
                "departamentId": 25
            },
            {
                "cityId": 2526,
                "cityName": "El Rosal",
                "departamentId": 25
            },
            {
                "cityId": 25279,
                "cityName": "Fomeque",
                "departamentId": 25
            },
            {
                "cityId": 25281,
                "cityName": "Fosca",
                "departamentId": 25
            },
            {
                "cityId": 25286,
                "cityName": "Funza",
                "departamentId": 25
            },
            {
                "cityId": 25288,
                "cityName": "Fúquene",
                "departamentId": 25
            },
            {
                "cityId": 25293,
                "cityName": "Gachala",
                "departamentId": 25
            },
            {
                "cityId": 25295,
                "cityName": "Gachancipá",
                "departamentId": 25
            },
            {
                "cityId": 25297,
                "cityName": "Gachetá",
                "departamentId": 25
            },
            {
                "cityId": 25307,
                "cityName": "Girardot",
                "departamentId": 25
            },
            {
                "cityId": 25312,
                "cityName": "Granada",
                "departamentId": 25
            },
            {
                "cityId": 25317,
                "cityName": "Guachetá",
                "departamentId": 25
            },
            {
                "cityId": 2532,
                "cityName": "Guaduas",
                "departamentId": 25
            },
            {
                "cityId": 25322,
                "cityName": "Guasca",
                "departamentId": 25
            },
            {
                "cityId": 25324,
                "cityName": "Guataquí",
                "departamentId": 25
            },
            {
                "cityId": 25326,
                "cityName": "Guatavita",
                "departamentId": 25
            },
            {
                "cityId": 25335,
                "cityName": "Guayabetal",
                "departamentId": 25
            },
            {
                "cityId": 25339,
                "cityName": "Gutiérrez",
                "departamentId": 25
            },
            {
                "cityId": 25368,
                "cityName": "Jerusalén",
                "departamentId": 25
            },
            {
                "cityId": 25372,
                "cityName": "Junín",
                "departamentId": 25
            },
            {
                "cityId": 25377,
                "cityName": "La Calera",
                "departamentId": 25
            },
            {
                "cityId": 25386,
                "cityName": "La Mesa",
                "departamentId": 25
            },
            {
                "cityId": 25394,
                "cityName": "La Palma",
                "departamentId": 25
            },
            {
                "cityId": 25398,
                "cityName": "La Peña",
                "departamentId": 25
            },
            {
                "cityId": 25402,
                "cityName": "La Vega",
                "departamentId": 25
            },
            {
                "cityId": 25407,
                "cityName": "Lenguazaque",
                "departamentId": 25
            },
            {
                "cityId": 25426,
                "cityName": "Macheta",
                "departamentId": 25
            },
            {
                "cityId": 2543,
                "cityName": "Madrid",
                "departamentId": 25
            },
            {
                "cityId": 25436,
                "cityName": "Manta",
                "departamentId": 25
            },
            {
                "cityId": 25438,
                "cityName": "Medina",
                "departamentId": 25
            },
            {
                "cityId": 25473,
                "cityName": "Mosquera",
                "departamentId": 25
            },
            {
                "cityId": 25483,
                "cityName": "Nariño",
                "departamentId": 25
            },
            {
                "cityId": 25486,
                "cityName": "Nemocón",
                "departamentId": 25
            },
            {
                "cityId": 25488,
                "cityName": "Nilo",
                "departamentId": 25
            },
            {
                "cityId": 25489,
                "cityName": "Nimaima",
                "departamentId": 25
            },
            {
                "cityId": 25491,
                "cityName": "Nocaima",
                "departamentId": 25
            },
            {
                "cityId": 25506,
                "cityName": "Venecia",
                "departamentId": 25
            },
            {
                "cityId": 25513,
                "cityName": "Pacho",
                "departamentId": 25
            },
            {
                "cityId": 25518,
                "cityName": "Paime",
                "departamentId": 25
            },
            {
                "cityId": 25524,
                "cityName": "Pandi",
                "departamentId": 25
            },
            {
                "cityId": 2553,
                "cityName": "Paratebueno",
                "departamentId": 25
            },
            {
                "cityId": 25535,
                "cityName": "Pasca",
                "departamentId": 25
            },
            {
                "cityId": 25572,
                "cityName": "Puerto Salgar",
                "departamentId": 25
            },
            {
                "cityId": 2558,
                "cityName": "Pulí",
                "departamentId": 25
            },
            {
                "cityId": 25592,
                "cityName": "Quebradanegra",
                "departamentId": 25
            },
            {
                "cityId": 25594,
                "cityName": "Quetame",
                "departamentId": 25
            },
            {
                "cityId": 25596,
                "cityName": "Quipile",
                "departamentId": 25
            },
            {
                "cityId": 25599,
                "cityName": "Apulo",
                "departamentId": 25
            },
            {
                "cityId": 25612,
                "cityName": "Ricaurte",
                "departamentId": 25
            },
            {
                "cityId": 25649,
                "cityName": "San Bernardo",
                "departamentId": 25
            },
            {
                "cityId": 25653,
                "cityName": "San Cayetano",
                "departamentId": 25
            },
            {
                "cityId": 25658,
                "cityName": "San Francisco",
                "departamentId": 25
            },
            {
                "cityId": 25736,
                "cityName": "Sesquilé",
                "departamentId": 25
            },
            {
                "cityId": 2574,
                "cityName": "Sibaté",
                "departamentId": 25
            },
            {
                "cityId": 25743,
                "cityName": "Silvania",
                "departamentId": 25
            },
            {
                "cityId": 25745,
                "cityName": "Simijaca",
                "departamentId": 25
            },
            {
                "cityId": 25754,
                "cityName": "Soacha",
                "departamentId": 25
            },
            {
                "cityId": 25769,
                "cityName": "Subachoque",
                "departamentId": 25
            },
            {
                "cityId": 25772,
                "cityName": "Suesca",
                "departamentId": 25
            },
            {
                "cityId": 25777,
                "cityName": "Supatá",
                "departamentId": 25
            },
            {
                "cityId": 25779,
                "cityName": "Susa",
                "departamentId": 25
            },
            {
                "cityId": 25781,
                "cityName": "Sutatausa",
                "departamentId": 25
            },
            {
                "cityId": 25785,
                "cityName": "Tabio",
                "departamentId": 25
            },
            {
                "cityId": 25793,
                "cityName": "Tausa",
                "departamentId": 25
            },
            {
                "cityId": 25797,
                "cityName": "Tena",
                "departamentId": 25
            },
            {
                "cityId": 25799,
                "cityName": "Tenjo",
                "departamentId": 25
            },
            {
                "cityId": 25805,
                "cityName": "Tibacuy",
                "departamentId": 25
            },
            {
                "cityId": 25807,
                "cityName": "Tibirita",
                "departamentId": 25
            },
            {
                "cityId": 25815,
                "cityName": "Tocaima",
                "departamentId": 25
            },
            {
                "cityId": 25817,
                "cityName": "Tocancipá",
                "departamentId": 25
            },
            {
                "cityId": 25823,
                "cityName": "Topaipí",
                "departamentId": 25
            },
            {
                "cityId": 25839,
                "cityName": "Ubalá",
                "departamentId": 25
            },
            {
                "cityId": 25841,
                "cityName": "Ubaque",
                "departamentId": 25
            },
            {
                "cityId": 25845,
                "cityName": "Une",
                "departamentId": 25
            },
            {
                "cityId": 25851,
                "cityName": "Útica",
                "departamentId": 25
            },
            {
                "cityId": 25867,
                "cityName": "Vianí",
                "departamentId": 25
            },
            {
                "cityId": 25871,
                "cityName": "Villagómez",
                "departamentId": 25
            },
            {
                "cityId": 25873,
                "cityName": "Villapinzón",
                "departamentId": 25
            },
            {
                "cityId": 25875,
                "cityName": "Villeta",
                "departamentId": 25
            },
            {
                "cityId": 25878,
                "cityName": "Viotá",
                "departamentId": 25
            },
            {
                "cityId": 25898,
                "cityName": "Zipacón",
                "departamentId": 25
            },
            {
                "cityId": 27001,
                "cityName": "Quibdó",
                "departamentId": 27
            },
            {
                "cityId": 27006,
                "cityName": "Acandí",
                "departamentId": 27
            },
            {
                "cityId": 27025,
                "cityName": "Alto Baudo",
                "departamentId": 27
            },
            {
                "cityId": 2705,
                "cityName": "Atrato",
                "departamentId": 27
            },
            {
                "cityId": 27073,
                "cityName": "Bagadó",
                "departamentId": 27
            },
            {
                "cityId": 27075,
                "cityName": "Bahía Solano",
                "departamentId": 27
            },
            {
                "cityId": 27077,
                "cityName": "Bajo Baudó",
                "departamentId": 27
            },
            {
                "cityId": 27099,
                "cityName": "Bojaya",
                "departamentId": 27
            },
            {
                "cityId": 2716,
                "cityName": "Cértegui",
                "departamentId": 27
            },
            {
                "cityId": 27205,
                "cityName": "Condoto",
                "departamentId": 27
            },
            {
                "cityId": 27372,
                "cityName": "Juradó",
                "departamentId": 27
            },
            {
                "cityId": 27413,
                "cityName": "Lloró",
                "departamentId": 27
            },
            {
                "cityId": 27425,
                "cityName": "Medio Atrato",
                "departamentId": 27
            },
            {
                "cityId": 2743,
                "cityName": "Medio Baudó",
                "departamentId": 27
            },
            {
                "cityId": 2745,
                "cityName": "Medio San Juan",
                "departamentId": 27
            },
            {
                "cityId": 27491,
                "cityName": "Nóvita",
                "departamentId": 27
            },
            {
                "cityId": 27495,
                "cityName": "Nuquí",
                "departamentId": 27
            },
            {
                "cityId": 2758,
                "cityName": "Río Iro",
                "departamentId": 27
            },
            {
                "cityId": 276,
                "cityName": "Río Quito",
                "departamentId": 27
            },
            {
                "cityId": 27615,
                "cityName": "Riosucio",
                "departamentId": 27
            },
            {
                "cityId": 27745,
                "cityName": "Sipí",
                "departamentId": 27
            },
            {
                "cityId": 278,
                "cityName": "Unguía",
                "departamentId": 27
            },
            {
                "cityId": 41001,
                "cityName": "Neiva",
                "departamentId": 41
            },
            {
                "cityId": 41006,
                "cityName": "Acevedo",
                "departamentId": 41
            },
            {
                "cityId": 41013,
                "cityName": "Agrado",
                "departamentId": 41
            },
            {
                "cityId": 41016,
                "cityName": "Aipe",
                "departamentId": 41
            },
            {
                "cityId": 4102,
                "cityName": "Algeciras",
                "departamentId": 41
            },
            {
                "cityId": 41026,
                "cityName": "Altamira",
                "departamentId": 41
            },
            {
                "cityId": 41078,
                "cityName": "Baraya",
                "departamentId": 41
            },
            {
                "cityId": 41132,
                "cityName": "Campoalegre",
                "departamentId": 41
            },
            {
                "cityId": 41206,
                "cityName": "Colombia",
                "departamentId": 41
            },
            {
                "cityId": 41244,
                "cityName": "Elías",
                "departamentId": 41
            },
            {
                "cityId": 41298,
                "cityName": "Garzón",
                "departamentId": 41
            },
            {
                "cityId": 41306,
                "cityName": "Gigante",
                "departamentId": 41
            },
            {
                "cityId": 41319,
                "cityName": "Guadalupe",
                "departamentId": 41
            },
            {
                "cityId": 41349,
                "cityName": "Hobo",
                "departamentId": 41
            },
            {
                "cityId": 41357,
                "cityName": "Iquira",
                "departamentId": 41
            },
            {
                "cityId": 41359,
                "cityName": "Isnos",
                "departamentId": 41
            },
            {
                "cityId": 41378,
                "cityName": "La Argentina",
                "departamentId": 41
            },
            {
                "cityId": 41396,
                "cityName": "La Plata",
                "departamentId": 41
            },
            {
                "cityId": 41483,
                "cityName": "Nátaga",
                "departamentId": 41
            },
            {
                "cityId": 41503,
                "cityName": "Oporapa",
                "departamentId": 41
            },
            {
                "cityId": 41518,
                "cityName": "Paicol",
                "departamentId": 41
            },
            {
                "cityId": 41524,
                "cityName": "Palermo",
                "departamentId": 41
            },
            {
                "cityId": 4153,
                "cityName": "Palestina",
                "departamentId": 41
            },
            {
                "cityId": 41548,
                "cityName": "Pital",
                "departamentId": 41
            },
            {
                "cityId": 41551,
                "cityName": "Pitalito",
                "departamentId": 41
            },
            {
                "cityId": 41615,
                "cityName": "Rivera",
                "departamentId": 41
            },
            {
                "cityId": 4166,
                "cityName": "Saladoblanco",
                "departamentId": 41
            },
            {
                "cityId": 41676,
                "cityName": "Santa María",
                "departamentId": 41
            },
            {
                "cityId": 4177,
                "cityName": "Suaza",
                "departamentId": 41
            },
            {
                "cityId": 41791,
                "cityName": "Tarqui",
                "departamentId": 41
            },
            {
                "cityId": 41797,
                "cityName": "Tesalia",
                "departamentId": 41
            },
            {
                "cityId": 41799,
                "cityName": "Tello",
                "departamentId": 41
            },
            {
                "cityId": 41801,
                "cityName": "Teruel",
                "departamentId": 41
            },
            {
                "cityId": 41807,
                "cityName": "Timaná",
                "departamentId": 41
            },
            {
                "cityId": 41872,
                "cityName": "Villavieja",
                "departamentId": 41
            },
            {
                "cityId": 41885,
                "cityName": "Yaguará",
                "departamentId": 41
            },
            {
                "cityId": 44001,
                "cityName": "Riohacha",
                "departamentId": 44
            },
            {
                "cityId": 44035,
                "cityName": "Albania",
                "departamentId": 44
            },
            {
                "cityId": 44078,
                "cityName": "Barrancas",
                "departamentId": 44
            },
            {
                "cityId": 4409,
                "cityName": "Dibula",
                "departamentId": 44
            },
            {
                "cityId": 44098,
                "cityName": "Distracción",
                "departamentId": 44
            },
            {
                "cityId": 4411,
                "cityName": "El Molino",
                "departamentId": 44
            },
            {
                "cityId": 44279,
                "cityName": "Fonseca",
                "departamentId": 44
            },
            {
                "cityId": 44378,
                "cityName": "Hatonuevo",
                "departamentId": 44
            },
            {
                "cityId": 4443,
                "cityName": "Maicao",
                "departamentId": 44
            },
            {
                "cityId": 4456,
                "cityName": "Manaure",
                "departamentId": 44
            },
            {
                "cityId": 44847,
                "cityName": "Uribia",
                "departamentId": 44
            },
            {
                "cityId": 44855,
                "cityName": "Urumita",
                "departamentId": 44
            },
            {
                "cityId": 44874,
                "cityName": "Villanueva",
                "departamentId": 44
            },
            {
                "cityId": 47001,
                "cityName": "Santa Marta",
                "departamentId": 47
            },
            {
                "cityId": 4703,
                "cityName": "Algarrobo",
                "departamentId": 47
            },
            {
                "cityId": 47053,
                "cityName": "Aracataca",
                "departamentId": 47
            },
            {
                "cityId": 47058,
                "cityName": "Ariguaní",
                "departamentId": 47
            },
            {
                "cityId": 47161,
                "cityName": "Cerro San Antonio",
                "departamentId": 47
            },
            {
                "cityId": 4717,
                "cityName": "Chivolo",
                "departamentId": 47
            },
            {
                "cityId": 47205,
                "cityName": "Concordia",
                "departamentId": 47
            },
            {
                "cityId": 47245,
                "cityName": "El Banco",
                "departamentId": 47
            },
            {
                "cityId": 47258,
                "cityName": "El Piñon",
                "departamentId": 47
            },
            {
                "cityId": 47268,
                "cityName": "El Retén",
                "departamentId": 47
            },
            {
                "cityId": 47288,
                "cityName": "Fundación",
                "departamentId": 47
            },
            {
                "cityId": 47318,
                "cityName": "Guamal",
                "departamentId": 47
            },
            {
                "cityId": 4746,
                "cityName": "Nueva Granada",
                "departamentId": 47
            },
            {
                "cityId": 47541,
                "cityName": "Pedraza",
                "departamentId": 47
            },
            {
                "cityId": 47551,
                "cityName": "Pivijay",
                "departamentId": 47
            },
            {
                "cityId": 47555,
                "cityName": "Plato",
                "departamentId": 47
            },
            {
                "cityId": 47605,
                "cityName": "Remolino",
                "departamentId": 47
            },
            {
                "cityId": 47675,
                "cityName": "Salamina",
                "departamentId": 47
            },
            {
                "cityId": 47703,
                "cityName": "San Zenón",
                "departamentId": 47
            },
            {
                "cityId": 47707,
                "cityName": "Santa Ana",
                "departamentId": 47
            },
            {
                "cityId": 47745,
                "cityName": "Sitionuevo",
                "departamentId": 47
            },
            {
                "cityId": 47798,
                "cityName": "Tenerife",
                "departamentId": 47
            },
            {
                "cityId": 4796,
                "cityName": "Zapayán",
                "departamentId": 47
            },
            {
                "cityId": 4798,
                "cityName": "Zona Bananera",
                "departamentId": 47
            },
            {
                "cityId": 50001,
                "cityName": "Villavicencio",
                "departamentId": 50
            },
            {
                "cityId": 50006,
                "cityName": "Acacias",
                "departamentId": 50
            },
            {
                "cityId": 50124,
                "cityName": "Cabuyaro",
                "departamentId": 50
            },
            {
                "cityId": 50223,
                "cityName": "Cubarral",
                "departamentId": 50
            },
            {
                "cityId": 50226,
                "cityName": "Cumaral",
                "departamentId": 50
            },
            {
                "cityId": 50245,
                "cityName": "El Calvario",
                "departamentId": 50
            },
            {
                "cityId": 50251,
                "cityName": "El Castillo",
                "departamentId": 50
            },
            {
                "cityId": 5027,
                "cityName": "El Dorado",
                "departamentId": 50
            },
            {
                "cityId": 50313,
                "cityName": "Granada",
                "departamentId": 50
            },
            {
                "cityId": 50318,
                "cityName": "Guamal",
                "departamentId": 50
            },
            {
                "cityId": 50325,
                "cityName": "Mapiripán",
                "departamentId": 50
            },
            {
                "cityId": 5033,
                "cityName": "Mesetas",
                "departamentId": 50
            },
            {
                "cityId": 5035,
                "cityName": "La Macarena",
                "departamentId": 50
            },
            {
                "cityId": 504,
                "cityName": "Lejanías",
                "departamentId": 50
            },
            {
                "cityId": 5045,
                "cityName": "Puerto Concordia",
                "departamentId": 50
            },
            {
                "cityId": 50568,
                "cityName": "Puerto Gaitán",
                "departamentId": 50
            },
            {
                "cityId": 50573,
                "cityName": "Puerto López",
                "departamentId": 50
            },
            {
                "cityId": 50577,
                "cityName": "Puerto Lleras",
                "departamentId": 50
            },
            {
                "cityId": 5059,
                "cityName": "Puerto Rico",
                "departamentId": 50
            },
            {
                "cityId": 50606,
                "cityName": "Restrepo",
                "departamentId": 50
            },
            {
                "cityId": 50686,
                "cityName": "San Juanito",
                "departamentId": 50
            },
            {
                "cityId": 50689,
                "cityName": "San Martín",
                "departamentId": 50
            },
            {
                "cityId": 50711,
                "cityName": "Vista Hermosa",
                "departamentId": 50
            },
            {
                "cityId": 52001,
                "cityName": "Pasto",
                "departamentId": 52
            },
            {
                "cityId": 52019,
                "cityName": "Albán",
                "departamentId": 52
            },
            {
                "cityId": 52022,
                "cityName": "Aldana",
                "departamentId": 52
            },
            {
                "cityId": 52036,
                "cityName": "Ancuyá",
                "departamentId": 52
            },
            {
                "cityId": 52079,
                "cityName": "Barbacoas",
                "departamentId": 52
            },
            {
                "cityId": 52203,
                "cityName": "Colón",
                "departamentId": 52
            },
            {
                "cityId": 52207,
                "cityName": "Consaca",
                "departamentId": 52
            },
            {
                "cityId": 5221,
                "cityName": "Contadero",
                "departamentId": 52
            },
            {
                "cityId": 52215,
                "cityName": "Córdoba",
                "departamentId": 52
            },
            {
                "cityId": 52224,
                "cityName": "Cuaspud",
                "departamentId": 52
            },
            {
                "cityId": 52227,
                "cityName": "Cumbal",
                "departamentId": 52
            },
            {
                "cityId": 52233,
                "cityName": "Cumbitara",
                "departamentId": 52
            },
            {
                "cityId": 5225,
                "cityName": "El Charco",
                "departamentId": 52
            },
            {
                "cityId": 52254,
                "cityName": "El Peñol",
                "departamentId": 52
            },
            {
                "cityId": 52256,
                "cityName": "El Rosario",
                "departamentId": 52
            },
            {
                "cityId": 5226,
                "cityName": "El Tambo",
                "departamentId": 52
            },
            {
                "cityId": 52287,
                "cityName": "Funes",
                "departamentId": 52
            },
            {
                "cityId": 52317,
                "cityName": "Guachucal",
                "departamentId": 52
            },
            {
                "cityId": 5232,
                "cityName": "Guaitarilla",
                "departamentId": 52
            },
            {
                "cityId": 52323,
                "cityName": "Gualmatán",
                "departamentId": 52
            },
            {
                "cityId": 52352,
                "cityName": "Iles",
                "departamentId": 52
            },
            {
                "cityId": 52354,
                "cityName": "Imués",
                "departamentId": 52
            },
            {
                "cityId": 52356,
                "cityName": "Ipiales",
                "departamentId": 52
            },
            {
                "cityId": 52378,
                "cityName": "La Cruz",
                "departamentId": 52
            },
            {
                "cityId": 52381,
                "cityName": "La Florida",
                "departamentId": 52
            },
            {
                "cityId": 52385,
                "cityName": "La Llanada",
                "departamentId": 52
            },
            {
                "cityId": 5239,
                "cityName": "La Tola",
                "departamentId": 52
            },
            {
                "cityId": 52399,
                "cityName": "La Unión",
                "departamentId": 52
            },
            {
                "cityId": 52405,
                "cityName": "Leiva",
                "departamentId": 52
            },
            {
                "cityId": 52411,
                "cityName": "Linares",
                "departamentId": 52
            },
            {
                "cityId": 52418,
                "cityName": "Los Andes",
                "departamentId": 52
            },
            {
                "cityId": 52427,
                "cityName": "Magüí",
                "departamentId": 52
            },
            {
                "cityId": 52435,
                "cityName": "Mallama",
                "departamentId": 52
            },
            {
                "cityId": 52473,
                "cityName": "Mosquera",
                "departamentId": 52
            },
            {
                "cityId": 5248,
                "cityName": "Nariño",
                "departamentId": 52
            },
            {
                "cityId": 5249,
                "cityName": "Olaya Herrera",
                "departamentId": 52
            },
            {
                "cityId": 52506,
                "cityName": "Ospina",
                "departamentId": 52
            },
            {
                "cityId": 5252,
                "cityName": "Francisco Pizarro",
                "departamentId": 52
            },
            {
                "cityId": 5254,
                "cityName": "Policarpa",
                "departamentId": 52
            },
            {
                "cityId": 5256,
                "cityName": "Potosí",
                "departamentId": 52
            },
            {
                "cityId": 52565,
                "cityName": "Providencia",
                "departamentId": 52
            },
            {
                "cityId": 52573,
                "cityName": "Puerres",
                "departamentId": 52
            },
            {
                "cityId": 52585,
                "cityName": "Pupiales",
                "departamentId": 52
            },
            {
                "cityId": 52612,
                "cityName": "Ricaurte",
                "departamentId": 52
            },
            {
                "cityId": 52621,
                "cityName": "Roberto Payán",
                "departamentId": 52
            },
            {
                "cityId": 52678,
                "cityName": "Samaniego",
                "departamentId": 52
            },
            {
                "cityId": 52683,
                "cityName": "Sandoná",
                "departamentId": 52
            },
            {
                "cityId": 52685,
                "cityName": "San Bernardo",
                "departamentId": 52
            },
            {
                "cityId": 52687,
                "cityName": "San Lorenzo",
                "departamentId": 52
            },
            {
                "cityId": 52693,
                "cityName": "San Pablo",
                "departamentId": 52
            },
            {
                "cityId": 52696,
                "cityName": "Santa Bárbara",
                "departamentId": 52
            },
            {
                "cityId": 5272,
                "cityName": "Sapuyes",
                "departamentId": 52
            },
            {
                "cityId": 52786,
                "cityName": "Taminango",
                "departamentId": 52
            },
            {
                "cityId": 52788,
                "cityName": "Tangua",
                "departamentId": 52
            },
            {
                "cityId": 52838,
                "cityName": "Túquerres",
                "departamentId": 52
            },
            {
                "cityId": 52885,
                "cityName": "Yacuanquer",
                "departamentId": 52
            },
            {
                "cityId": 63001,
                "cityName": "Armenia",
                "departamentId": 63
            },
            {
                "cityId": 63111,
                "cityName": "Buenavista",
                "departamentId": 63
            },
            {
                "cityId": 6319,
                "cityName": "Circasia",
                "departamentId": 63
            },
            {
                "cityId": 63212,
                "cityName": "Córdoba",
                "departamentId": 63
            },
            {
                "cityId": 63272,
                "cityName": "Filandia",
                "departamentId": 63
            },
            {
                "cityId": 63401,
                "cityName": "La Tebaida",
                "departamentId": 63
            },
            {
                "cityId": 6347,
                "cityName": "Montenegro",
                "departamentId": 63
            },
            {
                "cityId": 63548,
                "cityName": "Pijao",
                "departamentId": 63
            },
            {
                "cityId": 63594,
                "cityName": "Quimbaya",
                "departamentId": 63
            },
            {
                "cityId": 6369,
                "cityName": "Salento",
                "departamentId": 63
            },
            {
                "cityId": 66001,
                "cityName": "Pereira",
                "departamentId": 66
            },
            {
                "cityId": 66045,
                "cityName": "Apía",
                "departamentId": 66
            },
            {
                "cityId": 66075,
                "cityName": "Balboa",
                "departamentId": 66
            },
            {
                "cityId": 6617,
                "cityName": "Dosquebradas",
                "departamentId": 66
            },
            {
                "cityId": 66318,
                "cityName": "Guática",
                "departamentId": 66
            },
            {
                "cityId": 66383,
                "cityName": "La Celia",
                "departamentId": 66
            },
            {
                "cityId": 664,
                "cityName": "La Virginia",
                "departamentId": 66
            },
            {
                "cityId": 6644,
                "cityName": "Marsella",
                "departamentId": 66
            },
            {
                "cityId": 66456,
                "cityName": "Mistrató",
                "departamentId": 66
            },
            {
                "cityId": 66572,
                "cityName": "Pueblo Rico",
                "departamentId": 66
            },
            {
                "cityId": 66594,
                "cityName": "Quinchía",
                "departamentId": 66
            },
            {
                "cityId": 66687,
                "cityName": "Santuario",
                "departamentId": 66
            },
            {
                "cityId": 68001,
                "cityName": "Bucaramanga",
                "departamentId": 68
            },
            {
                "cityId": 68013,
                "cityName": "Aguada",
                "departamentId": 68
            },
            {
                "cityId": 6802,
                "cityName": "Albania",
                "departamentId": 68
            },
            {
                "cityId": 68051,
                "cityName": "Aratoca",
                "departamentId": 68
            },
            {
                "cityId": 68077,
                "cityName": "Barbosa",
                "departamentId": 68
            },
            {
                "cityId": 68079,
                "cityName": "Barichara",
                "departamentId": 68
            },
            {
                "cityId": 68081,
                "cityName": "Barrancabermeja",
                "departamentId": 68
            },
            {
                "cityId": 68092,
                "cityName": "Betulia",
                "departamentId": 68
            },
            {
                "cityId": 68101,
                "cityName": "Bolívar",
                "departamentId": 68
            },
            {
                "cityId": 68121,
                "cityName": "Cabrera",
                "departamentId": 68
            },
            {
                "cityId": 68132,
                "cityName": "California",
                "departamentId": 68
            },
            {
                "cityId": 68152,
                "cityName": "Carcasí",
                "departamentId": 68
            },
            {
                "cityId": 6816,
                "cityName": "Cepitá",
                "departamentId": 68
            },
            {
                "cityId": 68162,
                "cityName": "Cerrito",
                "departamentId": 68
            },
            {
                "cityId": 68167,
                "cityName": "Charalá",
                "departamentId": 68
            },
            {
                "cityId": 68169,
                "cityName": "Charta",
                "departamentId": 68
            },
            {
                "cityId": 68179,
                "cityName": "Chipatá",
                "departamentId": 68
            },
            {
                "cityId": 6819,
                "cityName": "Cimitarra",
                "departamentId": 68
            },
            {
                "cityId": 68207,
                "cityName": "Concepción",
                "departamentId": 68
            },
            {
                "cityId": 68209,
                "cityName": "Confines",
                "departamentId": 68
            },
            {
                "cityId": 68211,
                "cityName": "Contratación",
                "departamentId": 68
            },
            {
                "cityId": 68217,
                "cityName": "Coromoro",
                "departamentId": 68
            },
            {
                "cityId": 68229,
                "cityName": "Curití",
                "departamentId": 68
            },
            {
                "cityId": 68245,
                "cityName": "El Guacamayo",
                "departamentId": 68
            },
            {
                "cityId": 68255,
                "cityName": "El Playón",
                "departamentId": 68
            },
            {
                "cityId": 68264,
                "cityName": "Encino",
                "departamentId": 68
            },
            {
                "cityId": 68266,
                "cityName": "Enciso",
                "departamentId": 68
            },
            {
                "cityId": 68271,
                "cityName": "Florián",
                "departamentId": 68
            },
            {
                "cityId": 68276,
                "cityName": "Floridablanca",
                "departamentId": 68
            },
            {
                "cityId": 68296,
                "cityName": "Galán",
                "departamentId": 68
            },
            {
                "cityId": 68298,
                "cityName": "Gambita",
                "departamentId": 68
            },
            {
                "cityId": 68307,
                "cityName": "Girón",
                "departamentId": 68
            },
            {
                "cityId": 68318,
                "cityName": "Guaca",
                "departamentId": 68
            },
            {
                "cityId": 6832,
                "cityName": "Guadalupe",
                "departamentId": 68
            },
            {
                "cityId": 68322,
                "cityName": "Guapotá",
                "departamentId": 68
            },
            {
                "cityId": 68324,
                "cityName": "Guavatá",
                "departamentId": 68
            },
            {
                "cityId": 68327,
                "cityName": "Güepsa",
                "departamentId": 68
            },
            {
                "cityId": 68368,
                "cityName": "Jesús María",
                "departamentId": 68
            },
            {
                "cityId": 6837,
                "cityName": "Jordán",
                "departamentId": 68
            },
            {
                "cityId": 68377,
                "cityName": "La Belleza",
                "departamentId": 68
            },
            {
                "cityId": 68385,
                "cityName": "Landázuri",
                "departamentId": 68
            },
            {
                "cityId": 68397,
                "cityName": "La Paz",
                "departamentId": 68
            },
            {
                "cityId": 68406,
                "cityName": "Lebríja",
                "departamentId": 68
            },
            {
                "cityId": 68418,
                "cityName": "Los Santos",
                "departamentId": 68
            },
            {
                "cityId": 68425,
                "cityName": "Macaravita",
                "departamentId": 68
            },
            {
                "cityId": 68432,
                "cityName": "Málaga",
                "departamentId": 68
            },
            {
                "cityId": 68444,
                "cityName": "Matanza",
                "departamentId": 68
            },
            {
                "cityId": 68464,
                "cityName": "Mogotes",
                "departamentId": 68
            },
            {
                "cityId": 68468,
                "cityName": "Molagavita",
                "departamentId": 68
            },
            {
                "cityId": 68498,
                "cityName": "Ocamonte",
                "departamentId": 68
            },
            {
                "cityId": 685,
                "cityName": "Oiba",
                "departamentId": 68
            },
            {
                "cityId": 68502,
                "cityName": "Onzaga",
                "departamentId": 68
            },
            {
                "cityId": 68522,
                "cityName": "Palmar",
                "departamentId": 68
            },
            {
                "cityId": 68533,
                "cityName": "Páramo",
                "departamentId": 68
            },
            {
                "cityId": 68547,
                "cityName": "Piedecuesta",
                "departamentId": 68
            },
            {
                "cityId": 68549,
                "cityName": "Pinchote",
                "departamentId": 68
            },
            {
                "cityId": 68572,
                "cityName": "Puente Nacional",
                "departamentId": 68
            },
            {
                "cityId": 68615,
                "cityName": "Rionegro",
                "departamentId": 68
            },
            {
                "cityId": 68669,
                "cityName": "San Andrés",
                "departamentId": 68
            },
            {
                "cityId": 68679,
                "cityName": "San Gil",
                "departamentId": 68
            },
            {
                "cityId": 68682,
                "cityName": "San Joaquín",
                "departamentId": 68
            },
            {
                "cityId": 68686,
                "cityName": "San Miguel",
                "departamentId": 68
            },
            {
                "cityId": 68705,
                "cityName": "Santa Bárbara",
                "departamentId": 68
            },
            {
                "cityId": 68745,
                "cityName": "Simacota",
                "departamentId": 68
            },
            {
                "cityId": 68755,
                "cityName": "Socorro",
                "departamentId": 68
            },
            {
                "cityId": 6877,
                "cityName": "Suaita",
                "departamentId": 68
            },
            {
                "cityId": 68773,
                "cityName": "Sucre",
                "departamentId": 68
            },
            {
                "cityId": 6878,
                "cityName": "Suratá",
                "departamentId": 68
            },
            {
                "cityId": 6882,
                "cityName": "Tona",
                "departamentId": 68
            },
            {
                "cityId": 68861,
                "cityName": "Vélez",
                "departamentId": 68
            },
            {
                "cityId": 68867,
                "cityName": "Vetas",
                "departamentId": 68
            },
            {
                "cityId": 68872,
                "cityName": "Villanueva",
                "departamentId": 68
            },
            {
                "cityId": 68895,
                "cityName": "Zapatoca",
                "departamentId": 68
            },
            {
                "cityId": 70001,
                "cityName": "Sincelejo",
                "departamentId": 70
            },
            {
                "cityId": 7011,
                "cityName": "Buenavista",
                "departamentId": 70
            },
            {
                "cityId": 70124,
                "cityName": "Caimito",
                "departamentId": 70
            },
            {
                "cityId": 70204,
                "cityName": "Coloso",
                "departamentId": 70
            },
            {
                "cityId": 70221,
                "cityName": "Coveñas",
                "departamentId": 70
            },
            {
                "cityId": 7023,
                "cityName": "Chalán",
                "departamentId": 70
            },
            {
                "cityId": 70233,
                "cityName": "El Roble",
                "departamentId": 70
            },
            {
                "cityId": 70235,
                "cityName": "Galeras",
                "departamentId": 70
            },
            {
                "cityId": 70265,
                "cityName": "Guaranda",
                "departamentId": 70
            },
            {
                "cityId": 704,
                "cityName": "La Unión",
                "departamentId": 70
            },
            {
                "cityId": 70418,
                "cityName": "Los Palmitos",
                "departamentId": 70
            },
            {
                "cityId": 70429,
                "cityName": "Majagual",
                "departamentId": 70
            },
            {
                "cityId": 70473,
                "cityName": "Morroa",
                "departamentId": 70
            },
            {
                "cityId": 70508,
                "cityName": "Ovejas",
                "departamentId": 70
            },
            {
                "cityId": 70523,
                "cityName": "Palmito",
                "departamentId": 70
            },
            {
                "cityId": 70678,
                "cityName": "San Benito Abad",
                "departamentId": 70
            },
            {
                "cityId": 70708,
                "cityName": "San Marcos",
                "departamentId": 70
            },
            {
                "cityId": 70713,
                "cityName": "San Onofre",
                "departamentId": 70
            },
            {
                "cityId": 70717,
                "cityName": "San Pedro",
                "departamentId": 70
            },
            {
                "cityId": 70771,
                "cityName": "Sucre",
                "departamentId": 70
            },
            {
                "cityId": 70823,
                "cityName": "Tolú Viejo",
                "departamentId": 70
            },
            {
                "cityId": 73024,
                "cityName": "Alpujarra",
                "departamentId": 73
            },
            {
                "cityId": 73026,
                "cityName": "Alvarado",
                "departamentId": 73
            },
            {
                "cityId": 7303,
                "cityName": "Ambalema",
                "departamentId": 73
            },
            {
                "cityId": 73055,
                "cityName": "Armero",
                "departamentId": 73
            },
            {
                "cityId": 73067,
                "cityName": "Ataco",
                "departamentId": 73
            },
            {
                "cityId": 73124,
                "cityName": "Cajamarca",
                "departamentId": 73
            },
            {
                "cityId": 73168,
                "cityName": "Chaparral",
                "departamentId": 73
            },
            {
                "cityId": 732,
                "cityName": "Coello",
                "departamentId": 73
            },
            {
                "cityId": 73217,
                "cityName": "Coyaima",
                "departamentId": 73
            },
            {
                "cityId": 73226,
                "cityName": "Cunday",
                "departamentId": 73
            },
            {
                "cityId": 73236,
                "cityName": "Dolores",
                "departamentId": 73
            },
            {
                "cityId": 73268,
                "cityName": "Espinal",
                "departamentId": 73
            },
            {
                "cityId": 7327,
                "cityName": "Falan",
                "departamentId": 73
            },
            {
                "cityId": 73275,
                "cityName": "Flandes",
                "departamentId": 73
            },
            {
                "cityId": 73283,
                "cityName": "Fresno",
                "departamentId": 73
            },
            {
                "cityId": 73319,
                "cityName": "Guamo",
                "departamentId": 73
            },
            {
                "cityId": 73347,
                "cityName": "Herveo",
                "departamentId": 73
            },
            {
                "cityId": 73349,
                "cityName": "Honda",
                "departamentId": 73
            },
            {
                "cityId": 73352,
                "cityName": "Icononzo",
                "departamentId": 73
            },
            {
                "cityId": 73443,
                "cityName": "Mariquita",
                "departamentId": 73
            },
            {
                "cityId": 73449,
                "cityName": "Melgar",
                "departamentId": 73
            },
            {
                "cityId": 73461,
                "cityName": "Murillo",
                "departamentId": 73
            },
            {
                "cityId": 73483,
                "cityName": "Natagaima",
                "departamentId": 73
            },
            {
                "cityId": 73504,
                "cityName": "Ortega",
                "departamentId": 73
            },
            {
                "cityId": 7352,
                "cityName": "Palocabildo",
                "departamentId": 73
            },
            {
                "cityId": 73547,
                "cityName": "Piedras",
                "departamentId": 73
            },
            {
                "cityId": 73555,
                "cityName": "Planadas",
                "departamentId": 73
            },
            {
                "cityId": 73563,
                "cityName": "Prado",
                "departamentId": 73
            },
            {
                "cityId": 73585,
                "cityName": "Purificación",
                "departamentId": 73
            },
            {
                "cityId": 73616,
                "cityName": "Rio Blanco",
                "departamentId": 73
            },
            {
                "cityId": 73622,
                "cityName": "Roncesvalles",
                "departamentId": 73
            },
            {
                "cityId": 73624,
                "cityName": "Rovira",
                "departamentId": 73
            },
            {
                "cityId": 73671,
                "cityName": "Saldaña",
                "departamentId": 73
            },
            {
                "cityId": 73686,
                "cityName": "Santa Isabel",
                "departamentId": 73
            },
            {
                "cityId": 73861,
                "cityName": "Venadillo",
                "departamentId": 73
            },
            {
                "cityId": 7387,
                "cityName": "Villahermosa",
                "departamentId": 73
            },
            {
                "cityId": 73873,
                "cityName": "Villarrica",
                "departamentId": 73
            },
            {
                "cityId": 81065,
                "cityName": "Arauquita",
                "departamentId": 81
            },
            {
                "cityId": 8122,
                "cityName": "Cravo Norte",
                "departamentId": 81
            },
            {
                "cityId": 813,
                "cityName": "Fortul",
                "departamentId": 81
            },
            {
                "cityId": 81591,
                "cityName": "Puerto Rondón",
                "departamentId": 81
            },
            {
                "cityId": 81736,
                "cityName": "Saravena",
                "departamentId": 81
            },
            {
                "cityId": 81794,
                "cityName": "Tame",
                "departamentId": 81
            },
            {
                "cityId": 81001,
                "cityName": "Arauca",
                "departamentId": 81
            },
            {
                "cityId": 85001,
                "cityName": "Yopal",
                "departamentId": 85
            },
            {
                "cityId": 8501,
                "cityName": "Aguazul",
                "departamentId": 85
            },
            {
                "cityId": 85015,
                "cityName": "Chámeza",
                "departamentId": 85
            },
            {
                "cityId": 85125,
                "cityName": "Hato Corozal",
                "departamentId": 85
            },
            {
                "cityId": 85136,
                "cityName": "La Salina",
                "departamentId": 85
            },
            {
                "cityId": 85162,
                "cityName": "Monterrey",
                "departamentId": 85
            },
            {
                "cityId": 85263,
                "cityName": "Pore",
                "departamentId": 85
            },
            {
                "cityId": 85279,
                "cityName": "Recetor",
                "departamentId": 85
            },
            {
                "cityId": 853,
                "cityName": "Sabanalarga",
                "departamentId": 85
            },
            {
                "cityId": 85315,
                "cityName": "Sácama",
                "departamentId": 85
            },
            {
                "cityId": 8541,
                "cityName": "Tauramena",
                "departamentId": 85
            },
            {
                "cityId": 8543,
                "cityName": "Trinidad",
                "departamentId": 85
            },
            {
                "cityId": 8544,
                "cityName": "Villanueva",
                "departamentId": 85
            },
            {
                "cityId": 86001,
                "cityName": "Mocoa",
                "departamentId": 86
            },
            {
                "cityId": 86219,
                "cityName": "Colón",
                "departamentId": 86
            },
            {
                "cityId": 8632,
                "cityName": "Orito",
                "departamentId": 86
            },
            {
                "cityId": 86569,
                "cityName": "Puerto Caicedo",
                "departamentId": 86
            },
            {
                "cityId": 86571,
                "cityName": "Puerto Guzmán",
                "departamentId": 86
            },
            {
                "cityId": 86573,
                "cityName": "Leguízamo",
                "departamentId": 86
            },
            {
                "cityId": 86749,
                "cityName": "Sibundoy",
                "departamentId": 86
            },
            {
                "cityId": 86755,
                "cityName": "San Francisco",
                "departamentId": 86
            },
            {
                "cityId": 86757,
                "cityName": "San Miguel",
                "departamentId": 86
            },
            {
                "cityId": 8676,
                "cityName": "Santiago",
                "departamentId": 86
            },
            {
                "cityId": 91001,
                "cityName": "Leticia",
                "departamentId": 91
            },
            {
                "cityId": 91263,
                "cityName": "El Encanto",
                "departamentId": 91
            },
            {
                "cityId": 91405,
                "cityName": "La Chorrera",
                "departamentId": 91
            },
            {
                "cityId": 91407,
                "cityName": "La Pedrera",
                "departamentId": 91
            },
            {
                "cityId": 9143,
                "cityName": "La Victoria",
                "departamentId": 91
            },
            {
                "cityId": 91536,
                "cityName": "Puerto Arica",
                "departamentId": 91
            },
            {
                "cityId": 9154,
                "cityName": "Puerto Nariño",
                "departamentId": 91
            },
            {
                "cityId": 91669,
                "cityName": "Puerto Santander",
                "departamentId": 91
            },
            {
                "cityId": 91798,
                "cityName": "Tarapacá",
                "departamentId": 91
            },
            {
                "cityId": 94001,
                "cityName": "Inírida",
                "departamentId": 94
            },
            {
                "cityId": 94343,
                "cityName": "Barranco Minas",
                "departamentId": 94
            },
            {
                "cityId": 94663,
                "cityName": "Mapiripana",
                "departamentId": 94
            },
            {
                "cityId": 94883,
                "cityName": "San Felipe",
                "departamentId": 94
            },
            {
                "cityId": 94884,
                "cityName": "Puerto Colombia",
                "departamentId": 94
            },
            {
                "cityId": 94885,
                "cityName": "La Guadalupe",
                "departamentId": 94
            },
            {
                "cityId": 94886,
                "cityName": "Cacahual",
                "departamentId": 94
            },
            {
                "cityId": 94887,
                "cityName": "Pana Pana",
                "departamentId": 94
            },
            {
                "cityId": 97001,
                "cityName": "Mitú",
                "departamentId": 97
            },
            {
                "cityId": 97161,
                "cityName": "Carurú",
                "departamentId": 97
            },
            {
                "cityId": 97666,
                "cityName": "Taraira",
                "departamentId": 97
            },
            {
                "cityId": 97777,
                "cityName": "Papunahua",
                "departamentId": 97
            },
            {
                "cityId": 97889,
                "cityName": "Yavaraté",
                "departamentId": 97
            },
            {
                "cityId": 97511,
                "cityName": "Pacoa",
                "departamentId": 97
            },
            {
                "cityId": 94888,
                "cityName": "Morichal",
                "departamentId": 94
            },
            {
                "cityId": 99001,
                "cityName": "Puerto Carreño",
                "departamentId": 99
            },
            {
                "cityId": 99524,
                "cityName": "La Primavera",
                "departamentId": 99
            },
            {
                "cityId": 99624,
                "cityName": "Santa Rosalía",
                "departamentId": 99
            },
            {
                "cityId": 99773,
                "cityName": "Cumaribo",
                "departamentId": 99
            },
            {
                "cityId": 1861,
                "cityName": "San José del Fragua",
                "departamentId": 18
            },
            {
                "cityId": 5011,
                "cityName": "Barranca de Upía",
                "departamentId": 50
            },
            {
                "cityId": 68524,
                "cityName": "Palmas del Socorro",
                "departamentId": 68
            },
            {
                "cityId": 25662,
                "cityName": "San Juan de Río Seco",
                "departamentId": 25
            },
            {
                "cityId": 8372,
                "cityName": "Juan de Acosta",
                "departamentId": 8
            },
            {
                "cityId": 50287,
                "cityName": "Fuente de Oro",
                "departamentId": 50
            },
            {
                "cityId": 85325,
                "cityName": "San Luis de Gaceno",
                "departamentId": 85
            },
            {
                "cityId": 2725,
                "cityName": "El Litoral del San Juan",
                "departamentId": 27
            },
            {
                "cityId": 25843,
                "cityName": "Villa de San Diego de Ubate",
                "departamentId": 25
            },
            {
                "cityId": 13074,
                "cityName": "Barranco de Loba",
                "departamentId": 13
            },
            {
                "cityId": 15816,
                "cityName": "Togüí",
                "departamentId": 15
            },
            {
                "cityId": 13688,
                "cityName": "Santa Rosa del Sur",
                "departamentId": 13
            },
            {
                "cityId": 27135,
                "cityName": "El Cantón del San Pablo",
                "departamentId": 27
            },
            {
                "cityId": 15407,
                "cityName": "Villa de Leyva",
                "departamentId": 15
            },
            {
                "cityId": 47692,
                "cityName": "San Sebastián de Buenavista",
                "departamentId": 47
            },
            {
                "cityId": 15537,
                "cityName": "Paz de Río",
                "departamentId": 15
            },
            {
                "cityId": 133,
                "cityName": "Hatillo de Loba",
                "departamentId": 13
            },
            {
                "cityId": 4766,
                "cityName": "Sabanas de San Angel",
                "departamentId": 47
            },
            {
                "cityId": 95015,
                "cityName": "Calamar",
                "departamentId": 95
            },
            {
                "cityId": 20614,
                "cityName": "Río de Oro",
                "departamentId": 20
            },
            {
                "cityId": 5665,
                "cityName": "San Pedro de Uraba",
                "departamentId": 5
            },
            {
                "cityId": 95001,
                "cityName": "San José del Guaviare",
                "departamentId": 95
            },
            {
                "cityId": 15693,
                "cityName": "Santa Rosa de Viterbo",
                "departamentId": 15
            },
            {
                "cityId": 19698,
                "cityName": "Santander de Quilichao",
                "departamentId": 19
            },
            {
                "cityId": 952,
                "cityName": "Miraflores",
                "departamentId": 95
            },
            {
                "cityId": 5042,
                "cityName": "Santafé de Antioquia",
                "departamentId": 5
            },
            {
                "cityId": 5068,
                "cityName": "San Carlos de Guaroa",
                "departamentId": 50
            },
            {
                "cityId": 852,
                "cityName": "Palmar de Varela",
                "departamentId": 8
            },
            {
                "cityId": 5686,
                "cityName": "Santa Rosa de Osos",
                "departamentId": 5
            },
            {
                "cityId": 5647,
                "cityName": "San Andrés de Cuerquía",
                "departamentId": 5
            },
            {
                "cityId": 73854,
                "cityName": "Valle de San Juan",
                "departamentId": 73
            },
            {
                "cityId": 68689,
                "cityName": "San Vicente de Chucurpi",
                "departamentId": 68
            },
            {
                "cityId": 68684,
                "cityName": "San José de Miranda",
                "departamentId": 68
            },
            {
                "cityId": 88564,
                "cityName": "Providencia",
                "departamentId": 88
            },
            {
                "cityId": 66682,
                "cityName": "Santa Rosa de Cabal",
                "departamentId": 66
            },
            {
                "cityId": 25328,
                "cityName": "Guayabal de Siquima",
                "departamentId": 25
            },
            {
                "cityId": 18094,
                "cityName": "Belén de Los Andaquies",
                "departamentId": 18
            },
            {
                "cityId": 8525,
                "cityName": "Paz de Ariporo",
                "departamentId": 85
            },
            {
                "cityId": 6872,
                "cityName": "Santa Helena del Opón",
                "departamentId": 68
            },
            {
                "cityId": 15681,
                "cityName": "San Pablo de Borbur",
                "departamentId": 15
            },
            {
                "cityId": 4442,
                "cityName": "La Jagua del Pilar",
                "departamentId": 44
            },
            {
                "cityId": 204,
                "cityName": "La Jagua de Ibirico",
                "departamentId": 20
            },
            {
                "cityId": 70742,
                "cityName": "San Luis de Sincé",
                "departamentId": 70
            },
            {
                "cityId": 15667,
                "cityName": "San Luis de Gaceno",
                "departamentId": 15
            },
            {
                "cityId": 13244,
                "cityName": "El Carmen de Bolívar",
                "departamentId": 13
            },
            {
                "cityId": 27245,
                "cityName": "El Carmen de Atrato",
                "departamentId": 27
            },
            {
                "cityId": 70702,
                "cityName": "San Juan de Betulia",
                "departamentId": 70
            },
            {
                "cityId": 47545,
                "cityName": "Pijiño del Carmen",
                "departamentId": 47
            },
            {
                "cityId": 5873,
                "cityName": "Vigía del Fuerte",
                "departamentId": 5
            },
            {
                "cityId": 13667,
                "cityName": "San Martín de Loba",
                "departamentId": 13
            },
            {
                "cityId": 1303,
                "cityName": "Altos del Rosario",
                "departamentId": 13
            },
            {
                "cityId": 73148,
                "cityName": "Carmen de Apicala",
                "departamentId": 73
            },
            {
                "cityId": 25645,
                "cityName": "San Antonio del Tequendama",
                "departamentId": 25
            },
            {
                "cityId": 68655,
                "cityName": "Sabana de Torres",
                "departamentId": 68
            },
            {
                "cityId": 95025,
                "cityName": "El Retorno",
                "departamentId": 95
            },
            {
                "cityId": 23682,
                "cityName": "San José de Uré",
                "departamentId": 23
            },
            {
                "cityId": 52694,
                "cityName": "San Pedro de Cartago",
                "departamentId": 52
            },
            {
                "cityId": 8137,
                "cityName": "Campo de La Cruz",
                "departamentId": 8
            },
            {
                "cityId": 50683,
                "cityName": "San Juan de Arama",
                "departamentId": 50
            },
            {
                "cityId": 5658,
                "cityName": "San José de La Montaña",
                "departamentId": 5
            },
            {
                "cityId": 1815,
                "cityName": "Cartagena del Chairá",
                "departamentId": 18
            },
            {
                "cityId": 2766,
                "cityName": "San José del Palmar",
                "departamentId": 27
            },
            {
                "cityId": 25001,
                "cityName": "Agua de Dios",
                "departamentId": 25
            },
            {
                "cityId": 13655,
                "cityName": "San Jacinto del Cauca",
                "departamentId": 13
            },
            {
                "cityId": 41668,
                "cityName": "San Agustín",
                "departamentId": 41
            },
            {
                "cityId": 52258,
                "cityName": "El Tablón de Gómez",
                "departamentId": 52
            },
            {
                "cityId": 88001,
                "cityName": "San Andrés",
                "departamentId": 88
            },
            {
                "cityId": 15664,
                "cityName": "San José de Pare",
                "departamentId": 15
            },
            {
                "cityId": 86865,
                "cityName": "Valle de Guamez",
                "departamentId": 86
            },
            {
                "cityId": 1367,
                "cityName": "San Pablo de Borbur",
                "departamentId": 13
            },
            {
                "cityId": 7082,
                "cityName": "Santiago de Tolú",
                "departamentId": 70
            },
            {
                "cityId": 11001,
                "cityName": "Bogotá D.C.",
                "departamentId": 11
            },
            {
                "cityId": 25154,
                "cityName": "Carmen de Carupa",
                "departamentId": 25
            },
            {
                "cityId": 23189,
                "cityName": "Ciénaga de Oro",
                "departamentId": 23
            },
            {
                "cityId": 5659,
                "cityName": "San Juan de Urabá",
                "departamentId": 5
            },
            {
                "cityId": 4465,
                "cityName": "San Juan del Cesar",
                "departamentId": 44
            },
            {
                "cityId": 68235,
                "cityName": "El Carmen de Chucurí",
                "departamentId": 68
            },
            {
                "cityId": 5148,
                "cityName": "El Carmen de Viboral",
                "departamentId": 5
            },
            {
                "cityId": 66088,
                "cityName": "Belén de Umbría",
                "departamentId": 66
            },
            {
                "cityId": 27086,
                "cityName": "Belén de Bajira",
                "departamentId": 27
            },
            {
                "cityId": 68855,
                "cityName": "Valle de San José",
                "departamentId": 68
            },
            {
                "cityId": 73678,
                "cityName": "San Luis",
                "departamentId": 73
            },
            {
                "cityId": 15676,
                "cityName": "San Miguel de Sema",
                "departamentId": 15
            },
            {
                "cityId": 73675,
                "cityName": "San Antonio",
                "departamentId": 73
            },
            {
                "cityId": 68673,
                "cityName": "San Benito",
                "departamentId": 68
            },
            {
                "cityId": 25862,
                "cityName": "Vergara",
                "departamentId": 25
            },
            {
                "cityId": 23678,
                "cityName": "San Carlos",
                "departamentId": 23
            },
            {
                "cityId": 9153,
                "cityName": "Puerto Alegría",
                "departamentId": 91
            },
            {
                "cityId": 68344,
                "cityName": "Hato",
                "departamentId": 68
            },
            {
                "cityId": 13654,
                "cityName": "San Jacinto",
                "departamentId": 13
            },
            {
                "cityId": 19693,
                "cityName": "San Sebastián",
                "departamentId": 19
            },
            {
                "cityId": 5649,
                "cityName": "San Carlos",
                "departamentId": 5
            },
            {
                "cityId": 15837,
                "cityName": "Tuta",
                "departamentId": 15
            },
            {
                "cityId": 54743,
                "cityName": "Silos",
                "departamentId": 54
            },
            {
                "cityId": 54125,
                "cityName": "Cácota",
                "departamentId": 54
            },
            {
                "cityId": 7625,
                "cityName": "El Dovio",
                "departamentId": 76
            },
            {
                "cityId": 5482,
                "cityName": "Toledo",
                "departamentId": 54
            },
            {
                "cityId": 76622,
                "cityName": "Roldanillo",
                "departamentId": 76
            },
            {
                "cityId": 5448,
                "cityName": "Mutiscua",
                "departamentId": 54
            },
            {
                "cityId": 76054,
                "cityName": "Argelia",
                "departamentId": 76
            },
            {
                "cityId": 54261,
                "cityName": "El Zulia",
                "departamentId": 54
            },
            {
                "cityId": 5466,
                "cityName": "Salazar",
                "departamentId": 54
            },
            {
                "cityId": 76736,
                "cityName": "Sevilla",
                "departamentId": 76
            },
            {
                "cityId": 76895,
                "cityName": "Zarzal",
                "departamentId": 76
            },
            {
                "cityId": 54223,
                "cityName": "Cucutilla",
                "departamentId": 54
            },
            {
                "cityId": 76248,
                "cityName": "El Cerrito",
                "departamentId": 76
            },
            {
                "cityId": 76147,
                "cityName": "Cartago",
                "departamentId": 76
            },
            {
                "cityId": 76122,
                "cityName": "Caicedonia",
                "departamentId": 76
            },
            {
                "cityId": 54553,
                "cityName": "Puerto Santander",
                "departamentId": 54
            },
            {
                "cityId": 54313,
                "cityName": "Gramalote",
                "departamentId": 54
            },
            {
                "cityId": 76246,
                "cityName": "El Cairo",
                "departamentId": 76
            },
            {
                "cityId": 5425,
                "cityName": "El Tarra",
                "departamentId": 54
            },
            {
                "cityId": 764,
                "cityName": "La Unión",
                "departamentId": 76
            },
            {
                "cityId": 76606,
                "cityName": "Restrepo",
                "departamentId": 76
            },
            {
                "cityId": 548,
                "cityName": "Teorama",
                "departamentId": 54
            },
            {
                "cityId": 76233,
                "cityName": "Dagua",
                "departamentId": 76
            },
            {
                "cityId": 54051,
                "cityName": "Arboledas",
                "departamentId": 54
            },
            {
                "cityId": 76318,
                "cityName": "Guacarí",
                "departamentId": 76
            },
            {
                "cityId": 54418,
                "cityName": "Lourdes",
                "departamentId": 54
            },
            {
                "cityId": 76041,
                "cityName": "Ansermanuevo",
                "departamentId": 76
            },
            {
                "cityId": 54099,
                "cityName": "Bochalema",
                "departamentId": 54
            },
            {
                "cityId": 76113,
                "cityName": "Bugalagrande",
                "departamentId": 76
            },
            {
                "cityId": 54206,
                "cityName": "Convención",
                "departamentId": 54
            },
            {
                "cityId": 54344,
                "cityName": "Hacarí",
                "departamentId": 54
            },
            {
                "cityId": 76403,
                "cityName": "La Victoria",
                "departamentId": 76
            },
            {
                "cityId": 54347,
                "cityName": "Herrán",
                "departamentId": 54
            },
            {
                "cityId": 76306,
                "cityName": "Ginebra",
                "departamentId": 76
            },
            {
                "cityId": 76892,
                "cityName": "Yumbo",
                "departamentId": 76
            },
            {
                "cityId": 76497,
                "cityName": "Obando",
                "departamentId": 76
            },
            {
                "cityId": 5481,
                "cityName": "Tibú",
                "departamentId": 54
            },
            {
                "cityId": 54673,
                "cityName": "San Cayetano",
                "departamentId": 54
            },
            {
                "cityId": 5467,
                "cityName": "San Calixto",
                "departamentId": 54
            },
            {
                "cityId": 761,
                "cityName": "Bolívar",
                "departamentId": 76
            },
            {
                "cityId": 54398,
                "cityName": "La Playa",
                "departamentId": 54
            },
            {
                "cityId": 76001,
                "cityName": "Cali",
                "departamentId": 76
            },
            {
                "cityId": 7667,
                "cityName": "San Pedro",
                "departamentId": 76
            },
            {
                "cityId": 76111,
                "cityName": "Guadalajara de Buga",
                "departamentId": 76
            },
            {
                "cityId": 54172,
                "cityName": "Chinácota",
                "departamentId": 54
            },
            {
                "cityId": 54599,
                "cityName": "Ragonvalia",
                "departamentId": 54
            },
            {
                "cityId": 54385,
                "cityName": "La Esperanza",
                "departamentId": 54
            },
            {
                "cityId": 54874,
                "cityName": "Villa del Rosario",
                "departamentId": 54
            },
            {
                "cityId": 54174,
                "cityName": "Chitagá",
                "departamentId": 54
            },
            {
                "cityId": 76126,
                "cityName": "Calima",
                "departamentId": 76
            },
            {
                "cityId": 5472,
                "cityName": "Sardinata",
                "departamentId": 54
            },
            {
                "cityId": 76036,
                "cityName": "Andalucía",
                "departamentId": 76
            },
            {
                "cityId": 76563,
                "cityName": "Pradera",
                "departamentId": 76
            },
            {
                "cityId": 54003,
                "cityName": "Abrego",
                "departamentId": 54
            },
            {
                "cityId": 54405,
                "cityName": "Los Patios",
                "departamentId": 54
            },
            {
                "cityId": 54498,
                "cityName": "Ocaña",
                "departamentId": 54
            },
            {
                "cityId": 54109,
                "cityName": "Bucarasica",
                "departamentId": 54
            },
            {
                "cityId": 7689,
                "cityName": "Yotoco",
                "departamentId": 76
            },
            {
                "cityId": 7652,
                "cityName": "Palmira",
                "departamentId": 76
            },
            {
                "cityId": 76616,
                "cityName": "Riofrío",
                "departamentId": 76
            },
            {
                "cityId": 5468,
                "cityName": "Santiago",
                "departamentId": 54
            },
            {
                "cityId": 7602,
                "cityName": "Alcalá",
                "departamentId": 76
            },
            {
                "cityId": 76863,
                "cityName": "Versalles",
                "departamentId": 76
            },
            {
                "cityId": 54377,
                "cityName": "Labateca",
                "departamentId": 54
            },
            {
                "cityId": 54128,
                "cityName": "Cachirá",
                "departamentId": 54
            },
            {
                "cityId": 54871,
                "cityName": "Villa Caro",
                "departamentId": 54
            },
            {
                "cityId": 54239,
                "cityName": "Durania",
                "departamentId": 54
            },
            {
                "cityId": 76243,
                "cityName": "El Águila",
                "departamentId": 76
            },
            {
                "cityId": 76823,
                "cityName": "Toro",
                "departamentId": 76
            },
            {
                "cityId": 7613,
                "cityName": "Candelaria",
                "departamentId": 76
            },
            {
                "cityId": 76377,
                "cityName": "La Cumbre",
                "departamentId": 76
            },
            {
                "cityId": 76845,
                "cityName": "Ulloa",
                "departamentId": 76
            },
            {
                "cityId": 76828,
                "cityName": "Trujillo",
                "departamentId": 76
            },
            {
                "cityId": 76869,
                "cityName": "Vijes",
                "departamentId": 76
            },
            {
                "cityId": 68176,
                "cityName": "Chimá",
                "departamentId": 68
            },
            {
                "cityId": 7067,
                "cityName": "Sampués",
                "departamentId": 70
            },
            {
                "cityId": 85225,
                "cityName": "Nunchía",
                "departamentId": 85
            },
            {
                "cityId": 54518,
                "cityName": "Pamplona",
                "departamentId": 54
            },
            {
                "cityId": 25019,
                "cityName": "Albán",
                "departamentId": 25
            },
            {
                "cityId": 23466,
                "cityName": "Montelíbano",
                "departamentId": 23
            },
            {
                "cityId": 86568,
                "cityName": "Puerto Asís",
                "departamentId": 86
            },
            {
                "cityId": 70215,
                "cityName": "Corozal",
                "departamentId": 70
            },
            {
                "cityId": 5211,
                "cityName": "Buesaco",
                "departamentId": 52
            },
            {
                "cityId": 85139,
                "cityName": "Maní",
                "departamentId": 85
            },
            {
                "cityId": 13268,
                "cityName": "El Peñón",
                "departamentId": 13
            },
            {
                "cityId": 76834,
                "cityName": "Tuluá",
                "departamentId": 76
            },
            {
                "cityId": 73152,
                "cityName": "Casabianca",
                "departamentId": 73
            },
            {
                "cityId": 2504,
                "cityName": "Anolaima",
                "departamentId": 25
            },
            {
                "cityId": 25175,
                "cityName": "Chía",
                "departamentId": 25
            },
            {
                "cityId": 52835,
                "cityName": "San Andrés de Tumaco",
                "departamentId": 52
            },
            {
                "cityId": 1846,
                "cityName": "Milán",
                "departamentId": 18
            },
            {
                "cityId": 68147,
                "cityName": "Capitanejo",
                "departamentId": 68
            },
            {
                "cityId": 73043,
                "cityName": "Anzoátegui",
                "departamentId": 73
            },
            {
                "cityId": 76275,
                "cityName": "Florida",
                "departamentId": 76
            },
            {
                "cityId": 8606,
                "cityName": "Repelón",
                "departamentId": 8
            },
            {
                "cityId": 5284,
                "cityName": "Frontino",
                "departamentId": 5
            },
            {
                "cityId": 25258,
                "cityName": "El Peñón",
                "departamentId": 25
            },
            {
                "cityId": 5452,
                "cityName": "Pamplonita",
                "departamentId": 54
            },
            {
                "cityId": 9146,
                "cityName": "Miriti Paraná",
                "departamentId": 91
            },
            {
                "cityId": 854,
                "cityName": "Támara",
                "departamentId": 85
            },
            {
                "cityId": 15806,
                "cityName": "Tibasosa",
                "departamentId": 15
            },
            {
                "cityId": 19517,
                "cityName": "Páez",
                "departamentId": 19
            },
            {
                "cityId": 73001,
                "cityName": "Ibagué",
                "departamentId": 73
            },
            {
                "cityId": 8573,
                "cityName": "Puerto Colombia",
                "departamentId": 8
            },
            {
                "cityId": 52083,
                "cityName": "Belén",
                "departamentId": 52
            },
            {
                "cityId": 25758,
                "cityName": "Sopó",
                "departamentId": 25
            },
            {
                "cityId": 2715,
                "cityName": "Carmen del Darien",
                "departamentId": 27
            },
            {
                "cityId": 25299,
                "cityName": "Gama",
                "departamentId": 25
            },
            {
                "cityId": 25718,
                "cityName": "Sasaima",
                "departamentId": 25
            },
            {
                "cityId": 5224,
                "cityName": "Chachagüí",
                "departamentId": 52
            },
            {
                "cityId": 54001,
                "cityName": "Cúcuta",
                "departamentId": 54
            },
            {
                "cityId": 13001,
                "cityName": "Cartagena",
                "departamentId": 13
            },
            {
                "cityId": 5313,
                "cityName": "Granada",
                "departamentId": 5
            },
            {
                "cityId": 4772,
                "cityName": "Santa Bárbara de Pinto",
                "departamentId": 47
            },
            {
                "cityId": 13442,
                "cityName": "María la Baja",
                "departamentId": 13
            },
            {
                "cityId": 1841,
                "cityName": "La Montañita",
                "departamentId": 18
            },
            {
                "cityId": 18753,
                "cityName": "San Vicente del Caguán",
                "departamentId": 18
            },
            {
                "cityId": 6825,
                "cityName": "El Peñón",
                "departamentId": 68
            },
            {
                "cityId": 5364,
                "cityName": "Jardín",
                "departamentId": 5
            },
            {
                "cityId": 76364,
                "cityName": "Jamundí",
                "departamentId": 76
            },
            {
                "cityId": 27787,
                "cityName": "Tadó",
                "departamentId": 27
            },
            {
                "cityId": 8523,
                "cityName": "Orocué",
                "departamentId": 85
            },
            {
                "cityId": 73411,
                "cityName": "Líbano",
                "departamentId": 73
            },
            {
                "cityId": 25885,
                "cityName": "Yacopí",
                "departamentId": 25
            },
            {
                "cityId": 6313,
                "cityName": "Calarcá",
                "departamentId": 63
            },
            {
                "cityId": 5756,
                "cityName": "Sonsón",
                "departamentId": 5
            },
            {
                "cityId": 54245,
                "cityName": "El Carmen",
                "departamentId": 54
            },
            {
                "cityId": 73408,
                "cityName": "Lérida",
                "departamentId": 73
            },
            {
                "cityId": 2335,
                "cityName": "La Apartada",
                "departamentId": 23
            },
            {
                "cityId": 1362,
                "cityName": "San Cristóbal",
                "departamentId": 13
            },
            {
                "cityId": 2529,
                "cityName": "Fusagasugá",
                "departamentId": 25
            },
            {
                "cityId": 13894,
                "cityName": "Zambrano",
                "departamentId": 13
            },
            {
                "cityId": 15403,
                "cityName": "La Uvita",
                "departamentId": 15
            },
            {
                "cityId": 25899,
                "cityName": "Zipaquirá",
                "departamentId": 25
            },
            {
                "cityId": 63302,
                "cityName": "Génova",
                "departamentId": 63
            },
            {
                "cityId": 7377,
                "cityName": "Suárez",
                "departamentId": 73
            },
            {
                "cityId": 5015,
                "cityName": "Castilla la Nueva",
                "departamentId": 50
            },
            {
                "cityId": 15087,
                "cityName": "Belén",
                "departamentId": 15
            },
            {
                "cityId": 2781,
                "cityName": "Unión Panamericana",
                "departamentId": 27
            },
            {
                "cityId": 4757,
                "cityName": "Pueblo Viejo",
                "departamentId": 47
            },
            {
                "cityId": 86885,
                "cityName": "Villagarzón",
                "departamentId": 86
            },
            {
                "cityId": 25269,
                "cityName": "Facatativá",
                "departamentId": 25
            },
            {
                "cityId": 2358,
                "cityName": "Puerto Libertador",
                "departamentId": 23
            },
            {
                "cityId": 17444,
                "cityName": "Marquetalia",
                "departamentId": 17
            },
            {
                "cityId": 52051,
                "cityName": "Arboleda",
                "departamentId": 52
            },
            {
                "cityId": 76109,
                "cityName": "Buenaventura",
                "departamentId": 76
            },
            {
                "cityId": 47189,
                "cityName": "Ciénaga",
                "departamentId": 47
            },
            {
                "cityId": 856,
                "cityName": "Ponedera",
                "departamentId": 8
            }
        ],
        {
            ignoreDuplicates: true,
        }
    ).then(() => console.log("Cities were successfully created"));
}

module.exports = {
    createCities
};