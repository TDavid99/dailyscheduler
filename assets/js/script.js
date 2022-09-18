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
  hourNineInput = $("#text-hour-eight").val();
  hourTenInput = $("#text-hour-nine").val();
  hourElevenInput = $("#text-hour-ten").val();
  hourTwelveInput = $("#text-hour-eleven").val();
  hourOneInput = $("#text-hour-twelve").val();
  hourTwoInput = $("#text-hour-one").val();
  hourThreeInput = $("#text-hour-two").val();
  hourFourInput = $("#text-hour-three").val();
  hourFiveInput = $("#text-hour-four").val();


  function storetext() {
    localStorage.setItem("hour-8", hourNineInput);
    localStorage.setItem("hour-9", hourTenInput);
    localStorage.setItem("hour-10", hourElevenInput);
    localStorage.setItem("hour-11", hourTwelveInput);
    localStorage.setItem("hour-12", hourOneInput);
    localStorage.setItem("hour-1", hourTwoInput);
    localStorage.setItem("hour-2", hourThreeInput);
    localStorage.setItem("hour-3", hourFourInput);
    localStorage.setItem("hour-4 ", hourFiveInput);
  }
  storetext();
}


$(",saveBtn").on("click",saveText);

function auditEvents() {
    $(".time-block").removeClass("past present future");
}








