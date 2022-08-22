function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseInt(inputField.value);
  
    return inputFieldValue;
  
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
  
    textElement.innerText = newValue;
}
  
function getElementValueById(elementId){
  
    const textElement = document.getElementById(elementId);
    const textElementValue = parseInt(textElement.innerText);
  
    return textElementValue;
}
  
  
document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerCost = getInputFieldValueById('player-cost');
    if(isNaN(perPlayerCost)){
        alert('input a valid Number');
        return;
    }
    const playersField = document.getElementById('player-list');
    const totalPlayer = playersField.getElementsByTagName('li').length;
    const totalPlayerExpence = perPlayerCost * totalPlayer;

    setTextElementValueById('player-expense', totalPlayerExpence);
});
  
document.getElementById('total-calculate-btn').addEventListener('click',function(){
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
    const playerTotalcost = getElementValueById('player-expense') ;

    const totalCost = managerCost + coachCost + playerTotalcost;
    setTextElementValueById('total-expense', totalCost);
});

