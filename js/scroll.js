$(document).ready(function(){
	$('a[href*=#]').click(function() {
		var name = $(this).attr('href');
		var no = new Array ();
		var total = no.length;
		var velocidad = 1200;

		for (i=0;i<=total;i++) {
			if(no[i] == name){
				return false;
			}
		}

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length && target || $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var targetOffset = target.offset().top - 150; // Restamos 150 para compensar el padding;
				debugger;
				$('html,body').animate({scrollTop: targetOffset}, velocidad);
				return false;
			}
		}
	});
});
