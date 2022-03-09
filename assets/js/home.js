$(".filter-btn").on("click", function () {
  $("#filterList").slideToggle();
});

$(".filter-location-list").on("click", function () {
  $(".filter-location-list").removeClass("active");
  $(".filter-location-list").attr("data-status", "inactive");

  $(this).addClass("active");
  $(this).attr("data-status", "active");
});

$(".filter-price-list").on("click", function () {
  $(".filter-price-list").removeClass("active");
  $(".filter-price-list").attr("data-status", "inactive");

  $(this).addClass("active");
  $(this).attr("data-status", "active");
});

$("#goRoamBody").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class").split(" ")[0];
  if (
    className !== "filter-btn" &&
    className !== "filter-link" &&
    className !== "filter-cat" &&
    className !== "list"
  ) {
    $("#filterList").slideUp();
  }
});

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

$(".party-tab").on("click", function (e) {
  e.preventDefault();
  $(".party-tab").removeClass("active");
  $(this).addClass("active");

  const tabId = $(this).attr("id");
  console.log(tabId);

  $(".party-card-container").fadeOut();
  $(`#${tabId}Container`).fadeIn("slow");
});

$(window).scroll(function () {
  var bookRect = document.getElementById("bookBanner").getBoundingClientRect();
  if ($(this).scrollTop() > 20) {
    $(".book-wrapper").addClass("fixed-banner");
  } else {
    $(".book-wrapper").removeClass("fixed-banner");
  }
});

$(".light-btn").on("click", function (e) {
  e.preventDefault();
  // $(".modal-wrapper").addClass("hidden");
  $(".modal-wrapper").fadeOut();
});
