document.addEventListener('DOMContentLoaded', function() {
    const updateButton = document.getElementById('update');
    const usersTable = document.getElementById('users-table');

    function updateTable() {
        fetch('utilisateurs.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(users => {
                // Efface les anciennes lignes du tableau, sauf l'en-tête
                while (usersTable.rows.length > 1) {
                    usersTable.deleteRow(1);
                }

                // Ajoute chaque utilisateur dans le tableau
                users.forEach(user => {
                    const row = usersTable.insertRow();
                    row.insertCell().textContent = user.id;
                    row.insertCell().textContent = user.nom;
                    row.insertCell().textContent = user.prenom;
                    row.insertCell().textContent = user.email;
                });
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour du tableau:', error);
            });
    }

    updateButton.addEventListener('click', updateTable);
});
