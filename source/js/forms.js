//show different inputs depend on day, week, month or year
function addTimespan(option) {
    const addInputContainer = document.getElementById("selected-option");
    if (option === "day") {
        addInputContainer.innerHTML = '';
        addInputContainer.innerHTML +=
       `<p>Hur ofta ska den dagliga resan ske?</p>
       <input checked type="radio" class="radiobox" id="book--trip-day" name="book--trip-day" value="weekdays">
       <label class="checkbox-label" for="book--trip-day">Varje veckodag</label>
       <input type="radio" class="radiobox" id="book--trip-day" name="book--trip-day" value="allDays">
       <label class="checkbox-label" for="book--trip-day">Alla dagar i veckan</label><br> 
       `
    } else if (option === "week") {
        addInputContainer.innerHTML = '';
        addInputContainer.innerHTML +=
       `<p>Hur ofta ska den veckovisa resan ske?</p>
       <input checked type="radio" class="radiobox" id="book--trip-week" name="book--trip-week" value="everyWeek">
       <label class="checkbox-label" for="book--trip-week">Varje vecka</label>
       <input type="radio" class="radiobox" id="book--trip-week" name="book--trip-week" value="everyOtherWeek">
       <label class="checkbox-label" for="book--trip-week">Varannan vecka</label><br> 
       
       <p class="form-p">Bocka i rutorna för de dagar du vill åka:</p>
        <div class="form-wrapper">
            <div class="form-card">
                <input type="checkbox" class="checkbox" id="book--trip-monday" name="book--trip-monday" value="monday">
                <label class="checkbox-label" for="book--trip-monday">Måndag</label><br>
                <input type="checkbox" class="checkbox" id="book--trip-tuesday" name="book--trip-tuesday" value="tuesday">
                <label class="checkbox-label" for="book--trip-tuesday">Tisdag</label><br>
                <input type="checkbox" class="checkbox" id="book--trip-wednesday" name="book--trip-wednesday" value="wednesday">
                <label class="checkbox-label" for="book--trip-wednesday">Onsdag</label><br>
                <input type="checkbox" class="checkbox" id="book--trip-thursday" name="book--trip-thursday" value="thursday">
                <label class="checkbox-label" for="book--trip-thursday">Torsdag</label><br>
            </div>
            <div>
                <input type="checkbox" class="checkbox" id="book--trip-friday" name="book--trip-friday" value="friday">
                <label class="checkbox-label" for="book--trip-friday">Fredag</label><br>
                <input type="checkbox" class="checkbox" id="book--trip-saturday" name="book--trip-saturday" value="saturday">
                <label class="checkbox-label" for="book--trip-saturday">Lördag</label><br>
                <input type="checkbox" class="checkbox" id="book--trip-sunday" name="book--trip-sunday" value="saturday">
                <label class="checkbox-label" for="book--trip-sunday">Söndag</label><br>
            </div>
        </div>
        `
    } else if (option === "month") {
        addInputContainer.innerHTML = '';
        addInputContainer.innerHTML +=
       `<p>Hur ofta ska den månadsvisa resan ske?</p>
        <input checked type="radio" class="radiobox" id="book--trip-month" name="book--trip-month" value="everyMonth">
        <label class="checkbox-label" for="book-trip-month">Varje månad</label>
        <input type="radio" class="radiobox" id="book--trip-month" name="book--trip-month" value="everyOtherMonth">
        <label class="checkbox-label" for="book--trip-month">varannan månad</label><br>
        <input type="radio" class="radiobox" id="book--trip-month" name="book--trip-month" value="everyThirdMonth">
        <label class="checkbox-label" for="book--trip-month">Var tredje månad</label><br>
       <label class="label-p" for="book--trip-month-day">Ange vilken dag du vill att resan ska gälla för</label><br>
       <input type="number" id="book--trip-month-day" name="book--trip-month-day" placeholder="Skriv i nummer för dagen"><br>
       `
    } else if (option === "year") {
        addInputContainer.innerHTML = '';
        addInputContainer.innerHTML +=
       `<label for="book--trip-year-date">Vilket datum vill du att resan ska ske?</label>
       <input type="date" id="book--trip-year-date" name="book--trip-year-date">
       `
    } else {
        addInputContainer.innerHTML = '';
    }
}

//add how many passengers on trip
function addPassenger() {
    const passengerContainer = document.getElementById("passengers-container");
    const checkboxKids = document.getElementById("kids");
    const checkboxTraveler = document.getElementById("traveler");
    const checkboxCompanion = document.getElementById("companion");
    
    if (checkboxKids.checked == true || checkboxCompanion.checked == true || checkboxTraveler.checked == true) {
        passengerContainer.innerHTML = '';
        passengerContainer.innerHTML +=
        `<label class="special-label" for="passengers">Hur många reser du med?</label><br>
        <select name="passengers" id="passengers" onchange="updateReturnPassengerNumber(this.value)">
            <option value="0">Välj hur många personer</option>
            <option value="1">1 person</option>
            <option value="2">2 personer</option>
            <option value="3">3 personer</option>
            <option value="more">mer än 3 personer</option>
        </select>
        `
    } else {
        passengerContainer.innerHTML = '';
    }
}

//add how many passengers on return trip
function addReturnPassenger() {
    const passengerReturnContainer = document.getElementById("return-passengers-container");
    const checkboxReturnKids = document.getElementById("return-kids");
    const checkboxReturnTraveler = document.getElementById("return-traveler");
    const checkboxReturnCompanion = document.getElementById("return-companion");
    
    if (checkboxReturnKids.checked == true || checkboxReturnCompanion.checked == true || checkboxReturnTraveler.checked == true) {
        passengerReturnContainer.innerHTML = '';
        passengerReturnContainer.innerHTML +=
        `<label class="special-label" for="return-passengers">Hur många reser du med?</label><br>
        <select name="return-passengers" id="return-passengers">
            <option id="return-passengers-zero" value="0">Välj hur många personer</option>
            <option id="return-passengers-one" value="1">1 person</option>
            <option id="return-passengers-two" value="2">2 personer</option>
            <option id="return-passengers-three" value="3">3 personer</option>
            <option id="return-passengers-more" value="more">mer än 3 personer</option>
        </select>
        `
    } else {
        passengerReturnContainer.innerHTML = '';
    }
}

//add question if whhelchair, permobil or walker been choosed
function addAidQuestion() {
    const addAidContainer = document.getElementById("add-aid-container");
    const checkboxWheelchair = document.getElementById("aid-wheelchair");
    const checkboxWalker = document.getElementById("aid-walker");
    const checkboxPermobil = document.getElementById("aid-permobil");
    
    if (checkboxWheelchair.checked == true || checkboxWalker.checked == true || checkboxPermobil.checked == true) {
        addAidContainer.innerHTML = '';
        addAidContainer.innerHTML +=
        `
        <p class="form-p">Kan du förflytta dig till annat säte?</p>
        <input checked type="radio" class="radiobox" id="move-in-car-yes" name="move-in-car" value="ja">
        <label for="move-in-car-yes" class="yes-label">Ja</label>
        <input type="radio" class="radiobox" id="move-in-car-no" name="move-in-car" value="no">
        <label for="move-in-car-no" class="no-label">Nej</label><br>
        `
    } else {
        addAidContainer.innerHTML = '';
    }
}

//add question if whhelchair, permobil or walker been choosed
function addReturnAidQuestion() {
    const addReturnAidContainer = document.getElementById("return-add-aid-container");
    const checkboxReturnWheelchair = document.getElementById("return-aid-wheelchair");
    const checkboxReturnWalker = document.getElementById("return-aid-walker");
    const checkboxReturnPermobil = document.getElementById("return-aid-permobil");
    
    if (checkboxReturnWheelchair.checked == true || checkboxReturnWalker.checked == true || checkboxReturnPermobil.checked == true) {
        addReturnAidContainer.innerHTML = '';
        addReturnAidContainer.innerHTML +=
        `
        <p class="form-p">Kan du förflytta dig till annat säte?</p>
        <input checked type="radio" class="radiobox" id="return-move-in-car-yes" name="return-move-in-car" value="ja">
        <label for="return-move-in-car-yes" class="yes-label">Ja</label>
        <input type="radio" class="radiobox" id="return-move-in-car-no" name="return-move-in-car" value="no">
        <label for="return-move-in-car-no" class="no-label">Nej</label><br>
        `
    } else {
        addReturnAidContainer.innerHTML = '';
    }
}

//check if time is less then 5.30 and more than 00.00
function checkTime(time) {
    const errorContainer = document.getElementById("time-error-container");
    var time = time.split(":");
    time = time.join(''); 
    if (time <= 529 && time >= 1) {
        errorContainer.innerHTML = '';
        errorContainer.innerHTML +=
        `<p class="form-error-message">Du kan endast boka färdtjänst mellan 05.30 och 00.00</p>`
    } else {
        errorContainer.innerHTML = '';
    }
}

//check if return time is less then 5.30 and more than 00.00
function checkReturnTime(time) {
    const returnErrorContainer = document.getElementById("return-time-error-container");
    var time = time.split(":");
    time = time.join(''); 
    if (time <= 529 && time >= 1) {
        returnErrorContainer.innerHTML = '';
        returnErrorContainer.innerHTML +=
        `<p class="form-error-message">Du kan endast boka färdtjänst mellan 05.30 och 00.00</p>`
    } else {
        returnErrorContainer.innerHTML = '';
    }
}

//update return passenger destination to be same 
function updateReturnTo(destination){
    document.getElementById("return-to").value = destination;
}

//update return passenger destination to be same 
function updateReturnFrom(destination){
    document.getElementById("return-from").value = destination;
}

//update return passenger checkboxes to be same 
function updateReturnPassenger(checked, value) {
    switch(value) {
        case "traveler":
            if(checked == true) {
                document.getElementById("return-traveler").checked = true;
                addReturnPassenger()
            } else {
                document.getElementById("return-traveler").checked = false;
                addReturnPassenger()
            }
        break;
        case "kids":
            if(checked == true) {
                document.getElementById("return-kids").checked = true;
                addReturnPassenger()
            } else {
                document.getElementById("return-kids").checked = false;
                addReturnPassenger()
            }
        break;
        case "companion":
            if(checked == true) {
                document.getElementById("return-companion").checked = true;
                addReturnPassenger()
            } else {
                document.getElementById("return-companion").checked = false;
                addReturnPassenger()
            }
        break;
    }
}

//update return aid checkboxes to be same 
function updateReturnAid(checked, value) {
    switch(value) {
        case "wheelchair":
            if(checked == true) {
                document.getElementById("return-aid-wheelchair").checked = true;
                addReturnAidQuestion()
            } else {
                document.getElementById("return-aid-wheelchair").checked = false;
                addReturnAidQuestion()
            }
        break;
        case "walker":
            if(checked == true) {
                document.getElementById("return-aid-walker").checked = true;
                addReturnAidQuestion()
            } else {
                document.getElementById("return-aid-walker").checked = false;
                addReturnAidQuestion()
            }
        break;
        case "crutch":
            if(checked == true) {
                document.getElementById("return-aid-crutch").checked = true;
                addReturnAidQuestion()
            } else {
                document.getElementById("return-aid-crutch").checked = false;
                addReturnAidQuestion()
            }
        break;
        case "dog":
            if(checked == true) {
                document.getElementById("return-aid-dog").checked = true;
                addReturnAidQuestion()
            } else {
                document.getElementById("return-aid-dog").checked = false;
                addReturnAidQuestion()
            }
        break;
        case "permobil":
            if(checked == true) {
                document.getElementById("return-aid-permobil").checked = true;
                addReturnAidQuestion()
            } else {
                document.getElementById("return-aid-permobil").checked = false;
                addReturnAidQuestion()
            }
        break;
        case "other":
            if(checked == true) {
                document.getElementById("return-aid-other").checked = true;
                addReturnAidQuestion()
            } else {
                document.getElementById("return-aid-other").checked = false;
                addReturnAidQuestion()
            }
        break;
    }
}

//update return numbers of passenges to be same 
function updateReturnPassengerNumber(value) {
    console.log(value);
    switch(value){
        case 0:
            console.log(value);
            document.getElementById("return-passengers-zero").setAttribute('selected', true);
        break;
        case 1:
            console.log(value);
            document.getElementById("return-passengers-one").setAttribute('selected', true);
        break;
        case 2:
            console.log(value);
            document.getElementById("return-passengers-two").setAttribute('selected', true);
        break;
        case 3:
            console.log(value);
            document.getElementById("return-passengers-three").setAttribute('selected', true);
        break;
        case "more":
            console.log(value);
            document.getElementById("return-passengers-more").setAttribute('selected', true);
        break;
    }
}

function redirectTo(value) {
    switch(value) {
        case "comming":
            window.location.href = '#trips'
        break;
        case "recurrent":
            window.location.href = '#trip-recurrent-heading'
        break;
        case "history":
            window.location.href = '#trip-history-heading'
        break;
    }
}