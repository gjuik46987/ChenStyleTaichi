$(function(){
	/*初始化*/
	init();
	
	//捲軸事件
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if(y >= 10){
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
	if($("#wrapper").width()<$("#wrapper").height()){
		$("#bannerVideo").attr("poster", "images/banner2.jpg");
	}
	/*init colorbox */
	$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
}

function isMobile() {
	try{ 
		document.createEvent("TouchEvent"); return true; 
	}
	catch(e){ 
		return false;
	}
}
