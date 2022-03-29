$(window).on("load", function () {
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
    const className = $(targetEl).attr("class")?.split(" ")[0];
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
    console.log("clicked");
    $("body").css("pointer-events", "none");
    if ($(this).attr("data-value") === "open") {
      $(".nav-bar").addClass("reset-nav");
      $("#navLogo").hide();
      $(this).animate(
        {
          width: "100%",
        },
        function () {
          $(".nav-bar").addClass("no-padding");
          $(this).addClass("dark");
          $(".animated-link").addClass("show-link");
          $(".tab-line").addClass("no-margin");
          $(".animated-link img").animate({
            height: "16px",
          });
          $(".animated-link").animate({
            height: "84px",
            fontSize: "16px",
          });
          $(".tab-line").animate({
            height: "1px",
            opacity: "0.2",
          });
        }
      );
      // $(this).attr("data-value", "close");
      $("#goRoamBody").addClass("fixed-body");
      const navTimeout = setTimeout(function () {
        $(".nav-tab").attr("data-value", "close");
        $("body").css("pointer-events", "all");
      }, 2100);
    }
  });

  $("#goRoamBody").on("click", function (e) {
    const targetEl = e.target;
    const className = $(targetEl).attr("class")?.split(" ")[0];
    if ($(".nav-tab").attr("data-value") === "close") {
      $("body").css("pointer-events", "none");
      if (className !== "nav-tab" && className !== "link-list") {
        $(".animated-link img").animate({
          height: "0px",
        });
        $(".animated-link").animate(
          {
            height: "0px",
            fontSize: "0px",
          },
          function () {
            $(".tab-line").removeClass("no-margin");
            $(".nav-tab").removeClass("dark");
            $(".first-tab-line").animate({
              height: "3px",
              opacity: "1",
            });
            $(".last-tab-line").animate(
              {
                opacity: "0",
              },
              function () {
                $(".nav-bar").removeClass("reset-nav");
                $(".nav-bar").removeClass("no-padding");
                $("#navLogo").show();
                $(".nav-tab").animate({
                  width: "28px",
                });
              }
            );
          }
        );
        // $(".nav-tab").attr("data-value", "open");
        $("#goRoamBody").removeClass("fixed-body");
        const navTimeout = setTimeout(function () {
          $(".nav-tab").attr("data-value", "open");
          $("body").css("pointer-events", "all");
        }, 2100);
      }
    }
  });

  // $(".nav-tab").on("click", function () {
  //   const dataValue = $(this).attr("data-value");
  //   if (dataValue === "open") {
  //     $(".mobile-nav").animate({
  //       left: "0px",
  //       opacity: "1",
  //     });
  //     $(this).attr("data-value", "close");
  //     $("#goRoamBody").addClass("fixed-body");
  //   }
  //   if (dataValue === "close") {
  //     $(".mobile-nav").animate({
  //       left: "-100%",
  //       opacity: "0",
  //     });
  //     $(this).attr("data-value", "open");
  //     $("#goRoamBody").removeClass("fixed-body");
  //   }
  // });

  // $("#goRoamBody").on("click", function (e) {
  //   const targetEl = e.target;
  //   const className = $(targetEl).attr("class")?.split(" ")[0];
  //   if (
  //     className !== "nav-tab" &&
  //     className !== "mobile-nav" &&
  //     className !== "mb-link"
  //   ) {
  //     $(".mobile-nav").animate({
  //       left: "-100%",
  //       opacity: "0",
  //     });
  //     $(".nav-tab").attr("data-value", "open");
  //     $("#goRoamBody").removeClass("fixed-body");
  //   }
  // });

  $(".party-tab").on("click", function (e) {
    e.preventDefault();
    $(".party-tab").removeClass("active");
    $(this).addClass("active");

    const tabId = $(this).attr("id");

    $(".party-card-container").fadeOut();
    $(`#${tabId}Container`).fadeIn("slow");
  });

  // stories container
  function rangeHtml(count) {
    return `<div class="range-box range-box${count}">
    <div class="range-bar"></div>
  </div>`;
  }

  $(".story-container").on("click", function () {
    const parentEl = $(this).parents(".card-box");
    const storyTitle = $(parentEl).attr("data-title");
    const imgData = $(parentEl).attr("data-img");
    const storiesCount = $(parentEl).attr("data-stories-count");

    $("#modalTitleImg").attr("src", `./assets/image/${imgData}.png`);
    $("#modalClubTitle").text(storyTitle);

    $("#storyRange").html("");
    for (let i = 0; i < parseInt(storiesCount); i++) {
      $("#storyRange").append(rangeHtml(i + 1));
    }

    $("#storyModal").fadeIn();
    $("body").addClass("fixed-body");
  });

  $("#modalCloseIcon").on("click", function () {
    $("#storyModal").fadeOut();
    $("body").removeClass("fixed-body");
  });

  $(window).scroll(function () {
    var bookRect = document
      .getElementById("bookBanner")
      .getBoundingClientRect();
    if ($(this).scrollTop() > 20) {
      $(".book-wrapper").addClass("fixed-banner");
    } else {
      $(".book-wrapper").removeClass("fixed-banner");
    }
  });
});
