//$(window).load(function () {

//});

var timeDisplayEl = $('#currentDay');
var saveCalEntry = $('.saveBtn')


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] h:mm a');
  timeDisplayEl.text(rightNow);
}
displayTime();


function saveLocal() {
  saveCalEntry.on('click', function () {
    const value = $(this).siblings('.description').val()
    const key = $(this).parent().attr('id')
    localStorage.setItem(key, value);
  })
}
saveLocal()

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
loadLocal()

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
colorCode()

setInterval(colorCode, 3600000)