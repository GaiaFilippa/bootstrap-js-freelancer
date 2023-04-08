// Programma Principale ------------------------------

// Codici sconto del 25%
let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


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

// Calcolo con aggiunta codice sconto

    let discountCodeUser = document.getElementById("discountCodeImput");

    let isDiscountCodeAvailable = discountCodes.includes(discountCodeUser);

    if(isDiscountCodeAvailable) {
        price = price * 0.75;
        discountCodes = removeElementFromArray(discountCodes, discountCodeUser);
    } else if (discountCodeUser != "") {
        document.getElementById("discountCodeImput").classList.add("text-danger");
        document.getElementById("applied-discount-result").innerHTML = "Il codice sconto non è valido!";
    } else {
        document.getElementById("applied-discount-result").innerHTML = "";
    }

// Mostrare codice all'utente

document.getElementById("price").innerHTML = price.toFixed(2);

}


function removeElementFromArray(array, elementToRemove) {

    const index = array.indexOf(elementToRemove);
    array.splice(index, 1);
    return array;
}