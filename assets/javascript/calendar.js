// ......................... CALENDAR SECTION

let calendar = document.getElementById('calendar');
let monthEl = document.getElementById('month');
let overlay = document.getElementById('overlay');
let eventOverlay = document.getElementById('event-overlay');
let popup = document.getElementById('popup');

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


let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


function drawBlankCalendar() {
    for (let i=0; i<35; i++) {
        let calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');

        let calendarDayText = document.createElement('p');
        calendarDayText.classList.add('calendar-day-text');
        calendarDayText.innerText = days[i % 7]

        let calendarDayNumber = document.createElement('p');
        calendarDayNumber.classList.add('calendar-day-number');

        let calendarEventName = document.createElement('small');
        calendarEventName.classList.add('calendar-event-name');

        calendarDay.appendChild(calendarDayText);
        calendarDay.appendChild(calendarDayNumber);
        calendarDay.appendChild(calendarEventName);
        

        calendar.appendChild(calendarDay);
    }
}


function updateCalendar(month, year, events) {
    let dayElements = document.querySelectorAll('.calendar-day')

    let firstDayOfMonth = new Date();
    firstDayOfMonth.setMonth(month);
    firstDayOfMonth.setYear(year);

    let firstDayOfWeek = firstDayOfMonth.getDay();
    let monthName = months[month - 1];
    let monthWithYear = `${year} - ${monthName}`;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    monthEl.innerText = monthWithYear;

    let dayCounter = 1;

    for (let i=0; i < dayElements.length; i++) {
        let day = dayElements[i];

        let dayNumber = day.querySelector('.calendar-day-number');
        if(i >= firstDayOfWeek && dayCounter <= daysInMonth){
            dayNumber.innerText = dayCounter;
            dayCounter++;
        }
    }

}

drawBlankCalendar();
console.log('calendar created successfully');

updateCalendar (currentMonth, currentYear);
console.log ('calendar updated successfully')