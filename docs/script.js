
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
let currentElement;
function removeElement() {
	var div = this.parentElement;
	div.style.display = "none";
}

function updateElement (){
	currentElement = this.parentElement;
	title.value = currentElement.children[0].innerText;
	details.value = currentElement.children[1].innerText;
}

function newElement()
{
	
	let mainEle=document.getElementById("bottom");
	
	if(title.value=="" && details.value=="")
	{
		alert("fill all details");
	}
	
	else
	{
		if (currentElement){
			currentElement.children[0].innerHTML=title.value;
			currentElement.children[1].innerHTML=details.value;
			currentElement = null;
		}
		else{
			let divElement=document.createElement("div");
			let h1Element=document.createElement("h1");
			let pElement=document.createElement("p");
			mainEle.appendChild(divElement);
			
			h1Element.innerHTML=title.value;
			divElement.appendChild(h1Element);
			
			
			pElement.innerHTML=details.value;		
			divElement.appendChild(pElement);

			
			var close=document.createElement("button");
			close.innerText="close";
			close.setAttribute("class","close-btn");
			close.onclick= removeElement;	
			divElement.appendChild(close);
			
			var update=document.createElement("button");
			update.innerText="update";
			update.setAttribute("class","update-btn");
			update.onclick= updateElement;	
			divElement.appendChild(update);
			
			divElement.setAttribute("class","box");
			h1Element.setAttribute("class","box-title");
			pElement.setAttribute("class","box-details");
		}
		
		title.value ="";
		details.value ="";
		
	}
}

