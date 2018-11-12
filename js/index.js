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
		renderLatestNews($(this).attr("data-type"));
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
	renderLatestNews("all");

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

function initActivity(){
	var arrayActivity=[];
	//初始化活動訊息
	for(let i=0; i<7; i++){
		switch(i){
			case 0:
			var objActivity={
				id: (i+1),
				type: "活動資訊",
				date: "2018/12/09",
				title: "參與孫逸仙杯國際武術大賽(台中大甲高中)",
				content: ""
			}
			arrayActivity.push(objActivity);
			break;

			case 1:
			var objActivity={
				id: (i+1),
				type: "活動資訊",
			date: "2018/12/~~",
				title: "參與中華陳氏太極拳協會年度大會(台北)",
				content: ""
			}
			arrayActivity.push(objActivity);
			break;

			case 2:
			var objActivity={
				id: (i+1),
				type: "活動資訊",
				date: "2018/11/18",
				title: "東海大學太極拳社期中訓",
				content: ""
			}
			arrayActivity.push(objActivity);
			break;

			case 3:
			var objActivity={
				id: (i+1),
				type: "活動資訊",
				date: "2018/12/~~",
				title: "員林樂活社大成果展",
				content: ""
			}
			arrayActivity.push(objActivity);
			break;

			case 4:
			var objActivity={
				id: (i+1),
				type: "活動資訊",
				date: "2019/01/13",
				title: "溪頭打拳去",
				content: ""
			}
			arrayActivity.push(objActivity);
			break;

			case 5:
			var objActivity={
				id: (i+1),
				type: "活動資訊",
				date: "2019/04/~~",
				title: "南投縣陳氏太極拳協會會員大會",
				content: ""
			}
			arrayActivity.push(objActivity);
			break;

			case 6:
			var objActivity={
				id: (i+1),
				type: "活動資訊",
				date: "2019/01~12",
				title: "東海大學太極拳社期中訓、期末成果展",
				content: ""
			}
			arrayActivity.push(objActivity);
			break;
		}
	}

	return arrayActivity;
}

function initArticle(){
	var arrayArticle=[];
	for(let i=0; i<1; i++){
		switch(i){
			case 0:
			objArticle={
				id: (i+1+10),
				type: "文章更新",
				date: "2018/01/01",
				title: "文章上架",
				content: "目前網站收錄的文章為：正負之間、漫漫太極路。詳見文章專區。若對江老師其他文章有興趣的話，亦可至兩儀小學堂。網址：<a href=\"http://tgchiang.pixnet.net/blog\" target=\"_blank\">http://tgchiang.pixnet.net/blog</a>"
			}
			arrayArticle.push(objArticle);
			break;
		}
	}

	return arrayArticle;
}

function initCourse(){
	var arrayCourse=[];
	let content="";
	content+="<ol>";
	content+="<li>延續2018年現有課程、時間、地點不變，唯教授內容稍做調整</li>";
	content+="<li>每週五晚間員林樂活社大之課程要超過最低15人報名，才能繼續開課</li>";
	content+="<li>2019年預計新開課程：";
	content+="<ul>";
	content+="<li>地點：南投草屯國小貓羅溪社大<br/>時間：每週二 18:30~21:20<br/>授課大綱：陳氏太極拳老架前五勢之正確打法，兼講王宗岳之太極拳論及基本推手</li>";
	content+="<li>地點：鹿頂苑內兩儀學院<br/>時間：第一、三週六 14:30~17:00<br/>授課內容：精進班<br/>授課對象：練拳積極亟須快速提升功力者<br/>參與資格：第一年平均日練拳六趟以上者、第二年平均日練拳九趟以上者、第三年平均日練拳十二趟以上者<br/>授課內容：針對個別問題精修及加強推手運用</li>";
	content+="<li>地點：鹿頂苑內兩儀學院<br/>時間：第四週六 14:30~17:00<br/>授課內容：優質推手<br/>參加對象：喜好推手者均可自由參加<br/>推廣精神：嘗試推展「優質推手」，改變現有「劣質」推手文化。<br/>註：非太極拳架的動作及本質所用的方式推法即為「劣質」推手</li>";
	content+="</ul>";
	content+="</li>";
	content+="</ol>";
	for(let i=0; i<15; i++){
		switch(i){
			case 0:
			objCourse={
				id: (i+1+20),
				type: "開課訊息",
				date: "2018/01~12 ",
				title: "東海大學溜冰場-砲捶細講",
				content: "每週三 06:00 ~ 08:00 AM(不含第二週)"
			}
			arrayCourse.push(objCourse);
			break;

			case 1:
			objCourse={
				id: (i+1+20),
				type: "開課訊息",
				date: "2018/01~12",
				title: "員林樂活社大員農籃球場-陳清萍小架",
				content: "每週五 19:30 ~ 21:30"
			}
			arrayCourse.push(objCourse);
			break;

			case 2:
			objCourse={
				id: (i+1+20),
				type: "開課訊息",
				date: "2018/01~12",
				title: "鹿頂苑內兩儀學院(台中市沙鹿區西屯路9之1號)-陳有本新架",
				content: "每週六 07:30 ~ 09:30(不含第二週)"
			}
			arrayCourse.push(objCourse);
			break;

			case 3:
			objCourse={
				id: (i+1+20),
				type: "開課訊息",
				date: "2018/01~12",
				title: "鹿頂苑內兩儀學院(台中市沙鹿區西屯路9之1號)-老架個別指導及修正含推手運用",
				content: "每週五 14:30 ~ 17:00(不含第二週)"
			}
			arrayCourse.push(objCourse);
			break;

			case 4:
			objCourse={
				id: (i+1+20),
				type: "開課訊息",
				date: "2018/01~12",
				title: "彰化市南郭國小-推手訓練",
				content: "每週日 06:45 ~ 08:45 AM(不含第二週)"
			}
			arrayCourse.push(objCourse);
			break;

			case 5:
			objCourse={
				id: (i+1+20),
				type: "開課訊息",
				date: "2018/01~12",
				title: "鹿頂苑內兩儀學院(台中市沙鹿區西屯路9之1號)-骨架歪斜修正與軟組織糾結鬆解",
				content: "每週六 09:45 ~ 11:45 AM(不含第二週)"
			}
			arrayCourse.push(objCourse);
			break;

			case 6:
			objCourse={
				id: (i+1+20),
				type: "開課訊息",
				date: "2019/01~12",
				title: "2019預計課程",
				content: content
			}
			arrayCourse.push(objCourse);
			break;
		}
	}

	return arrayCourse;
}

function renderLatestNews(type){
	var arrayActivity = initActivity();
	var arrayArticle = initArticle();
	var arrayCourse = initCourse();

	let li="";
	let div="";
	if(type=="all"){
		$.each(arrayActivity, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			if(array.content==""){
				li+=array.title;
			}
			else{
				li+="<a class=\"inline\" href=\"#inline_content"+(array.id)+"\">"+array.title+"</a>";
			}
			
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(array.id)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
		$.each(arrayArticle, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			if(array.content==""){
				li+=array.title;
			}
			else{
				li+="<a class=\"inline\" href=\"#inline_content"+(array.id)+"\">"+array.title+"</a>";
			}
			
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(array.id)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
		$.each(arrayCourse, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			if(array.content==""){
				li+=array.title;
			}
			else{
				li+="<a class=\"inline\" href=\"#inline_content"+(array.id)+"\">"+array.title+"</a>";
			}
			
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(array.id)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
	}
	else{
		//活動
		var filterActivity = arrayActivity.filter(function(item, index, array){
			return item.type==type;
		});
		$.each(filterActivity, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			if(array.content==""){
				li+=array.title;
			}
			else{
				li+="<a class=\"inline\" href=\"#inline_content"+(array.id)+"\">"+array.title+"</a>";
			}
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(array.id)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
		//文章
		var filterArticle = arrayArticle.filter(function(item, index, array){
			return item.type==type;
		});
		$.each(filterArticle, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			if(array.content==""){
				li+=array.title;
			}
			else{
				li+="<a class=\"inline\" href=\"#inline_content"+(array.id)+"\">"+array.title+"</a>";
			}
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(array.id)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
		//課程
		var filterCourse = arrayCourse.filter(function(item, index, array){
			return item.type==type;
		});
		$.each(filterCourse, function(index, array){
			li+="<li>";
			li+="<div class=\"newsDate\">";
			li+=array.date;
			li+="</div>";
			li+="<div class=\"newsType\">";
			li+=array.type;
			li+="</div>";
			li+="<div>";
			if(array.content==""){
				li+=array.title;
			}
			else{
				li+="<a class=\"inline\" href=\"#inline_content"+(array.id)+"\">"+array.title+"</a>";
			}
			li+="</div>";
			li+="</li>";

			div+="<div id=\"inline_content"+(array.id)+"\" style='padding:10px; background:#fff;'>";
			div+=array.content;
			div+="</div>";
		});
	}
	$(".newsContent").html(li);
	$("#newsContent2").html(div);
}

function getNews(){
	var arrayNews=[];
	var arrayId=[1, 2, 3];
	var arrayDate=["2018/09/10", "2018/09/11", "2018/09/12"];
	var arrayType=["文章更新", "活動資訊", "開課訊息"];
	var arrayTitle=["文章上架", "2018年活動訊息", "2018年開課訊息"];
	var arrayContent=[
		"目前網站收錄的文章為：正負之間、漫漫太極路。詳見文章專區。若對江老師其他文章有興趣的話，亦可至兩儀小學堂。網址：<a href=\"http://tgchiang.pixnet.net/blog\" target=\"_blank\">http://tgchiang.pixnet.net/blog</a>",
		"2018年相關活動如下：<br/><ol><li>2018/12/09 台中大甲高中 </li></ol>",
		"2018年開課資訊如下：<ol><li>授課地點:台中<br/>授課時間:每週六 07:30~09:30<br/>教授內容:新架</li><li>授課地點:彰化<br/>授課時間:每週日 07:30~09:30<br/>教授內容:老架</li></ol>"
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