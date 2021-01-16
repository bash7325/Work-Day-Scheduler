$(document).ready(function () {
  //Variable to load/store current hour from Moment

  var currentHour = moment().hours();
  var saveBtn = $(".saveBtn");

  //Set current day at top from Moment API

  $("#currentDay").text("Today is " + moment().format("MMMM Do YYYY"));

  //Color code each block to indicate whether in past, present, future (use classes in CSS)

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
  //When text entered into time block, save button saves in local storage
  saveBtn.on("click", function () {
    var timeOfDay = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();

    localStorage.setItem(timeOfDay, task);
  });

  //When page is refreshed check to see if local storage has anything in it, if it does text is reloaded from local storage
  function saveTask() {
    $(".hour").each(function () {
      var currHour = $(this).text();
      var currTask = localStorage.getItem(currHour);

      if (currTask !== null) {
        $(this).siblings(".description").val(currTask);
      }
    });
  }
  saveTask();
});
