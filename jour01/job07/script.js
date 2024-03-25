// Définition de la fonction jourTravaille qui prend un paramètre 'date'.
function jourTravaille(date) {
  
    // Déclaration d'un tableau contenant les jours fériés sous forme de chaînes de caractères avec le format mois-jour.
    const joursFeries = ['01-01', '04-01', '05-01', '05-08', '07-14', '08-15', '11-01', '11-11', '12-25'];
    
    // Récupération du jour du mois de la date fournie.
    const jour = date.getDate();
    
    // Récupération du mois de la date fournie. +1 car getMonth() renvoie un nombre de 0 à 11.
    const mois = date.getMonth() + 1;
    
    // Récupération de l'année de la date fournie.
    const annee = date.getFullYear();
    
    // Récupération du jour de la semaine de la date fournie, où 0 représente dimanche et 6 samedi.
    const jourDeLaSemaine = date.getDay();
  
    // Formatage de la date pour correspondre au format utilisé dans le tableau des jours fériés.
    const dateFormatee = `${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`;
  
    // Vérification si l'année est 2024 et si la date formatée fait partie des jours fériés.
    if (annee === 2024 && joursFeries.includes(dateFormatee)) {
      return `Le ${dateFormatee}-${annee} est un jour férié.`;
    } 
    // Vérification si la date tombe un dimanche (0) ou un samedi (6), donc le week-end.
    else if (jourDeLaSemaine === 0 || jourDeLaSemaine === 6) {
      return `Non, le ${jour} / ${mois} / ${annee} est un week-end.`;
    } 
    // Si la date n'est ni un jour férié ni un week-end, alors c'est un jour ouvrable.
    else {
      return `Oui, le ${jour} / ${mois} / ${annee} est un jour travaillé.`;
    }
  }

console.log(jourTravaille(new Date('2024-05-01'))); // Le 1 5 2024 est un jour férié.