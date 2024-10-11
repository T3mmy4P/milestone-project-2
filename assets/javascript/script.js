let mon = document.getElementById('monday');
let tue = document.getElementById('tuesday');
let wed = document.getElementById('wednesday');
let thur = document.getElementById('thursday');
let fri = document.getElementById('friday');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let events = document.getElementById('event-details')

function showOverlay() {
    overlay.style.display = 'flex';
    if (events.style.display === 'block'){
        events.style.display = 'none';
        popup.style.display = 'block';
    }
}

function hideOverlay() {
    if (overlay.style.display === 'flex'){
       overlay.style.display = 'none';
    } 
}

function eventDetails() {
    popup.style.display = 'none';
    events.style.display = 'block';
}

function showPopup() {
    events.style.display = 'none';
    popup.style.display = 'block';
}