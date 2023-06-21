
    // Funktion zum Umrechnen der Zutaten
    function umrechnen() {
        // Anzahl der Portionen auslesen
        var anzahlInput = document.getElementById("portionen");
        var anzahl = parseInt(anzahlInput.value);

        // Alle Zutaten durchlaufen und umrechnen
        var zutaten = document.querySelectorAll("#zutaten tbody tr");
        zutaten.forEach(function (zutat) {
            // Originalwert und Einheit der Zutat aus den Datenattributen auslesen
            var originalWert = parseFloat(zutat.querySelector("th").getAttribute("data-original-value"));
            var einheit = zutat.querySelector("th").getAttribute("data-unit");

            // Menge der Zutat umrechnen
            var umgerechneteMenge = originalWert * anzahl / 4;

            // Umrechnungsergebnis in das entsprechende Input-Feld eintragen
            var inputFeld = zutat.querySelector("input");
            inputFeld.value = umgerechneteMenge;

            // Einheit der Zutat aktualisieren
            var einheitElement = zutat.querySelector("th");
            einheitElement.textContent = umgerechneteMenge + " " + einheit;
        });
    }

    // Event Listener für die Änderung der Anzahl der Portionen
    var anzahlInput = document.getElementById("portionen");
    anzahlInput.addEventListener("change", umrechnen);

    // Initiale Umrechnung beim Laden der Seite
    umrechnen();

