//alert("For official use only.");
var h;
function readCookie(){
	var c = document.cookie;
	if (c == ""){
		document.cookie = "highestsolved=0";
		h = 0;
		return;
	}
	var l = c[c.length-1];
	var li = parseInt(l, 10);
	h = li;
}
function checkAll(){
	checkOne();
	checkTwo();
	checkThree();
	checkFour();
}
function checkOne(){
	var i = 1;
	var c = "password";
	var t = document.getElementById("out1");
	var p = document.getElementById("p1");
	
	var v = document.getElementById("pic1");
	var cl = document.getElementById("clue1");
	
	if (p.value == c || h >= i){
		t.innerHTML = "Correct.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
		v.style.display = "block";
	}
}
function checkTwo(){
	var i = 2;
	var c = "password";
	var t = document.getElementById("out2");
	var p = document.getElementById("p2");
	
	var cl = document.getElementById("clue2");
	
	if (p.value == c || h >= i){
		t.innerHTML = "Correct.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
	
}
function checkThree(){
	var i = 3;
	var c = "password";
	var t = document.getElementById("out3");
	var p = document.getElementById("p3");
	
	var cl = document.getElementById("clue3");
	
	if (p.value == c || h >= i){
		t.innerHTML = "Correct.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
}
function checkFour(){
	var i = 4;
	var c = "password";
	var t = document.getElementById("out4");
	var p = document.getElementById("p4");
	
	var cl = document.getElementById("clue4");
	
	if (p.value == c || h >= i){
		t.innerHTML = "Correct.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
	
	
}
