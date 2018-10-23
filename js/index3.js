	var fir = document.getElementById("fir");
	var box = document.getElementById("box");
	
		fir.onkeyup = function(){
			box.style.display = "block"
			var str = this.value;
			var oScript = document.createElement("script");
			document.body.appendChild(oScript);
			oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+str+"&cb=fn";
		}
		
		function fn(msg){
			var arr = msg.s;
			var str = "";
			for(var i= 0;i<arr.length;i++){
				str += `<li>${arr[i]}</li>`;
			}
			box.innerHTML = str;
		}
		box.onmouseover = function(e){
			var e = e||event;
			var target = e.target || e.srcElement;
			if (target.nodeName == "LI") {
				target.style.background = "#ccc";
			}
		}
		box.onmouseout = function(e){
			var e = e || event;
			var target = e.target || e.srcElement;
			if (target.nodeName == "LI") {
				target.style.background = "";
				
			}
			
		}
		box.onclick = function(e){
			var e = e ||event;
			var target = e.target || e.srcElement;
			if (target.nodeName == "LI") {
				fir.value = target.innerHTML;
				box.style.display = "none";
			}
		}
		document.onclick = function(){
			box.style.display = "none";
		}
	

/*banner*/
var banner = (function(){
	var timer = null;
	var index = 0;
	var dots = $id("page").children;
	var uList = $id("bannerW").children;
	timer = setInterval(autoPlay,1500)
	function autoPlay(){
		index++;
		for(var i = 0;i<dots.length;i++){
			dots[i].className = "";
			move(uList[i],{"opacity":0});
		}
		if(index == dots.length){
			index=0;
		}
		dots[index].className = "current";
		move(uList[index],{"opacity":100})
	}
	$id("bannerF").onmouseover = function(){
		clearInterval(timer);
	}
	$id("bannerF").onmouseout = function(){
		timer = setInterval(autoPlay,1500)
	}
	for(let i =0;i<dots.length;i++){
		dots[i].onmouseover = function(){
			index = i - 1;
			autoPlay();
		}
	}
	
	$id("toLeft").onmouseover = function(){
		move($id("toLeft"),{"opacity":100})
	}
	$id("toLeft").onmouseout = function(){
		move($id("toLeft"),{"opacity":0})
	}
	$id("toRight").onmouseover = function(){
		move($id("toRight"),{"opacity":100})
	}
	$id("toRight").onmouseout = function(){
		move($id("toRight"),{"opacity":0})
	}
	
	$id("toLeft").onclick = function(){
		
 		for(var i = 0; i < dots.length; i++){
 			dots[i].className = "";
 		}
 		move(uList[index],{"opacity":0});
 		index--;
 		if(index == -1){
 			index = dots.length-1;
 		}
 		dots[index].className = "current";
 		//move(uList[index+1],{"opacity":0});
 		move(uList[index],{"opacity":100});
 	}
	$id("toRight").onclick = function(){
 		for(var i = 0; i < dots.length; i++){
 			dots[i].className = "";
 		}	
 		move(uList[index],{"opacity":0});
 		index++;
 		if(index == dots.length){
 			index = 0;
 		}
 		
 		dots[index].className = "current";
 		//move(uList[index-1],{"opacity":0});
 		move(uList[index],{"opacity":100});
 	}
})()
