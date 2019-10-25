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
	fcCheck();
}
function checkOne(){
	var i = 1;
	var c = "Wisdom";

	var p = document.getElementById("p1");

	var cl = document.getElementById("code1");

	if (p.value == c || h >= i){
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

	var p = document.getElementById("p2");

	var x = document.getElementById("code2");

	var cl = document.getElementById("clue2");

	if (p.value == c || h >= i){
		x.innerHTML = "AMXL MX FIMRK JEPP, RSA ASYPH FI E KVIEX XMQI JSV E FEPP.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}

}
function checkThree(){
	var i = 3;
	var c = "Strength";

	var p = document.getElementById("p3");
	var x = document.getElementById("code3");

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
		l.style.display = "block";
	}
}
function checkFive(){
	var i = 5;
	var c = "Beauty";
	var t = document.getElementById("out5");
	var p = document.getElementById("p5");
	var x = document.getElementById("code5");
	var l = document.getElementById("loc5");

	var cl = document.getElementById("clue5");

	if (p.value == c || h >= i){
		t.innerHTML = "And the last was from far away and an accomplished linguist.";
		l.innerHTML = "Page 7.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
}
function fcCheck(){
	var i = 6;
	var tc1 = document.getElementById("fc1");
	var tc2 = document.getElementById("fc2");
	var tc3 = document.getElementById("fc3");
	var tc4 = document.getElementById("fc4");

	var ft = document.getElementById("fcCloser");

	var time = "10:13 PM";

	var day = "Monday";

	if (h == i || (tc1.value == "Wisdom" && tc2.value == "Force" && tc3.value == "Strength" && tc4.value == "Beauty")){
		ft.innerHTML = "Congrats on making it this far! Email <a href='ursa@ursamajorsociety.org'>ursa@ursamajorsociety.org</a> with the code 'Mary Munford' to receive your initiation information.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
	}
	else{
		console.log("incorrect");
	}
}
