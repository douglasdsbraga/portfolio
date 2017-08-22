IncludeJavaScript("/pages/#CODE#/images/scripts/jquery.ui.totop.js");
IncludeJavaScript("/pages/#CODE#/images/scripts/easing.js");
IncludeJavaScript("/pages/#CODE#/images/scripts/jquery.placeholder.min.js");

jQuery(document).ready(function() {
	
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
	
	// target blank
	jQuery("a[rel*=external]").attr('target','_blank');
	
	jQuery('input[placeholder], textarea[placeholder]').placeholder();

	jQuery("nav.responsivo .btn_menu").click(function(){
		jQuery("nav.responsivo").toggleClass("open_menu");
	});
			
});
