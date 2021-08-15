$(function() {
	
	// ANIMATE THE CENTER SQUARES
	$('#illustration').stop().hover(function() {
		$(this).children('span').animate({ left : 126 });
		$('#comix span').animate({ right : 473 });
	});
	$('#comix').stop().hover(function() {
		$('#illustration span').animate({ left : 475 });
		$(this).children('span').animate({ right : 124 });
	});
	
	// SET UP THE LINKS
	$('a').click(function() {
		
		var link = $(this).attr('id');

		if( link === 'illustration' ) {
			$(this).attr({ 'href' : 'http://fisherillustration.com', 'target' : '_blank' });
		}
		if( link === 'comix' ) {
			$(this).attr({ 'href' : 'http://particle17.com', 'target' : '_blank' });
		}

	});
	
});