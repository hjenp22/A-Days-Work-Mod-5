$(function () {
  $('#currentDay').text(dayjs().format("dddd, MMMM D, YYYY"));
  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id"));
    var description = $(this).siblings(".descri[tion").val();
    localStorage.setItem(hour,description);
  });
    var currentHour = dayjs().hour();
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).addclass("present").removeClass("past future");
      } else {
        $(this).addClass("fututre").removeClass("past present");
      }
    });
  
    updateStyles();
    
    $(".time-block").each(function() {
      var hour = $(this).attr("id");
      var savedEvent = localStorage.getItem(hour);
      if (savedEvent) {
      $(this).children("description").val(savedEvent);
    }
  });
    setInterval(updateStyles, 60000);
});
