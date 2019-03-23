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
	var c = "Wisdom";
	var t = document.getElementById("out1");
	var p = document.getElementById("p1");
	var x = document.getElementById("code1");
	var l = document.getElementById("loc1");
	
	var cl = document.getElementById("clue1");
	
	if (p.value == c || h >= i){
		t.innerHTML = "One was the Dean of Women and a Professor of Spanish.";
		x.innerHTML = "UF FRIRA FVK FRIRA";
		l.innerHTML = "38.035923, -78.51315";
		//alert(l);
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
}
function checkTwo(){
	var i = 2;
	var c = "Force";
	var t = document.getElementById("out2");
	var p = document.getElementById("p2");
	var x = document.getElementById("code2");
	var l = document.getElementById("loc2");
	
	var cl = document.getElementById("clue2");
	var v = document.getElementById("pic2");
	
	if (p.value == c || h >= i){
		t.innerHTML = "One was a Professor of Physics, heading the department.";
		x.innerHTML = "J JAX ZFMR";
		l.innerHTML = "In the place you call home, the deepest point behind the furthest door.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
		v.style.display = "block";
	}
	
}
function checkThree(){
	var i = 3;
	var c = "Strength";
	var t = document.getElementById("out3");
	var p = document.getElementById("p3");
	var x = document.getElementById("code3");
	var l = document.getElementById("loc3");
	
	var cl = document.getElementById("clue3");
	
	if (p.value == c || h >= i){
		t.innerHTML = "One was an educator, known for working to open colleges to all.";
		x.innerHTML = "ABBBAABBABAABAA ABBABABAAAABBABAABAA BBAABAABAABAAABABBBA BAABAABAAA";
		l.innerHTML = "At home, the highest door one cannot enter.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
}
function checkFour(){
	var i = 4;
	var c = "Beauty";
	var t = document.getElementById("out4");
	var p = document.getElementById("p4");
	var x = document.getElementById("code4");
	var l = document.getElementById("loc4");
	
	var cl = document.getElementById("clue4");
	
	if (p.value == c || h >= i){
		t.innerHTML = "And the last was from far away and an accomplished linguist.";
		l.innerHTML = "Page 7.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
	
	
}
