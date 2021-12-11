var col=1;
document.querySelector("button").addEventListener("click",function()
{
  var name=document.querySelector(".name").value;
  var rn=document.querySelector(".rn").value;
  var marks=document.querySelector(".marks").value;

  // if(name!=undefined && rn!=undefined && marks!=undefined)
  var x=(name+"--------------------"+rn+" -------------------"+marks);
  const loc=document.createElement("p");
  const val=document.createTextNode(x);
  loc.appendChild(val);
  var ele=document.querySelector(".list");
  ele.appendChild(loc);
  if(col==1)
  {
      loc.style.background="green"
        col=0;
  }
  else
  col=1;


  loc.style.height="30px";
  loc.style.fontSize="30px";
  // document.querySelector("p").textContent=x;

  // alert(x);
});
// var x=document.querySelector("h1").textContent;
// alert(x);
