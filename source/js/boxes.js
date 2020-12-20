//change infobox on click
function changeBox() {
    //get elements
    const questionBox = document.getElementById("question-wrapper");
    const infoBox = document.getElementById("hidden-info-wrapper");

    if (screen.width < 960) {
        questionBox.style.display = "none";
        infoBox.style.display = "block";
    } else {
        questionBox.style.display = "none";
        infoBox.style.display = "flex";
    }    
}

//change update box on click
function changeUpdateBox() {
    //get elements
    const questionUpdateBox = document.getElementById("update-question-wrapper");
    const infoUpdateBox = document.getElementById("update-hidden-info-wrapper");

    if (screen.width < 960) {
        questionUpdateBox.style.display = "none";
        infoUpdateBox.style.display = "block";
    } else {
        questionUpdateBox.style.display = "none";
        infoUpdateBox.style.display = "flex";
    }
}

//change delete box on click
function changeDeleteBox() {
    //get elements
    const questionDeleteBox = document.getElementById("delete-question-wrapper");
    const infoDeleteBox = document.getElementById("delete-hidden-info-wrapper");

    if (screen.width < 960) {
        questionDeleteBox.style.display = "none";
        infoDeleteBox.style.display = "block";
    } else {
        questionDeleteBox.style.display = "none";
        infoDeleteBox.style.display = "flex";
    }
}

function goBack() {
    history.back();
}