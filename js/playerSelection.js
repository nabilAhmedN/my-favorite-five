// Button Disabler and append child
function setPlayerName(players, button, playersField){
    const setPlayersField = document.getElementById(players)
    const setPlayersNameField = setPlayersField.innerText;
    const disabledBtn = document.getElementById(button)
    disabledBtn.setAttribute('disabled', true)

    const li = document.createElement('li')
    li.innerHTML = `${setPlayersNameField}`
    playersField.appendChild(li);
}

// Function For Converting Value
document.getElementById('p1-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('messi', 'p1-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})
document.getElementById('p2-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('neymar', 'p2-btn', playersField)
    }
        else{
        alert('You can not select more than 5 players');
    }
})
document.getElementById('p3-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('mbappé', 'p3-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})
document.getElementById('p4-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('machado', 'p4-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})
document.getElementById('p5-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('ramos', 'p5-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})
document.getElementById('p6-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('sanches', 'p6-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})
document.getElementById('p7-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('hakimi', 'p7-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})
document.getElementById('p8-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('marquinhos', 'p8-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})
document.getElementById('p9-btn').addEventListener('click', function(){
    const playersField = document.getElementById('player-list')
    const totalPlayer = playersField.getElementsByTagName('li').length;
    console.log(totalPlayer)
    if(totalPlayer < 5){
        setPlayerName('icardi', 'p9-btn', playersField)
    }
        else{
        alert('You Have Permission to Add Maximum 5 Player');
    }
})