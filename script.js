$(document).ready(function () {
  //Variable to load/store current hour from Moment

  var currentHour = moment().hours();

  //Set current day at top from Moment API

  $("#currentDay").text("Today is " + moment().format("MMMM Do YYYY"));

  //color code each block to indicate whether in past, present, future (use classes in CSS)

  function colorChange() {
    $(".time-block").each(function () {
      var rowHour = $(this).attr("id");
      var rowNumber = parseInt(rowHour);
      if (rowNumber === currentHour) {
        $(this).addClass("present");
      } else if (rowNumber < currentHour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
      console.log(rowNumber);
      console.log(rowHour);
      console.log(currentHour);
    });
  }

  colorChange();
  //when text entered into time block, save button saves in local storage

  $(".saveBtn").on("click", function () {
    var textBox = $(this).siblings(".description").val();
    var timeOfDay = $(this).parent().attr("id");

    localStorage.setItem(textBox, timeOfDay);
  });

  //when page is refreshed, saved text is reloaded to block hours from local storage
});
