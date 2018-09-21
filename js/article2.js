$(function(){
	/*翻書初始化*/
	init();
	
	//捲軸事件
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if(y >= 10 && y<=300){
			$(".logo img").show();
		}
		else {
			$(".logo img").hide();
		}
	});

	//卷軸置頂動畫
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
});

function init(){
	$(".logo img").hide();
	$("#loading").hide();

	/*CONFIGURATION FLIPBOOK*/
	jQuery('#fb5').data('config',
    {
		"page_width":"550",
		"page_height":"715",
		"email_form":"office@somedomain.com",
		"zoom_double_click":"1",
		"zoom_step":"0.06",
		"double_click_enabled":"true",
		"tooltip_visible":"true",
		"toolbar_visible":"true",
		"gotopage_width":"30",
		"deeplinking_enabled":"true",
		"rtl":"false",
		'full_area':'false',
		'lazy_loading_thumbs':'false',
		'lazy_loading_pages':'false'
    })
}

function isMobile() {
	try{ 
		document.createEvent("TouchEvent"); return true; 
	}
	catch(e){ 
		return false;
	}
}