function estPremier(nombre) {
    if (nombre <= 1) return false;
    for (let i = 2; i * i <= nombre; i++) {
      if (nombre % i === 0) return false;
    }
    return true;
  }
  
  function sommeNombresPremiers(var1, var2) {
    if (estPremier(var1) && estPremier(var2)) {
      return var1 + var2;
    } else {
      return false;
    }
  }
  
  // Exemple d'utilisation :
  console.log(sommeNombresPremiers(7, 11)); // Doit afficher 18
  console.log(sommeNombresPremiers(4, 11)); // Doit afficher false
  