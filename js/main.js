

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


}