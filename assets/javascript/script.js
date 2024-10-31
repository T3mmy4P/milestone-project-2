// ......................... VARIABLES

let mon = document.getElementById('monday');
let tue = document.getElementById('tuesday');
let wed = document.getElementById('wednesday');
let thur = document.getElementById('thursday');
let fri = document.getElementById('friday');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let events = document.getElementById('event-details')
let calendar = document.getElementById('calendar');
let monthEl = document.getElementById('month');
let mainPage = document.getElementById('main-page');
let dayNameLong = document.getElementById('day-name-long');
let dayNameClass = document.getElementsByClassName('planner-day-name')

let monday = document.getElementById('Mon');
let tuesday = document.getElementById('Tue');
let wednesday = document.getElementById('Wed');
let thursday = document.getElementById('Thur');
let friday = document.getElementById('Fri');
let saturday = document.getElementById('Sat');
let sunday = document.getElementById('Sun');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// STORAGE OBJECT 
var eventsStorage;
evntStorage = {
    eventTitle: "",
    eventTime: "",
    eventAddress: "",
    eventNotes: ""
}

// ......................... MAIN PAGE

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

// CREATE BLANK PLANNER
function createBlankPlanner() {
    for (let i=0; i<7; i++){
        
        // CREATE DAY BLOCK
        let plannerDay = document.createElement('article');
        plannerDay.classList.add('col-15');
        plannerDay.id = days[i % 7];
        plannerDay.addEventListener("click", showOverlay);

        let plannerDayName = document.createElement('h3');
        plannerDayName.classList.add ('planner-day-name')
        plannerDayName.innerText = days[i % 7];
        
        let plannerEventTitle = document.createElement('h4');
        plannerEventTitle.innerText = 'Events'


        // CREATE EVENT SECTION 
        let plannerEventDetails = document.createElement('div');
        plannerEventDetails.classList.add('border-bottom');

        let plannerEventName = document.createElement('p');
        plannerEventName.classList.add('event-name');

        let plannerEventTime = document.createElement('p');
        plannerEventTime.classList.add('event-time');


        // CREATE REMINDER SECTION
        let plannerReminderTitle = document.createElement('h4');
        plannerReminderTitle.innerText ='Reminders'


        let plannerReminderDetails = document.createElement('div');
        plannerReminderDetails.classList.add('border-bottom');

        let plannerReminderInfo = document.createElement('p');
        plannerReminderInfo.classList.add('reminder-info');


        // APPENDING SECTIONS
        plannerDay.appendChild(plannerDayName);
        plannerDay.appendChild(plannerEventTitle);

        plannerEventDetails.appendChild(plannerEventName);
        plannerEventDetails.appendChild(plannerEventTime);

        plannerReminderDetails.appendChild(plannerReminderInfo);

        plannerDay.appendChild(plannerEventDetails);

        plannerDay.appendChild(plannerReminderTitle);
        plannerDay.appendChild(plannerReminderDetails);



        mainPage.appendChild(plannerDay);
    
    
    }
}

// RUN BLANK PLANNER FUNCTION
createBlankPlanner();
console.log('planner created successfully')

// UPDATE OVERLAY HEADING
document.getElementById('Mon').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Monday";
}

document.getElementById('Tue').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Tuesday";
}

document.getElementById('Wed').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Wednesday";
}

document.getElementById('Thur').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Thursday";
}

document.getElementById('Fri').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Friday";
}

document.getElementById('Sat').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Saturday";
}

document.getElementById('Sun').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Sunday";
}


// UPDATE PLANNER FUNCTION
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

// RUN UPDATE PLANNER FUNCTION
updatePlanner(currentMonth, currentYear);
console.log('planner days updated successfully')

// SHOW OVERLAY FUNCTION
function showOverlay() {
    overlay.style.display = 'flex';
    if (events.style.display === 'block'){
        events.style.display = 'none';
        popup.style.display = 'block';
    }

    // let today = new Date().getDay() - 1;
    // console.log(today);
    let firstDayOfWeek = 0;

    let dayNameClass = document.getElementsByClassName('planner-day-name');
    if (dayNameClass.innerText === days[firstDayOfWeek]){
        dayNameLong.innerText = 'MONDAY';
    }
}   

// HIDE OVERLAY FUNCTION
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
    eventOverlay.style.display = 'flex';
    
}

const allDays = document.querySelectorAll('.planner-day-name');
console.log(allDays);


// ADD NEW

// ADD/DELETE EVENT ICONS


let deleteEvent = document.getElementById("delete-event");
deleteEvent.addEventListener("mouseover", showTooltip);
deleteEvent.addEventListener("mouseout", hideTooltip);


function showTooltip(){
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.display = 'block';
}

function hideTooltip(){
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.display = 'none';
}


// SELECTED EVENT OVERLAY
function selectedEvent() {
    // let checkBox = document.querySelectorAll('.event-checkbox');
    let checkBoxDiv = document.getElementsByClassName('event-checkbox-container');
   for (let i = 0; i <= checkBoxDiv.length; i++){
        if (checkBoxDiv[i].style.backgroundColor === 'none'){
            checkBoxDiv[i].style.backgroundColor = 'rgba(229, 233, 238)'
        } else {
            checkBoxDiv[i].style.backgroundColor = 'none'
        }
   }
}


// NEW EVENT MODAL
function newEventModal() {
    let myModal = document.getElementById('add-event-modal');
    popup.style.display = 'none';
    myModal.style.display = 'flex';
}


function hideEventModal(){
    let modal = document.getElementById('add-event-modal');
    modal.style.display = 'none';
    popup.style.display = 'block';
}

hideEventModal();


let eventData = [
    mon =
        {
        event_title: "", 
        event_date: "", 
        event_time: "", 
        event_notes: ""
    },

    tue =
        {
        event_title: "", 
        event_date: "", 
        event_time: "", 
        event_notes: ""
    },

    wed =
        {
        event_title: "", 
        event_date: "", 
        event_time: "", 
        event_notes: ""
    },

    thur =
        {
        event_title: "", 
        event_date: "", 
        event_time: "", 
        event_notes: ""
    },

    fri =
        {
        event_title: "", 
        event_date: "", 
        event_time: "", 
        event_notes: ""
    },

    sat =
        {
        event_title: "", 
        event_date: "", 
        event_time: "", 
        event_notes: ""
    },

    sun =
        {
        event_title: "", 
        event_date: "", 
        event_time: "", 
        event_notes: ""
    }
]
