const departament = require('../../models/departament');
 
function createDepartaments(){
    departament.bulkCreate(
        [
            {
                "departamentId": 5,
                "departamentName": "Antioquia",
            },
            {
                "departamentId": 8,
                "departamentName": "Atlántico",
            },
            {
                "departamentId": 11,
                "departamentName": "Bogotá D.C.",
            },
            {
                "departamentId": 13,
                "departamentName": "Bolívar",
            },
            {
                "departamentId": 15,
                "departamentName": "Boyacá",
            },
            {
                "departamentId": 17,
                "departamentName": "Caldas",
            },
            {
                "departamentId": 18,
                "departamentName": "Caquetá",
            },
            {
                "departamentId": 19,
                "departamentName": "Cauca",
            },
            {
                "departamentId": 19,
                "departamentName": "Cauca",
            },
            {
                "departamentId": 20,
                "departamentName": "Cesar",
            },
            {
                "departamentId": 23,
                "departamentName": "Córdoba",
            },
            {
                "departamentId": 25,
                "departamentName": "Cundinamarca",
            },
            {
                "departamentId": 27,
                "departamentName": "Chocó",
            },
            {
                "departamentId": 41,
                "departamentName": "Huila",
            },
            {
                "departamentId": 44,
                "departamentName": "La Guajira",
            },
            {
                "departamentId": 47,
                "departamentName": "Magdalena",
            },
            {
                "departamentId": 50,
                "departamentName": "Meta",
            },
            {
                "departamentId": 52,
                "departamentName": "Nariño",
            },
            {
                "departamentId": 54,
                "departamentName": "Norte de Santander",
            },
            {
                "departamentId": 63,
                "departamentName": "Quindío",
            },
            {
                "departamentId": 66,
                "departamentName": "Risaralda",
            },
            {
                "departamentId": 68,
                "departamentName": "Santander",
            },
            {
                "departamentId": 70,
                "departamentName": "Sucre",
            },
            {
                "departamentId": 73,
                "departamentName": "Tolima",
            },
            {
                "departamentId": 76,
                "departamentName": "Valle del Cauca",
            },
            {
                "departamentId": 81,
                "departamentName": "Arauca",
            },
            {
                "departamentId": 85,
                "departamentName": "Casanare",
            },
            {
                "departamentId": 86,
                "departamentName": "Putumayo",
            },
            {
                "departamentId": 88,
                "departamentName": "Archipiélago de San Andrés, Providencia y Santa Catalina",
            },
            {
                "departamentId": 91,
                "departamentName": "Amazonas",
            },
            {
                "departamentId": 94,
                "departamentName": "Guainía",
            },
            {
                "departamentId": 95,
                "departamentName": "Guaviare",
            },
            {
                "departamentId": 97,
                "departamentName": "Vaupés",
            },
            {
                "departamentId": 99,
                "departamentName": "Vichada",
            }
        ],
        {
            ignoreDuplicates: true,
        }
    ).then(() => console.log("departament were successfully created"));
}
 
module.exports = {
    createDepartaments
};