// Programma Principale ------------------------------




//----------------------------------------------------


// Funzioni ------------------------------------------

function submitForm(event){
    event.preventDefault();

// Validazione imput ore di lavoro

    let workHours = document.getElementById("hoursRequested").value;

    if (isNaN(workHours) || workHours == "") {
        alert("Please insert a number");
    }

    workHours = parseFloat(workHours);
    console.log(workHours);

// Tipo di lavoro selezionato dall'utente

    let selectedProjectType = document.getElementById("select-type-of-work").value;
    console.log(selectedProjectType);

    let starterPriceBackend = 20.50;
    let starterFrontendPrice = 15.30;
    let starterAnalisiProgettualePrice = 33.60;

    switch(selectedProjectType){
        case "backend-price":
            starterPriceBackend;
            break;
        case "frontend-price":
            starterFrontendPrice;
            break; 
        case "analisi-progettuale-price":
            starterAnalisiProgettualePrice;
            break;
    }

// TODO: trasforma l'imput inviato dall'utente in numero


    if (starterPriceBackend){
        let backendFinalPrice = (starterPriceBackend * selectedWorkHours).toFixed(2);
        console.log(backendFinalPrice);

    } else if (starterFrontendPrice) {
        let frontendFinalPrice = (starterFrontendPrice * selectedWorkHours).toFixed(2);
        console.log(frontendFinalPrice);
    }
    
    else {
        let analisiprogettualeFinalPrice = (starterAnalisiProgettualePrice * selectedWorkHours).toFixed(2);
        console.log(analisiprogettualeFinalPrice)
    }
}

