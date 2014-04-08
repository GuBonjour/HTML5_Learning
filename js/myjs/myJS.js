function testjs() {
	alert("ssss");
}

function checkUserInfo() {
	if (myIsNull($("#name_in").val()) || myIsNull($("#code_in").val())) {
		alert("Uid or pwd could not be empty");
		return;
	}
	if ($("#name_in").val().length > parseInt($("#name_in").attr("maxlength"))) {
		alert($("#name_in").val().length + $("#name_in").attr("maxlenght"));
	} else {
		alert("Pass check");
	}
	return;
}

function clearUI(para_id) {
	var arr_para = para_id.split(",");
	var para;
	for (var i = 0; i < arr_para.length; i++) {
		para = $("#" + arr_para[i]);
		console.log(para.val());
		para.val("");
	}

}

function clearUserInfo() {
	console.log("yoooooh");
	$("#name_in").val("");
	$("#code_in").val("");
}

function myIsNull(value) {
	return value == null || value == "" ? true : false;
}
