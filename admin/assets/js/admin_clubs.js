let allowToggle = null;

if (window.innerWidth <= 1200) {
  allowToggle = true;
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1200) {
    allowToggle = false;
    $(".left-container").css({
      left: "0",
      opacity: "1",
    });
  } else {
    allowToggle = true;
    $(".left-container").css({
      left: "-100%",
      opacity: "0",
    });
  }
});

$(".nav-tab").on("click", function () {
  $(".left-container").animate({
    left: "0px",
    opacity: "1",
  });
});

$("#adminBody").on("click", function (e) {
  if (allowToggle) {
    const targetEl = e.target;
    const className = $(targetEl).attr("class")?.split(" ")[0];
    console.log(className);
    if (
      className !== "left-container" &&
      className !== "box" &&
      className !== "list" &&
      className !== "logout-box"
    ) {
      $(".left-container").animate({
        left: "-100%",
        opacity: "0",
      });
    }
  }
});
