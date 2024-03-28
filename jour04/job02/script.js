const jsonString = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
const key = 'city';
const value = jsonValueKey(jsonString, key);

console.log(value); // Affichera "Marseille"


function jsonValueKey(jsonString, key) {
    try {
        const obj = JSON.parse(jsonString);
        return obj[key] || ''; // Retourne une chaîne vide si la clé n'existe pas
    } catch (e) {
        console.error("Erreur lors de l'analyse de la chaîne JSON :", e);
        return ''; // Retourne une chaîne vide en cas d'erreur d'analyse
    }
}
