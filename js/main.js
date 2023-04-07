

function submitForm(event){
    event.preventDefault();

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

    let selectedWorkHours = document.getElementById("hoursrequest");
    selectedWorkHours = parseFloat(submitForm);

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

