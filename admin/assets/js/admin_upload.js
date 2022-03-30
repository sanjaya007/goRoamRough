$(window).on("load", function () {
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

  // tab box
  $(".tab-link").on("click", function (e) {
    e.preventDefault();
    $(".tab-link").removeClass("active");
    $(this).addClass("active");

    const tabLink = $(this).attr("data-box");
    $(".upload-container").fadeOut(0);
    $(`#${tabLink}`).fadeIn(500);
  });

  // delete alert
  $(".delete-file-btn").on("click", function (e) {
    e.preventDefault();
    $("#alertModal").removeClass("hidden");
    $("body").addClass("fixed-body");
  });

  $("#cancelDelete").on("click", function (e) {
    e.preventDefault();
    $("#alertModal").addClass("hidden");
    $("body").removeClass("fixed-body");
  });

  $("#confirmDelete").on("click", function (e) {
    e.preventDefault();
    $("#alertModal").addClass("hidden");
    alert("Deleted successfully !!");
    $("body").removeClass("fixed-body");
  });

  $("#alertModal").on("click", function (e) {
    const target = e.target;
    const targetId = $(target).attr("id");

    if (targetId === "alertModal") {
      $("#alertModal").addClass("hidden");
      $("body").removeClass("fixed-body");
    }
  });
});
