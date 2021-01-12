$(document).ready(function() {
    //Set current day at top from Moment API
$("#currentDay").text(moment().format("MMMM Do YYYY"));
//    
//color code each block to indicate whether in past, present, future (use classes in CSS)

//when text entered into time block, save button saves in local storage
$(".saveBtn").on("click", function () {
    var textBox = $(this).siblings(".description").val();
    var timeOfDay = $(this).parent().attr("id");

    localStorage.setItem(textBox, timeOfDay);
})
//when page is refreshed, saved text is reloaded from local storage

});
