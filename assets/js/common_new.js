$(window).on("load", function () {
  $("#navTab").on("click", function () {
    $(".mobile-nav").animate({
      left: "0px",
      opacity: "1",
    });
    $("#goRoamBody").addClass("fixed-body");
  });

  $("#closeIcon").on("click", function () {
    $(".mobile-nav").animate({
      left: "-100%",
      opacity: "0",
    });
    $("#goRoamBody").removeClass("fixed-body");
  });

  $("#profileMbLink").on("click", function (e) {
    e.preventDefault();
    $("#profileLinkList").slideToggle();
  });

  $("#avatarImg").on("click", function () {
    $("#profileDropdown").fadeIn();
  });
  $("#goRoamBody").on("click", function (e) {
    const targetEl = e.target;
    const className = $(targetEl).attr("class")?.split(" ")[0];
    if (className !== "avatar-wrapper" && className !== "dropdown-link") {
      $("#profileDropdown").fadeOut();
    }
  });
});
