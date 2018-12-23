const $ = require("jQuery");


$("#message").keyup(function (e) {
	if (e.which == 13) {
		$("#messages").append(`<p><b>You:</b> ${$("#message").val()}</p>`);
		$("#messages").scrollTop($("#messages")[0].scrollHeight);
		$("#message").val("").focus();
	}
});
$("#add").keyup(function (e) {
	if (e.which == 13) {
		$("#channels").prepend(`<button class="nav-item"># ${$("#add").val()}</button>`);
		$("#add").val("").focus();

	}
});