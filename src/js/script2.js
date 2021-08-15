import $ from "./jquery.js";

$(function() {

	// LEFT BOX
	$('#illustration').hover(function() {
		$(this).children('span').fadeIn(500);
		//$(this).children('span').animate({ 'background' : 'url(../../!img/leftBoxOn.gif)' });
	}, function() {
		$(this).children('span').fadeOut(500);
		//$(this).children('span').removeClass('illutrationHover')
		//$(this).children('span').animate({ 'background' : 'url(../../!img/leftBoxOff.gif)' });
	});
	
	// RIGHT BOX
	$('#comix').hover(function() {
		$(this).children('span').animate({ 'backgroundPositionX' : 0, 'backgroundPositionY' : 0 });
	}, function() {
		$(this).children('span').animate({ 'backgroundPositionX' : 33, 'backgroundPositionY' : -24  });	
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