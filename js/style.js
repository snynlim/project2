$(function(){
	var t=0; // 윈도우 상단 좌표입니다.
	var n=0; // 카테고리 번호 변수입니다.
	var firstFlag=false; // 초기 스크롤을 관리하는 변수입니다.

	setTimeout(function(){
		// console.log("한 번 실행");
		$("html").animate({scrollTop:0}, 800, function(){
			firstFlag=true;
			$(window).trigger("scroll");
		});
	}, 10);

	$(window).scroll(function(){
		if(firstFlag == false){ //더 이상 올라가지 않습니다. 막습니다. 방어코드입니다.
			return;
		}

		t=$(window).scrollTop();
		// console.log(t);
		if(t > 80){
			$(".fixed_nav").addClass("show"); //top 0
		}
		else{
			$(".fixed_nav").removeClass("show");
		}



		if(t < $("#services").offset().top-200){
			n=0;
		}
		else if(t < $("#portfolio").offset().top-200) {
			n=1;
		}
		else if(t < $("#about").offset().top-200) {
			n=2;
		}
		else if(t < $("#team").offset().top-200) {
			n=3;
		}
		else if(t < $("#contact").offset().top-200){
			n=4;
			if(t == $(document).height()- $(window).height()){
				n=5;
			}
		}
		else{
			n=5;
		}
		// console.log(n);

		// if(n == 0){
		// 	$("header").addClass("active");
		// 	$("section").removeClass("active");
		// }
		// else{
		// 	$("header").removeClass("active");
		// 	$("section").removeClass("active");
		// 	$("section").eq(n-1).addClass("active");
		// }




		$("#header").removeClass("active");
		$("header").eq(n).addClass("active");

		$(".navi li").removeClass("active");
		$(".navi li").eq(n).addClass("active");

		$(".fixed_nav li").removeClass("active");
		$(".fixed_nav li").eq(n).addClass("active");

		$("section").eq(n).addClass("active");
	});
	$(window).trigger("scroll")

	var targety=0;
	$("#GNB li, .fixed_nav li, .navi li").click(function(e){
		e.preventDefault();

		n=$(this).index();

		targety=$("section").eq(n).offset().top;
		console.log(targety);
		$("html").animate({"scrollTop": targety}, 800);
	});



	var clickN=0;
	var posY=0;

	// navi 클릭관련된 제이쿼리
	$(".navi li").click(function(e){
		if($("html").is(":animated")) return;

		e.preventDefault();
		clickN=$(this).index();

		if(clickN == 0){
			posY=0;
		}
		else{
			posY=$("section").eq(clickN-1).offset().top;
		}
		// console.log("posY : "+posY);

		$("html").animate({scrollTop:posY}, 400);
	});


});
