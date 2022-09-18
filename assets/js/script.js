var todayDate = moment().format('dddd,MMMM Do, YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    auditEvents();
    $("#event-hour-eight").val(localStorage.getItem("hour-8"));
    $("#event-hour-nine").val(localStorage.getItem("hour-9"));
    $("#event-hour-ten").val(localStorage.getItem("hour-10"));
    $("#event-hour-eleven").val(localStorage.getItem("hour-11"));
    $("#event-hour-twelve").val(localStorage.getItem("hour-12"));
    $("#event-hour-one").val(localStorage.getItem("hour-1"));
    $("#event-hour-two").val(localStorage.getItem("hour-2"));
    $("#event-hour-three").val(localStorage.getItem("hour-3"));
    $("#event-hour-four").val(localStorage.getItem("hour-4"));
  });















$(document).ready(function () {
var saveBtn = $(".saveBtn")
saveBtn.on("click",function() {
    // $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".").val();
    var time = $(this).siblings().attr("id");

        localStorage.setItem(time, text);

    })
    function saveText() {
        $(".hour").each(function() {
            var currentHour =$(this).text();
            var currentText = localStorage.getItem(currentHour);
            if(currentText !== null) {
                $(this).siblings(".text").val(currentText);
            }
        })
    };
     saveText();
})
//     function planer() {
//         var timeNow = moment().hour();

//         $(".row-time-block").each(function () {
//             var blockTime = parseInt($(this).attr("id").split("hour")[1]);


//             if (blockTime < timeNow) {
//                 $(this).removeClass("future");
//                 $(this).removeClass("present");
//                 $(this).addClass("past");
//             }
//             else if (blockTime === timeNow) {
//                 $(this).removeClass("past");
//                 $(this).removeClass("future");
//                 $(this).addClass("present");

//             }
//             else {
//                 $(this).removeClass("present");
//                 $(this).removeClass("past");
//                 $(this).addClass("future");
//             }

//         })

//     }

//     $("#hour8 .description").val(localStorage.getItem("hour8"));
//     $("#hour9 .description").val(localStorage.getItem("hour9"));
//     $("#hour10 .description").val(localStorage.getItem("hour10"));
//     $("#hour11 .description").val(localStorage.getItem("hour11"));
//     $("#hour12 .description").val(localStorage.getItem("hour12"));
//     $("#hour1 .description").val(localStorage.getItem("hour1"));
//     $("#hour2 .description").val(localStorage.getItem("hour2"));
//     $("#hour3 .description").val(localStorage.getItem("hour3"));
//     $("#hour4 .description").val(localStorage.getItem("hour4"));


//     planer();
// })