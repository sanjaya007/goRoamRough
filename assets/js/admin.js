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
