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
	renderBook();
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

function initBookStore(bookName){
	/*建構書局*/
	var bookStore=[];
	var book1={
		title: "正負之間",
		article: [
			{
				content: "我們練太極拳的人，在陰陽並濟的拳路上前進，一輩子就在陰陽之間摸索、在正負之間掙扎，終究接近臨界點“零”的空、虛、無之圓融妙境。",
				page: 1
			},
			{
				content: "就我本身而言，開始時不太在意，以為陰陽就是一種理論。黑白、晝夜、上下、盈虧等，凡是有對立性的事或物，掛以陰陽之名，無一不可，因為“想當然爾”，所以自以為明白陰陽道理，也就不經意的將“陰陽道理”拋諸腦後。",
				page: 2
			},
			{
				content: "後來練拳經年，慢慢發覺，陰陽之理，不止於我當初所認知的膚淺、表層的領域而已，這並不是說陰陽道理是錯的，而是當初我自以為知道的陰陽，在日後看來，它是空洞不實的，我並沒有在行拳走架中去實踐。這也就意味著，我只是掛羊頭賣狗肉，打著練太極拳的名號，卻沒真正落實太極陰陽大道。",
				page: 3
			},
			{
				content: "就因為知道必須在肢體動作中落實陰陽之道，所以我堅信一定要勤練，唯有勤練才能在拳藝上有所精進。也就是因為勤練，才漸漸把實際肢體的運作練出陰陽道理來，就是在行拳走架，一手、一足，都不悖陰陽之理，換另外一個角度來說就是把每一吋肌膚都練出陰陽至理來。",
				page: 4
			},
			{
				content: "但是“知易行難”，這一階段的磨練需要很長的時間，一般人往往都在這一段時間內，見異思遷而亂了陣腳。依  恩師《陳氏太極拳五層功夫》一文中，在第二層後半段到第三第四層，都是屬於這一階段精雕細琢期間，大約要七年〈若沒依照文中要求，每日練拳十至十五趟，那鐵定要延長許久〉。像我就是沒有依教奉行，所以練拳已經二十幾年，自知只實踐了一小部分的陰陽道理，尚覺大部份未能落實。我自己常常覺得資質魯鈍，連一點點小小的勁道，都要琢磨兩三年才稍有領悟。所以在師兄弟討論練拳心得時，我是聽得多，發表得少，我總覺得師兄弟的境界都很高，我是不易辦到的，甚至連我自己的學生與人言談之間那種“震退對手數丈”的功力，我真是又驚訝又讚嘆，自覺不如啊！",
				page: 5
			},
			{
				content: "熬過十幾年，對於肢體陰陽漸漸熟知，內在“覺受”逐漸鮮明，更能進一步體驗“多練練”的重要性，多說無用，常常虛心自省，不順遂處先於腰腿求之；腰腿求之不得，再於內氣求之；內氣求之不得，再於“內外合度”上推求，哪裡多了？哪裡少了？是否能行之“中道”？真的再不行，最後只有請出  恩師《錄影帶》，反覆的在自覺不得勁處多看幾遍，或許能看出端倪。經一段時間的“默識揣摩”，自能明白其中道理，也漸漸體悟為什麼在拳路上  恩師是那樣打的，自己過去自以為高明之處，原來是自己未達那種火侯，所以做不到，更別說要領會出其中奧秘。凡此種種只能用一句“如人飲水，冷暖自知”形容。",
				page: 6
			},
			{
				content: "“立身中正、呼吸自然、用力勿過”是  先師告誡諸弟子練拳之三大原則，終身奉行，絕無弊病。而事實上我也認為，這也是拳藝的高超境界，因為這些都符合“中道”之原則，也就是正負之間的臨界點。我們在拳藝未精之前，舉手投足之間非正〈過〉及負〈不及〉，所以練拳之時，仍免不了歪斜、凹凸，或是偏重於局部的表現，而忽略了整體的協調；推手時也免不了頂、扁、丟、抗；但我堅信只要恪守  恩師的教誨，把握每一天，老實練拳，往正負之間的臨界點邁進，終必有成，若是為求速效而夾雜貪多，背離了正道，反而浪費時間，所謂：「差之毫釐，失之千里」，你我可不慎乎？",
				page: 7
			},
			{
				content: "“最後我要套用幾句話與大家共勉，並期指正：<br/>“意”太輕不行、太重不行，總在有意無意、輕重之間。<br/>“氣”太浮不行、太沉不行，總在有氣無氣，浮沉之間。<br/>“形”太剛不行、太柔不行，總在有形無形，輕柔之間。",
				page: 8
			}
		]
	}
	bookStore.push(book1);

	/*篩選書*/
	var filterBook = bookStore.filter(function(item, index, array){
		return item.title == bookName;       // 取得相同書名
	});

	return filterBook;
}

function renderBook(){
	var book = initBookStore("正負之間");
	var render = "";
	/*先繪製封面*/
	render+="<div data-background-image=\"\" class=\"\">";
	render+="<div class=\"fb5-cont-page-book\">";
	render+="<div class=\"fb5-page-book\">";
	render+="<div id=\"fb5-cover\">";
	render+="<ul>";
	render+="<li><a href=\"javascript:void(0)\"><img data-src=\"images/1531362397426.jpg\"></a></li>";
	render+="<li><a href=\"javascript:void(0)\"><img data-src=\"images/masterImg.jpg\"></a></li>";
	render+="<li><a href=\"javascript:void(0)\"><img data-src=\"images/masterImg2.jpg\"></a></li>";
	render+="</ul>";
	render+="<img data-src=\"images/logo2.png\" id=\"fb5-logo-cover\" src=\"images/logo2.png\">";
	render+="</div>";
	render+="</div>";
	render+="<div class=\"fb5-meta\">";
	render+="<span class=\"fb5-description\"></span>";
	render+="<span class=\"fb5-num\"></span>";
	render+="</div>";
	render+="</div>";
	render+="</div>";
	/*繪製內容*/
	$.each(book, function(index, array){
		$.each(array.article, function(index2, array2){
			render+="<div data-background-image=\"\" class=\"\">";
			render+="<div class=\"fb5-cont-page-book\">";
			render+="<div class=\"fb5-page-book\">";
			render+="<h1>"+array.title+"</h1>";
			render+="<p>"+array2.content+"</p>";
			render+="</div>";    
			render+="<div class=\"fb5-meta\">";
			render+="<span class=\"fb5-num\">"+(index+2)+"</span>";
			render+="<span class=\"fb5-description\">Publish 2016</span>";
			render+="</div>";
			render+="</div>";
			render+="</div>";
		});
	});
	$("#fb5-book").html(render);
}