let mon = document.getElementById('monday');
let tue = document.getElementById('tuesday');
let wed = document.getElementById('wednesday');
let thur = document.getElementById('thursday');
let fri = document.getElementById('friday');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');

function showOverlay() {
    overlay.style.display = 'flex';
}

function hideOverlay () {
    if (overlay.style.display === 'flex'){
       overlay.style.display = 'none';
    } 
}

function eventDetails () {
    window.location.href='events-details.html';
}

function dayDetails () {
    window.location.href = 'day-details.html';
}