window.addEventListener("change",Count);
window.addEventListener("keyup",Count);
function Count()
{
var type = document.getElementById("type").value;
var quan = document.getElementById("quan");
var full = document.getElementById("full");
var sum = 0;
if(type==1000) 
{
  sum= parseInt(type);
}
if(type==700)
	{
		var cover = document.getElementById("cover");
		sum = parseInt(type);
		if (cover.checked ===true)
		{
			sum = parseInt(type)+parseInt(cover.value);
		}
	}
if(type==1500)
	{ 
		var blue=document.getElementById("blue");
var red=document.getElementById("red");
var green=document.getElementById("green");
sum = parseInt(type);
    if (red.checked ===true)
      {
        sum+=parseInt(red.value);
      }
if (green.checked === true)
  {
    parseInt(green.value)
  }
}
sum=(quan.value)*sum;
full.innerHTML=sum;
}
function Blocks()
{
	var type = document.getElementById("type").value;
	if (type == 1000)
	{
document.getElementById("color").style.display="none";
document.getElementById("cheh").style.display="none";
	}
	if(type ==700)
	{
		document.getElementById("color").style.display="none";
        document.getElementById("cheh").style.display="block";
	}
	if (type == 1500)
	{	document.getElementById("color").style.display="block";
document.getElementById("cheh").style.display="none";
	}
}

