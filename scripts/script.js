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
	var c = "leadership";

	var p = document.getElementById("p1").value.toLowerCase();

	var cl = document.getElementById("code1");

	if (p == c || h >= i){
		//alert(l);
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
}
function checkTwo(){
	var i = 2;
	var c = "understanding";

	var p = document.getElementById("p2").value.toLowerCase();

	var x = document.getElementById("code2");

	var cl = document.getElementById("clue2");

	if (p == c || h >= i){
		x.innerHTML = "AMXL MX FIMRK JEPP, RSA ASYPH FI E KVIEX XMQI JSV E FEPP.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}

}
function checkThree(){
	var i = 3;
	var c = "generosity";

	var p = document.getElementById("p3").value.toLowerCase();
	var x = document.getElementById("code3");

	var cl = document.getElementById("clue3");

	if (p == c || h >= i){
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
		x.style.display = "block";
	}
}
function checkFour(){
	var i = 4;
	var c = "community";
	var p = document.getElementById("p4").value.toLowerCase();
	var x = document.getElementById("code4");
	var cl = document.getElementById("clue4");

	if (p == c || h >= i){
		x.innerHTML = "CIU FLFFT XFGR"
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
		cl.style.display = "block";
	}
}
function fcCheck(){
	var i = 5;
	var tc1 = document.getElementById("fc1").value.toLowerCase();
	var tc2 = document.getElementById("fc2").value.toLowerCase();
	var tc3 = document.getElementById("fc3").value.toLowerCase();
	var tc4 = document.getElementById("fc4").value.toLowerCase();

	console.log(tc1);

	var ft = document.getElementById("fcCloser");

	if (h == i || (tc1 == "food" && (tc2 == "community" || tc2.includes("friend") || tc2 == "strength") && tc3 == "wisdom" && (tc4 == "peace" || tc4 == "unity"))){
		ft.innerHTML = "Congrats on making it this far! Email <a href='mailto:ursa@ursamajorsociety.org'>ursa@ursamajorsociety.org</a> with the code 'Mary Munford' to receive your initiation information.";
		if (h < i){
			document.cookie = "highestsolved="+i+";";
		}
	}
	else{
		console.log("incorrect");
	}
}
