function tri(numbers, order) {
    if (order === "asc") {
      return numbers.sort((a, b) => a - b); // Pour un tri ascendant
    } else if (order === "desc") {
      return numbers.sort((a, b) => b - a); // Pour un tri descendant
    }
    // Retourne le tableau original si "order" n'est ni "asc" ni "desc"
    return numbers;
  }
  
  // Exemples d'utilisation :
  console.log(tri([4, 2, 5, 1, 3], "asc")); // Doit afficher [1, 2, 3, 4, 5]
  console.log(tri([4, 2, 5, 1, 3], "desc")); // Doit afficher [5, 4, 3, 2, 1]
  