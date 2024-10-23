document.getElementById('startCheck').addEventListener('click', function() {

    // Irgend ein Befehl, welcher alle Checkboxen in der Checkbox deaktiviert!
    // Alle Checkboxen mit der Division "checklistenbox" auswählen
    var checkboxes = document.querySelectorAll('.checklistenbox input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false; // Checkboxen deselektieren
    });

    // Toleranzabzugberechnung
    var speed = parseInt(document.getElementById('speed').value);
    var adjustedSpeed;
    if (speed <= 49) {
        adjustedSpeed = speed - 2;
    } else if (speed <= 99) {
        adjustedSpeed = speed - 3;
    } else {
        adjustedSpeed = speed - (speed * 0.03);
    }
    // Runden der bereinigten Geschwindigkeit
    adjustedSpeed = Math.round(adjustedSpeed);
    document.getElementById('adjustedSpeed').value = adjustedSpeed + ' km/h';



    // Einteilung der Kategorie gemäss der bereinigten Geschwindigkeit mit Prüfung Tretunterstützung
    var category;
    if (document.getElementById('pedalAssist').checked) {
        if (adjustedSpeed <= 25) {
            category = 'Leicht-Motorfahrrad';
            document.getElementById("lmf").style.display = "unset";
            document.getElementById("mfr").style.display = "none";
            document.getElementById("kmr").style.display = "none";
            document.getElementById("mr").style.display = "none";
        } else if (adjustedSpeed <= 45) {
            category = 'Motorfahrrad';
            document.getElementById("lmf").style.display = "none";
            document.getElementById("mfr").style.display = "unset";
            document.getElementById("kmr").style.display = "none";
            document.getElementById("mr").style.display = "none";
        } else {
            category = 'Motorrad';
            document.getElementById("lmf").style.display = "none";
            document.getElementById("mfr").style.display = "none";
            document.getElementById("kmr").style.display = "none";
            document.getElementById("mr").style.display = "unset";
        }
    } else {
        if (adjustedSpeed <= 20) {
            category = 'Leicht-Motorfahrrad';
            document.getElementById("lmf").style.display = "unset";
            document.getElementById("mfr").style.display = "none";
            document.getElementById("kmr").style.display = "none";
            document.getElementById("mr").style.display = "none";
        } else if (adjustedSpeed <= 30) {
            category = 'Motorfahrrad';
            document.getElementById("lmf").style.display = "none";
            document.getElementById("mfr").style.display = "unset";
            document.getElementById("kmr").style.display = "none";
            document.getElementById("mr").style.display = "none";
        } else if (adjustedSpeed <= 45) {
            category = 'Kleinmotorrad';
            document.getElementById("lmf").style.display = "none";
            document.getElementById("mfr").style.display = "none";
            document.getElementById("kmr").style.display = "unset";
            document.getElementById("mr").style.display = "none";
        } else {
            category = 'Motorrad';
            document.getElementById("lmf").style.display = "none";
            document.getElementById("mfr").style.display = "none";
            document.getElementById("kmr").style.display = "none";
            document.getElementById("mr").style.display = "unset";
        }
    }




});



document.getElementById('sendEmail').addEventListener('click', function() {
    var projectName = document.getElementById('projectName').value;
    var speed = document.getElementById('speed').value;
    var adjustedSpeed = document.getElementById('adjustedSpeed').value;
    var pedalAssist = document.getElementById('pedalAssist').checked ? 'Ja' : 'Nein';
    var issues = [];
    document.querySelectorAll('#issues input[type=checkbox]:checked').forEach(checkbox => {
        issues.push(checkbox.value);
    });
    var emailContent = `Projektname: ${projectName}\nGeschwindigkeit: ${speed} km/h\nBereinigte Geschwindigkeit: ${adjustedSpeed}\nTretunterstützung: ${pedalAssist}\nMängel:\n${issues.join('\n')}`;

    // Email senden (hier würde man den Email-Sendevorgang implementieren, z.B. mit einem Backend-Service)
    alert('Bericht gesendet:\n\n' + emailContent);
});

document.getElementById('viewReport').addEventListener('click', function() {
    var projectName = document.getElementById('projectName').value;
    var speed = document.getElementById('speed').value;
    var adjustedSpeed = document.getElementById('adjustedSpeed').value;
    var pedalAssist = document.getElementById('pedalAssist').checked ? 'Ja' : 'Nein';
    var issues = [];
    document.querySelectorAll('#issues input[type=checkbox]:checked').forEach(checkbox => {
        issues.push(checkbox.value);
    });
    var reportContent = `Projektname: ${projectName}\nGeschwindigkeit: ${speed} km/h\nBereinigte Geschwindigkeit: ${adjustedSpeed}\nTretunterstützung: ${pedalAssist}\nMängel:\n${issues.join('\n')}`;

    // Bericht anzeigen
    alert('Bericht einsehen:\n\n' + reportContent);

    //vordefinierte Daten welche je nach ausgewählter Checkbox in das Textfeld eingefügt werden
    // \n für Zeilenumbruch: Idee ist, dass zuerst der Berichttext und danach der Verzeigungstext erscheint.

    const data = {
        lmfMotor: "Text zu Motor von Leicht-Motorfahrad \n Verzeigungstext zu Text Motor Leicht-Motorfahrrad",
        lmfGlocke: "Hier kommt der Text für die Glocke bei Leicht-Motorfahrrädern hin. \n Das ist der Verzeigungstext für Leicht-Motorfahrräder ohne Glocke.",
        lmfLicht: "Num haben wir ein Leicht-Motorfahrrad ohne Licht. \n Auch für lichtlose Leicht-Motorfahrräder gibt es einen Verzeigungstext.",
        lmfRueckstrahler: "Text",
        lmfBatterie: "Text",
        lmfKabel: "Text",
        lmfReifen: "Text",
        lmfBremsen: "Text",
        lmfLocker: "Text",
        lmfScharf: "Text",
        mfrMotor: "Text zu Motor von Leicht-Motorfahrad \n Verzeigungstext zu Text Motor Leicht-Motorfahrrad",
        mfrVersicherung: "Text",
        mfrVignette: "Text",
        mfrGlocke: "Hier kommt der Text für die Glocke bei Leicht-Motorfahrrädern hin. \n Das ist der Verzeigungstext für Leicht-Motorfahrräder ohne Glocke.",
        mfrLicht: "Num haben wir ein Leicht-Motorfahrrad ohne Licht. \n Auch für lichtlose Leicht-Motorfahrräder gibt es einen Verzeigungstext.",
        mfrRueckstrahler: "Text",
        mfrSpiegel: "Text",
        mfrBatterie: "Text",
        mfrKabel: "Text",
        mfrReifen: "Text",
        mfrBremsen: "Text",
        mfrLocker: "Text",
        mfrScharf: "Text",
        kmrMotor: "Text zu Motor von Leicht-Motorfahrad \n Verzeigungstext zu Text Motor Leicht-Motorfahrrad",
        kmrVersicherung: "Text",
        kmrGlocke: "Hier kommt der Text für die Glocke bei Leicht-Motorfahrrädern hin. \n Das ist der Verzeigungstext für Leicht-Motorfahrräder ohne Glocke.",
        kmrLicht: "Num haben wir ein Leicht-Motorfahrrad ohne Licht. \n Auch für lichtlose Leicht-Motorfahrräder gibt es einen Verzeigungstext.",
        kmrRueckstrahler: "Text",
        kmrSpiegel: "Text",
        kmrBatterie: "Text",
        kmrKabel: "Text",
        kmrReifen: "Text",
        kmrBremsen: "Text",
        kmrLocker: "Text",
        kmrScharf: "Text",
        mrMotor: "Text zu Motor von Leicht-Motorfahrad \n Verzeigungstext zu Text Motor Leicht-Motorfahrrad",
        mrVersicherung: "Text",
        mrGlocke: "Hier kommt der Text für die Glocke bei Leicht-Motorfahrrädern hin. \n Das ist der Verzeigungstext für Leicht-Motorfahrräder ohne Glocke.",
        mrLicht: "Num haben wir ein Leicht-Motorfahrrad ohne Licht. \n Auch für lichtlose Leicht-Motorfahrräder gibt es einen Verzeigungstext.",
        mrRueckstrahler: "Text",
        mrSpiegel: "Text",
        mrBatterie: "Text",
        mrKabel: "Text",
        mrReifen: "Text",
        mrBremsen: "Text",
        mrLocker: "Text",
        mrScharf: "Text",
    };

});

// Mail an _Trendfahrzeuge

document.getElementById('sendReport').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.checklistenbox input[type="checkbox"]:checked');
    const projectName = document.getElementById('projectName').value;

    let emailBody = 'Ausgewählte Daten:\n';
    checkboxes.forEach(checkbox => {
        const value = data[checkbox.id];
        if (value) {
            emailBody += value + '\n';
        }
    });

    if (checkboxes.length === 0) {
        emailBody += 'Keine Checkboxen ausgewählt.\n';
    }


    const subject = encodeURIComponent(projectName);
    const body = encodeURIComponent(emailBody);



    const mailtoLink = `mailto:iphone.derspanier@gmail.com?subject=${encodeURIComponent(projectName)}&body=${encodeURIComponent(emailBody)}`;
    console.log(mailtoLink); // Überprüfen der Mailto-URL in der Konsole
    window.location.href = mailtoLink;
});