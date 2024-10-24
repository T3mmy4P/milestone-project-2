let overlay = document.getElementById('overlay');
let eventOverlay = document.getElementById('event-overlay');
let popup = document.getElementById('popup');
let events = document.getElementById('event-details')
let monthEl = document.getElementById('month');


let months = [
    'January',
    'February',
    'March',
    'April',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];


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

function showEventOverlay() {
    overlay.style.display = 'flex';
    events.style.display = 'block';
    // eventOverlay.style.display = 'block';
    
}

function updatePlanner(month, year, event) {
    let dayElements = document.querySelectorAll('.col-15')
    let dayCounter = 1;

    let firstDayOfMonth = new Date();
    firstDayOfMonth.setMonth(month);
    firstDayOfMonth.setYear(year);

    let firstDayOfWeek = firstDayOfMonth.getDay();
    let monthName = months[month - 1];
    let monthWithYear = `${year} - ${monthName}`;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    monthEl.innerText = monthWithYear;

}

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


updatePlanner(currentMonth, currentYear);
