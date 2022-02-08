$(".nav-tab").on("click", function () {
  const dataValue = $(this).attr("data-value");
  if (dataValue === "open") {
    $(".mobile-nav").animate({
      left: "0px",
      opacity: "1",
    });
    $(this).attr("data-value", "close");
    $("#goRoamBody").addClass("fixed-body");
  }
  if (dataValue === "close") {
    $(".mobile-nav").animate({
      left: "-100%",
      opacity: "0",
    });
    $(this).attr("data-value", "open");
    $("#goRoamBody").removeClass("fixed-body");
  }
});

$("#goRoamBody").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  if (
    className !== "nav-tab" &&
    className !== "mobile-nav" &&
    className !== "mb-link"
  ) {
    $(".mobile-nav").animate({
      left: "-100%",
      opacity: "0",
    });
    $(".nav-tab").attr("data-value", "open");
    $("#goRoamBody").removeClass("fixed-body");
  }
});
