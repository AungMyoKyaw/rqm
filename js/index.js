$(document).ready(function() {
	var errorMessage={message:"Unable to get data !  Please Try Again !",by:"Aung Myo Kyaw"};
	function getQuote(){
		$.ajax({
			url:'https://api.quotable.io/random',
			type:'GET',
			dataType:'json',
			success:function(data){
				$("#quote").html('"'+data.content+'"');
				$("#author").html(data.author);
				$("a.twitter-share-button").attr("data-text",data.quote);
				$("#quote,#author").addClass('animated bounceInLeft');
				$("#quote,#author").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$("#quote,#author").removeClass('animated bounceInLeft');
				});
			},
			error:function(error){
				$("#quote").html(errorMessage.message);
				$("#author").html(errorMessage.by);
			}
		});
	}
	getQuote();
	$("#new").click(function() {
		getQuote();
	});
	$("#tweet").click(function() {
		var curQuote=$("#quote").html();
		var curAuthor=$("#author").html();
		var url='https://twitter.com/intent/tweet?text=' + encodeURIComponent(curQuote+"\n"+curAuthor);
		window.open(url)
	});
});
