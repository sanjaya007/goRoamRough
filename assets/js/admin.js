$("#addClubBtn").on("click", function (e) {
  e.preventDefault();
  $(".modal-wrapper").addClass("hidden");
  $("#addModal").removeClass("hidden");
});

$(".edit-link").on("click", function (e) {
  e.preventDefault();
  $(".modal-wrapper").addClass("hidden");
  $("#editModal").removeClass("hidden");
});

$(".delete-link").on("click", function (e) {
  e.preventDefault();
  $(".modal-wrapper").addClass("hidden");
  $("#deleteModal").removeClass("hidden");
});

$(".modal-wrapper").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  if (className === "modal-wrapper") {
    $(".modal-wrapper").addClass("hidden");
  }
});

$(".nav-tab").on("click", function () {
  $(".left-container").animate({
    left: "0px",
    opacity: "1",
  });
});

$("#adminRoamBody").on("click", function (e) {
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
});

// graph container
$(".card-box").on("click", function () {
  $(".card-box").removeClass("active");
  $(this).addClass("active");
});
