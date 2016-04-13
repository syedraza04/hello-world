

$(document).ready(function(){
	$.ajax({
		url:"dummyServer/obj.json",
		dataType:"text",
		method:"GET",
		success: function(data){
			var $grouplist = $('#myList');
			var myData = JSON.parse(data);
			$.each(myData,function(){
				$('<li><a href="#"><img src="images/'+this.selfie+'" alt="djdj"/>' + this.fname + ', ' + this.lastname + '</a></li>').appendTo($grouplist);
			});
			$grouplist.listview().listview('refresh');
		}	
	});
	
});	

