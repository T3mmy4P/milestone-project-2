// ......................... VARIABLES
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let events = document.getElementById('event-details')
let calendar = document.getElementById('calendar');
let monthEl = document.getElementById('month');
let mainPage = document.getElementById('main-page');
let dayNameLong = document.getElementById('day-name-long');
let liveDate = document.getElementById('live-date');


let monday = document.getElementById('Mon');
let tuesday = document.getElementById('Tue');
let wednesday = document.getElementById('Wed');
let thursday = document.getElementById('Thur');
let friday = document.getElementById('Fri');
let saturday = document.getElementById('Sat');
let sunday = document.getElementById('Sun');

let today = new Date();
liveDate.innerHTML = "Date:  " + " " + today.toDateString();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDay = today.getDay();
let dateNum = today.getDate();

const previousMonth = ()=> {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(daysInMonth);
    
    --currentDay;
    updatePlanner(currentMonth, currentYear);
}

const nextMonth = ()=> {
    ++currentDay;
    updatePlanner(currentMonth, currentYear);

}

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

let daysShrt = ['SN', 'MN', 'TU', 'WD', 'THR', 'FR', 'ST']

let daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// DATA STORAGE 
let eventData = [
    sun = [],

    mon = [],

    tue = [],

    wed = [],

    thur = [],

    fri = [],

    sat = [] 
]


// CREATE BLANK PLANNER
function createBlankPlanner() {
    for (let i=0; i<7; i++){
        
        // CREATE DAY BLOCK
        let plannerDay = document.createElement('article');
        plannerDay.classList.add('col-15');
        plannerDay.id = daysLong[i % 7];

        plannerDay.addEventListener("click", showOverlay);


        let plannerDayName = document.createElement('h3');
        plannerDayName.classList.add("planner-day-name")

        plannerDayName.innerText = days[i % 7];
        
        let plannerEventTitle = document.createElement('h4');
        plannerEventTitle.classList.add('planner-date')
        plannerEventTitle.innerText = 'Events'


        // CREATE EVENT SECTION 
        let plannerEventDetails = document.createElement('div');
        plannerEventDetails.classList.add('day-block-events');
        plannerEventDetails.id = daysShrt[i % 7];


        // APPENDING SECTIONS
        plannerDay.appendChild(plannerDayName);
        plannerDay.appendChild(plannerEventTitle);
        plannerDay.appendChild(plannerEventDetails);
     
        mainPage.appendChild(plannerDay);
    }
}

// RUN BLANK PLANNER FUNCTION
createBlankPlanner();
console.log('planner created successfully')


sunPopup = document.getElementById(days[0]);
console.log(sunPopup);
sunPopup.style.display = 'none';

monPopup = document.getElementById(days[1]);
console.log(monPopup);
monPopup.style.display = 'none';

tuePopup = document.getElementById(days[2]);
console.log(tuePopup);
tuePopup.style.display = 'none';

wedPopup = document.getElementById(days[3]);
console.log(wedPopup);
wedPopup.style.display = 'none';

thurPopup = document.getElementById(days[4]);
console.log(thurPopup);
thurPopup.style.display = 'none';

friPopup = document.getElementById(days[5]);
console.log(friPopup);
friPopup.style.display = 'none';


satPopup = document.getElementById(days[6]);
console.log(satPopup);
satPopup.style.display = 'none';


// UPDATE DAYBLOCK POPUP
document.getElementById('Sunday').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Sunday";

    // CREATES DIV IN POPUP WINDOW
    const sun = eventData[0]
    console.log(sun);

    sunPopup.style.display = 'block';
    monPopup.style.display = 'none';
    tuePopup.style.display = 'none';
    wedPopup.style.display = 'none';
    thurPopup.style.display = 'none';
    friPopup.style.display = 'none';
    satPopup.style.display = 'none';


    // ADD/DELETE EVENT ICONS
    let deleteEvent = document.getElementById("delete-event");
    deleteEvent.addEventListener("mouseover", showTooltip);
    deleteEvent.addEventListener("mouseout", hideTooltip);    
}


document.getElementById('Monday').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Monday";

    const mon = eventData[1]
    console.log(mon);

    sunPopup.style.display = 'none';
    monPopup.style.display = 'block';
    tuePopup.style.display = 'none';
    wedPopup.style.display = 'none';
    thurPopup.style.display = 'none';
    friPopup.style.display = 'none';
    satPopup.style.display = 'none';

    // ADD/DELETE EVENT ICONS
    let deleteEvent = document.getElementById("delete-event");
    deleteEvent.addEventListener("mouseover", showTooltip);
    deleteEvent.addEventListener("mouseout", hideTooltip);
    
}

document.getElementById('Tuesday').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Tuesday";
  
    const tue = eventData[2]
    console.log(tue);

    sunPopup.style.display = 'none';
    monPopup.style.display = 'none';
    tuePopup.style.display = 'block';
    wedPopup.style.display = 'none';
    thurPopup.style.display = 'none';
    friPopup.style.display = 'none';
    satPopup.style.display = 'none';

    // ADD/DELETE EVENT ICONS
    let deleteEvent = document.getElementById("delete-event");
    deleteEvent.addEventListener("mouseover", showTooltip);
    deleteEvent.addEventListener("mouseout", hideTooltip);
}

document.getElementById('Wednesday').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Wednesday";

    const wed = eventData[3]
    console.log(wed);

    sunPopup.style.display = 'none';
    monPopup.style.display = 'none';
    tuePopup.style.display = 'none';
    wedPopup.style.display = 'block';
    thurPopup.style.display = 'none';
    friPopup.style.display = 'none';
    satPopup.style.display = 'none';
}

document.getElementById('Thursday').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Thursday";

    const thur = eventData[4]
    console.log(thur);

    sunPopup.style.display = 'none';
    monPopup.style.display = 'none';
    tuePopup.style.display = 'none';
    wedPopup.style.display = 'none';
    thurPopup.style.display = 'block';
    friPopup.style.display = 'none';
    satPopup.style.display = 'none';
}

document.getElementById('Friday').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Friday";

    const fri = eventData[5]
    console.log(fri);

    sunPopup.style.display = 'none';
    monPopup.style.display = 'none';
    tuePopup.style.display = 'none';
    wedPopup.style.display = 'none';
    thurPopup.style.display = 'none';
    friPopup.style.display = 'block';
    satPopup.style.display = 'none';
}

document.getElementById('Saturday').onclick = function(){
    document.getElementById('day-name-long').innerHTML = "Saturday";

    const sat = eventData[6]
    console.log(sat);

    sunPopup.style.display = 'none';
    monPopup.style.display = 'none';
    tuePopup.style.display = 'none';
    wedPopup.style.display = 'none';
    thurPopup.style.display = 'none';
    friPopup.style.display = 'none';
    satPopup.style.display = 'block';
}


// ADD EVENT FUNCTION
const addEvent = (ev)=>{
    ev.preventDefault();

    // GET THE VALUE OF THE EVENT DATE TO BE SAVED
    let eventDate = document.getElementById('event-date').value;
    eventDate = new Date(eventDate).toLocaleDateString();
    console.log(eventDate);

    let date = document.getElementById('event-date').value;
    let title =document.getElementById('event-title').value;
    let address =document.getElementById('event-address').value;
    let time =document.getElementById('event-time').value;
    // let notes =document.getElementById('event-notes').value;

    // GET EVENT DAY INDEX
    date = new Date(date).getDay();
    console.log(date);

     
    // MATCHING EVENT DAY INDEX TO STORAGE DAY INDEX
    let day = eventData[date];
    console.log(day);

    // COLLECT AND SAVE DATA IN AN OBJECT
    var eventInfo = {
        id: Date.now(),
        event_title: document.getElementById('event-title').value,
        event_address: document.getElementById('event-address').value, 
        event_date: document.getElementById('event-date').value, 
        event_time: document.getElementById('event-time').value, 
        // event_notes: document.getElementById('event-notes').value
    }

    

        // CREATE DIV IN POPUP WINDOW
        let popupDiv = document.getElementById(days[date]);
        console.log(popupDiv);

        // let dayBlock = document.getElementById(daysLong[date])
        // console.log(dayBlock);

        let eventContainer = document.createElement('div');
        eventContainer.classList.add('event-container');
        eventContainer.id = eventInfo.id

        let checkBoxContainer = document.createElement('div');
        checkBoxContainer.classList.add('checkbox-container');

        function containerInfo(){
            let containerId = document.getElementById(eventContainer.id);
            console.log(containerId.style.background);
        };

        document.getElementById('delete-event').onclick = function(){
            let containerId = document.getElementById(eventContainer.id);
        };

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('click', containerInfo)

        let eventDetailContainer = document.createElement('div');
        eventDetailContainer.classList.add('event');
        eventDetailContainer.id = eventContainer.id + 1;

        let eventTitle = document.createElement('h4');
        eventTitle.classList.add('event-name');
        eventTitle.innerHTML = document.getElementById('event-title').value;
        console.log(eventTitle);

        let eventAddress = document.createElement('p');
        eventAddress.classList.add('event-info');
        eventAddress.innerHTML = document.getElementById('event-address').value;
        console.log(eventAddress);

        let eventTime = document.createElement('p');
        eventTime.classList.add('event-info');
        eventTime.innerHTML = document.getElementById('event-time').value;
        console.log(eventTime);

        let eventDates = document.createElement('p');
        eventDates.classList.add('event-info');
        eventDates.innerHTML = eventDate
        console.log(eventDates);

        // CREATE EVENT IN DAYBLOCK
        let dayBlock = document.getElementById(daysShrt[date])
        console.log(dayBlock);

        let dBlockEventContainer = document.createElement('div');
        dBlockEventContainer.classList.add('event-container');
        dBlockEventContainer.id = eventContainer.id + 1;

        let dBlockEventDetails = document.createElement('div');
        dBlockEventDetails.classList.add('event-sm');
        dBlockEventDetails.id = eventDetailContainer.id;

        let dBlockEventTitle = document.createElement('h4');
        dBlockEventTitle.classList.add('event-name');
        dBlockEventTitle.innerHTML = document.getElementById('event-title').value;



        // CLOSE MODAL FUNCTION
    function hideEventModal(){
        let modal = document.getElementById('add-event-modal');
        modal.style.display = 'none';
        popup.style.display = 'block';
    }

    // APPEND ELEMENTS TO PAGE
    checkBoxContainer.appendChild(checkBox);
    eventDetailContainer.appendChild(eventTitle);
    eventDetailContainer.appendChild(eventAddress);
    eventDetailContainer.appendChild(eventDates);
    eventDetailContainer.appendChild(eventTime);

    dBlockEventDetails.appendChild(dBlockEventTitle);
    // dBlockEventDetails.appendChild(dBlockEventDate);
    // dBlockEventDetails.appendChild(dBlockEventTime);

    eventContainer.appendChild(checkBoxContainer);
    eventContainer.appendChild(eventDetailContainer);

    dBlockEventContainer.appendChild(dBlockEventDetails);
    
    popupDiv.appendChild(eventContainer);
    dayBlock.appendChild(dBlockEventContainer);

    // popupDiv.appendChild(eventContainer);
    
    

    // document.getElementById(eventDetailContainer.id).addEventListener('click', eventDetails);



    // ADD EVENT TO STORAGE ARRAY
    day.push(eventInfo);  
    document.forms[0].reset();
    console.log(eventData);

    // CLOSE MODAL ON COMPLETION
    hideEventModal();
    hideOverlay();
    console.log('Event created')

        

}


// SAVE BUTTON CLICK EVENT
document.getElementById('save-btn').addEventListener('click', addEvent);
console.log(eventData);




// SHOW OVERLAY FUNCTION
function showOverlay() {
    events.style.display = 'none';
    overlay.style.display = 'flex';
}   

// HIDE OVERLAY FUNCTION
function hideOverlay() {
    if (overlay.style.display === 'flex'){
       overlay.style.display = 'none';
    };

}


// function showPopup() {
//     // events.style.display = 'none';
//     popup.style.display = 'block';
// }

// function showEventOverlay() {
//     eventOverlay.style.display = 'flex';
    
// }



// // ADD/DELETE EVENT ICONS
// let deleteEvent = document.getElementById("delete-event");
// deleteEvent.addEventListener("mouseover", showTooltip);
// deleteEvent.addEventListener("mouseout", hideTooltip);


function showTooltip(){
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.display = 'block';
}

function hideTooltip(){
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.display = 'none';
}




// ADD NEW EVENT IN OVERLAY SECTION

function newEventModal() {
    let myModal = document.getElementById('add-event-modal');
    myModal.style.display = 'flex';
    popup.style.display = 'none';
};


// ADD NEW EVENT FROM HOMEPAGE
function addEventModal(){
    let newModal = document.getElementById('add-event-modal');
    overlay.style.display = 'flex';
    popup.style.display = 'none';
    newModal.style.display = 'flex';
};


function hideEventModal(){
    let modal = document.getElementById('add-event-modal');
    modal.style.display = 'none';
    overlay.style.display = 'none';
    popup.style.display = 'block';
}

hideEventModal();



