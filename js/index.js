/*全域變數*/
var timeCount=0;
$(function(){
	/*一開始的動作*/
	/*
	1.隱藏LOGO
	2.三秒後播放影片跟增加字幕
	3.十秒後隱藏字幕
	*/
	init();
	

	/*事件區*/
	$(".stick").sticky({ topSpacing: 0 });
	
	//捲軸事件
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if(y >= 10 && y<=300){
			$(".logo img").show();
		}
		else if (y > 300) {
			$("#bannerVideo").get(0).pause();
			removeSubTitle();
		} 
		else {
			$("#bannerVideo").get(0).play();
			$(".logo img").hide();
			$(".btn-mobile").css("color", "white");
		}
		if($("#wrapper").width()<$("#wrapper").height()){
			$("#bannerVideo").attr("poster", "images/banner2.jpg");
		}
	});
	
	//卷軸置頂動畫
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});

	//選單動作
	$(".newsMenu li").click(function(){
		$(".newsMenu li").removeAttr("style");
		$(this).css("color", "#E29063").css("border-bottom", "1px solid #E29063");
		renderNews($(this).attr("data-type"));
		/*colorbox */
		$(".inline").colorbox({inline:true, width:"70%"});
	});
});

function init(){
	
	
	$(".logo img").hide();

	setInterval(function(){ 
		timeCount++;
		if(timeCount%10==0){
			removeSubTitle();
		}
		if(timeCount/3==1){
			$("#bannerVideo").get(0).load();
			$("#bannerVideo").get(0).play();
			if($("#bannerVideo").get(0).played){
				addSubTitle();
			}
		}
	}, 1000);
	
	if(isMobile()){
		$("#wrapper").css("height","auto");
	}

	if($("#wrapper").width()<$("#wrapper").height()){
		$("#bannerVideo").attr("poster", "images/banner2.jpg");
	}

	//最新消息選單預設
	$(".newsMenu li").eq(0).css("color", "#E29063").css("border-bottom", "1px solid #E29063");

	//印出全部最新消息
	renderNews("all");

	/*colorbox */
	$(".inline").colorbox({inline:true, width:"70%"});
}
function addSubTitle(){
	$(".display-table").fadeIn(3000);
}
function removeSubTitle(){
	$(".display-table").fadeOut(3000);
}
function removeSubTitleQuickly(){
	$(".display-table").fadeOut(10);
}
function isMobile() {
	try{ 
		document.createEvent("TouchEvent"); return true; 
	}
	catch(e){ 
		return false;
	}
}
function getNews(){
	var arrayNews=[];
	var arrayId=[1, 2, 3];
	var arrayDate=["2018/09/10", "2018/09/11", "2018/09/12"];
	var arrayType=["文章更新", "活動資訊", "開課訊息"];
	var arrayTitle=["標題1", "標題2", "標題3"];
	var arrayContent=[
		"這是第一則新聞的內容",
		"這是第二則新聞的內容",
		"這是第三則新聞的內容"
	]
	for(var i=0; i<3; i++){
		var objectNews={
			id: arrayId[i],
			date: arrayDate[i],
			type: arrayType[i],
			title: arrayTitle[i],
			content: arrayContent[i]
		}
		arrayNews.push(objectNews);
	}
	return arrayNews;
}
function renderNews(newsType){
	arrayNews = getNews();
	let li="";
	let div="";
	if(newsType=="all"){
		$.each(arrayNews, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			li+="<a class=\"inline\" href=\"#inline_content"+(index+1)+"\">"+array.title+"</a>";
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(index+1)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
	}
	else{
		filterNews = arrayNews.filter(function(item, index, array){
			return item.type==newsType;
		});
		$.each(filterNews, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			li+="<a class=\"inline\" href=\"#inline_content"+(index+1)+"\">"+array.title+"</a>";
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(index+1)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
	}
	$(".newsContent").html(li);
	$("#newsContent2").html(div);
}