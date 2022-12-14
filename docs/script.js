
/*
function newElement() 
{
  var div = document.createElement("div");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  div.appendChild(t);
  if (inputValue === '') 
  {
    alert("You must write something!");
  } else 
  {
    document.getElementById("box").appendChild(div);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  div.appendChild(span);

  for (i = 0; i < close.length; i++) 
  {
    close[i].onclick = function() 
	{
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
*/
let title=document.getElementById("title");
let details=document.getElementById("details");
function newElement()
{
	let divElement=document.createElement("div");
	let h1Element=document.createElement("h1");
	let pElement=document.createElement("p");
	let mainEle=document.getElementById("bottom");
	
	if(title.value=="" && details.value=="")
	{
		alert("fill all details");
	}
	
	else
	{
		var close=document.createElement("button");
		mainEle.appendChild(divElement);
		divElement.appendChild(h1Element);
		divElement.appendChild(pElement);
		h1Element.innerHTML=title.value;
		pElement.innerHTML=details.value;
		divElement.appendChild(close);
		close.innerText="close";
		close.setAttribute("class","close-btn");
		divElement.setAttribute("class","box");
		h1Element.setAttribute("class","box-title");
		pElement.setAttribute("class","box-details");
		title.value ="";
		details.value ="";
		
	}
var closeBtn=document.getElementsByClassName("close-btn");
closeBtn=addEventListener(onclick,closingFunction);
function closingFunction()
{
	console.log(closeBtn);
	console.log(this.parentNode);
	for(i=0;i<closeBtn.length;i++)
	{
	closeBtn[i].addEventListener("click",closingFunction);
	}
}
}