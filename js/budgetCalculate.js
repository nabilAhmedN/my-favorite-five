// Function For Converting InputField Value
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseInt(inputField.value);
  
    return inputFieldValue;
  
}

function getElementValueById(elementId){
    
    const textElement = document.getElementById(elementId);
    const textElementValue = parseInt(textElement.innerText);
    
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
  
    textElement.innerText = newValue;
}

// find total player cost
document.getElementById('calculate-btn').addEventListener('click',function(){
    // set per player cost
    const perPlayerCost = getInputFieldValueById('player-cost');
    // validation cheak
    if(isNaN(perPlayerCost)){
        // when not a number then give alert
        alert('input a valid Number');
        return;
    }
    // find the number of player
    const playersField = document.getElementById('player-list');
    const totalPlayer = playersField.getElementsByTagName('li').length;
    // get the total cost
    const totalPlayerExpence = perPlayerCost * totalPlayer;
    // set the total cost
    setTextElementValueById('player-expense', totalPlayerExpence);
});


document.getElementById('total-calculate-btn').addEventListener('click',function(){

    // get the cost of manager
    const managerCost = getInputFieldValueById('manager-cost');
    if(isNaN(managerCost)){
        alert('input a valid Number');
        return;
        }
    const coachCost = getInputFieldValueById('coach-cost');
        if(isNaN(coachCost)){
            alert('input a valid Number');
            return;
        } 

    // total player cost    
    const playerTotalcost = getElementValueById('player-expense');
    // add the value
    const totalCost = managerCost + coachCost + playerTotalcost;
    setTextElementValueById('total-expense', totalCost);
});

