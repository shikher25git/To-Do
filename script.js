var neww=document.getElementById("new");
var btn=document.getElementById("btn");
var inp=document.getElementById("inp");
var list=document.getElementById("lii");
storage=window.localStorage;

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : {};

storage.setItem('items', JSON.stringify(itemsArray));
storage.setItem('max',Object.keys(itemsArray).length);
const data = JSON.parse(localStorage.getItem('items'));

inp.addEventListener("keyup",function(event){
	if(event.keyCode===13){
		btn.click();
	}
})

function display(){
	while( list.firstChild ){
  		list.removeChild( list.firstChild );
	}
	var dataa=JSON.parse(storage.getItem('items'));
	var key=Object.keys(dataa);
	var len=Object.keys(dataa).length;
	for(var i=0;i<len;i++){
		var node=document.createElement("LI");
		var txtnode=document.createTextNode(dataa[key[i]]);
		node.appendChild(txtnode)
		list.appendChild(node);
	}
}

display();

function add(){
	neww.style.display="block";
	btn.innerHTML="Add"
	inp.placeholder="Enter item";
	btn.setAttribute("onclick","aadd()");
	return 0;
}

function del(){
	neww.style.display="block";
	btn.innerHTML="Delete";
	btn.setAttribute("onclick","ddel()");
	inp.placeholder="Enter serial num";
	return 0;
}

function clearr(){
	var cnf=confirm("Sure?");
	if(cnf)
		storage.clear();
	itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : {};

	storage.setItem('items', JSON.stringify(itemsArray));
	storage.setItem('max',Object.keys(itemsArray).length);
	display();
	neww.style.display="none";
}

function aadd(){
	var str=inp.value;
	if(str.length!=0){
		var count=parseInt(storage.getItem('max'));
		storage.setItem('max',1+count); //to make sure keys don't overlap
		itemsArray[count]=str;
		storage.setItem('items',JSON.stringify(itemsArray));
		display();
		inp.value="";
	}
	else{
		window.alert("Empty String!!")
	}
}

function ddel(){
	var str=inp.value;
	if(str.length!=0){
		var dat=JSON.parse(localStorage.getItem('items'));
		var chkk=Object.keys(dat);
		var aa=(str)-1;
		var bb=aa.toString();
		var chk=chkk[bb]; //get key at str th position
		if(chk){
			var foo=dat;
			delete foo[chk];
			storage.setItem('items',JSON.stringify(foo));
			inp.value="";
			neww.style.display="none";
			display();
		}
		else
		alert("Invalid");
	}
	else{
		window.alert("Empty")
	}
}