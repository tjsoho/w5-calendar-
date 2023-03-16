
var timeDisplayEl = $('#currentDay');
var saveCalEntry = $('.saveBtn')

// this function displays current day and time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] h:mm a');
  timeDisplayEl.text(rightNow);
}

// saves user input to local storage 

function saveLocal() {
  saveCalEntry.on('click', function () {
    const value = $(this).siblings('.description').val()
    const key = $(this).parent().attr('id')
    localStorage.setItem(key, value);
  })
}

// function to load content from local storage to stay on the page after refresh

function loadLocal() {
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))
}

// color code for past present future
function colorCode() {
  $('.time-block').each(function () {
    const hour = parseInt($(this).attr('id').split('-')[1]);
    const curHour = dayjs().hour();
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).removeClass('future')
    if (hour < curHour) {
      $(this).addClass('past')
    }
    else if (hour === curHour) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future');
    }
  })
}
// this makes sure the oage is updating with the time so that the color code is applied at the end of each hour

setInterval(colorCode, 3600000)

// this code tells the browser to load everything first and then run these functions after everything has loaded
$(document).ready(function () {
  colorCode(),
    loadLocal(),
    saveLocal(),
    displayTime()
});
