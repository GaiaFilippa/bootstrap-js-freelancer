// Programma Principale ------------------------------




//----------------------------------------------------


// Funzioni ------------------------------------------

function submitForm(event){
    event.preventDefault();

    let price;

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

    let backendPrice = document.getElementById("backendPrice").innerText;
    backendPrice = parseFloat(backendPrice);

    let frontendPrice = document.getElementById("frontendPrice").innerText;
    frontendPrice= parseFloat(frontendPrice);

    let analysisPrice = document.getElementById("analysisPrice").innerText;
    analysisPrice = parseFloat(analysisPrice);

// Calcolo prezzo del lavoro

    switch(selectedProjectType){
        case "backend-price":
            price = backendPrice * workHours;
            console.log(price);
            break;
        case "frontend-price":
            price = frontendPrice * workHours;
            console.log(price);
            break; 
        case "analisi-progettuale-price":
            price = analysisPrice * workHours;
            console.log(price);
            break;
    }

// TODO: trasforma l'imput inviato dall'utente in numero


}

