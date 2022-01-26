$(".filter-btn").on("click", function () {
	$("#filterList").slideToggle();
});

$("#goRoamBody").on("click", function (e) {
	const targetEl = e.target;
	const className = $(targetEl).attr("class");
	if (className !== "filter-btn") {
		$("#filterList").slideUp();
	}
});
