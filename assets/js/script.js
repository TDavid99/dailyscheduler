var todayDate = moment().format('dddd,MMMM Do, YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    auditEvents();
    $("#text-hour-eight").val(localStorage.getItem("hour-8"));
    $("#text-hour-nine").val(localStorage.getItem("hour-9"));
    $("#text-hour-ten").val(localStorage.getItem("hour-10"));
    $("#text-hour-eleven").val(localStorage.getItem("hour-11"));
    $("#text-hour-twelve").val(localStorage.getItem("hour-12"));
    $("#text-hour-one").val(localStorage.getItem("hour-1"));
    $("#text-hour-two").val(localStorage.getItem("hour-2"));
    $("#text-hour-three").val(localStorage.getItem("hour-3"));
    $("#text-hour-four").val(localStorage.getItem("hour-4"));
});


function saveText() {
    hourEightText = $("#text-hour-eight").val();
    hourNineText = $("#text-hour-nine").val();
    hourTenText = $("#text-hour-ten").val();
    hourElevenText = $("#text-hour-eleven").val();
    hourTwelveText = $("#text-hour-twelve").val();
    hourOneText = $("#text-hour-one").val();
    hourTwoText = $("#text-hour-two").val();
    hourThreeText = $("#text-hour-three").val();
    hourFourText = $("#text-hour-four").val();


    function storeText() {
        localStorage.setItem("hour-8", hourEightText);
        localStorage.setItem("hour-9", hourNineText);
        localStorage.setItem("hour-10", hourTenText);
        localStorage.setItem("hour-11", hourElevenText);
        localStorage.setItem("hour-12", hourTwelveText);
        localStorage.setItem("hour-1", hourOneText);
        localStorage.setItem("hour-2", hourTwoText);
        localStorage.setItem("hour-3", hourThreeText);
        localStorage.setItem("hour-4 ", hourFourText);
    }
    storeText();
}


$(",saveBtn").on("click", saveText);

function auditEvents() {
    $(".time-block").removeClass("past present future");
}
if (moment().isAfter(moment().hour(16))) {
    $("text-hour-eight").addClass("past");
    $("text-hour-nine").addClass("past");
    $("text-hour-ten").addClass("past");
    $("text-hour-eleven").addClass("past");
    $("text-hour-twelve").addClass("past");
    $("text-hour-one").addClass("past");
    $("text-hour-two").addClass("past");
    $("text-hour-three").addClass("past");
    $("text-hour-four").addClass("past");
   }else if(moment().isAfter(moment().hour(15))) {
    $("text-hour-eight").addClass("past");
    $("text-hour-nine").addClass("past");
    $("text-hour-ten").addClass("past");
    $("text-hour-eleven").addClass("past");
    $("text-hour-twelve").addClass("past");
    $("text-hour-one").addClass("past");
    $("text-hour-two").addClass("past");
    $("text-hour-three").addClass("past");
    $("text-hour-four").addClass("past");

   }






