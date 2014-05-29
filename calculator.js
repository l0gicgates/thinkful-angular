function plus() {
	$("#result").empty();	// empty it if full
	var result=parseInt($("#x").val()) + parseInt($("#y").val());
	var textResult=$("#x").val() + ' plus ' + $("#y").val() + ' is ' + result.toString();
	$("#result").append(textResult);
	
}

function minus() {
	$("#result").empty();	// empty it if full
	var result=parseInt($("#x").val()) - parseInt($("#y").val());
	var textResult=$("#x").val() + ' minus ' + $("#y").val() + ' is ' + result.toString();
	$("#result").append(textResult);
	
}