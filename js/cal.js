var exp='', number, decimel, equal, operator, allowSR=true;
var textview= document.forms['myform']['textview'];

function insertNum(num){
	
	if (equal){
		exp=num;
		textview.value=exp;
		number=true;
		equal=false;
	}
	else{
		exp=textview.value+num;
		textview.value=exp;
		number=true;
	}
	if(operator) decimel=false;
	SR('a');
}


function insertOpt(op){
	textview.value = exp + op;
	operator=true;
	equal=false;
	allowSR=false;
	SR('a');
}

function insertDec(){
	
	if(number && !decimel){
		textview.value = exp +'.';
		decimel=true;
		operator=false;
	}
	
}
function equalTo(){
	if(exp){
		exp=eval(exp);
		textview.value=exp;
		equal=true;
		decimel=false;
		number=false;
		allowSR=transient;
		SR('a');
	}
}

function clean(){
	exp='';
	textview.value = exp;
	decimel=false
}
function back(){
	
	exp=textview.value;
	exp=exp.substring(0, exp.length-1);
	textview.value = exp;
}

function SR(v){
	if(v=='r'){
		exp=Math.sqrt(exp);
		textview.value = exp;
	}
	else if(v=='s'){
		exp=exp*exp;
		textview.value = exp;
	}
	else if(v=='si'){
		exp=Math.sin(exp); 
		textview.value = exp;
	}
	else if(v=='a' && allowSR){
		document.getElementById('r').disabled =false;
		document.getElementById('s').disabled =false;
	}
	else if(!allowSR){
		document.getElementById('r').disabled =true;
		document.getElementById('s').disabled =true;	
	}
}

 
 