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
	var shop = (function(){
		var gwc = document.getElementById("gwc");
		var gwcF = document.getElementById("gwcF");
		function move(){
			gwc.onmouseover = function(){
				gwcF.style.display = "block";
			}
			gwc.onmouseout = function(){
				gwcF.style.display = "none";
			}
		}
		return {
			init:function(){
				move();
			}
		}
	})()
	shop.init();
