playersReady = [0, 0]
function showInVisCont(){
    document.getElementById('visCont').style.visibility = 'hidden'
    document.getElementById('inVisCont').style.visibility = 'visible'
}
function setReady(player){
    document.getElementById('P' + player + 'ready').innerHTML = 'P' + player +'!';
    document.getElementById('P' + player + 'ready').style.backgroundColor = 'darkolivegreen'
    playersReady[player - 1] = 1
    console.log(playersReady)
    if (!playersReady.includes(0)){
        showInVisCont()
    }
}
