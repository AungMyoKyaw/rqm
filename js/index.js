jQuery(document).ready(function($) {
	var errorMessage={message:"Unable to get data !  Please Try Again !",by:"Aung Myo Kyaw"};
	var title='Random Quote Machine';	
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	$("a.twitter-share-button").attr("data-text","fuck");
	function getQuote(){
		$.ajax({
			url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
			type:'POST',
			dataType:'json',
			success:function(data){
				$("#quote").html(data.quote);
				$("#author").html(data.author);
				$("a.twitter-share-button").attr("data-text",data.quote);
				console.log(data);
			},
			error:function(error){
				$("#quote").html(errorMessage.message);
				$("#author").html(errorMessage.by);
			},
			beforeSend:function(xhr){
				xhr.setRequestHeader("X-Mashape-Authorization", "PSKgJRegHBmsh1A157uuoGMhkUpxp1hW4VQjsn5BUUBMMF18AH");
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