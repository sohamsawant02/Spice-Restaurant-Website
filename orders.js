function order()
{ 
var s = document.forms["loginform"]["email"].value;
var r = document.forms["loginform"]["password"].value;
   
   	if (s === "" && r === "") 
  	{
    		alert("All fields are mandatory");
    		return false;
  	}
  	else if (s === "greatestsoham@gmail.com" && r === "Soham2020") 
  	{
    		window.open("onlineorder.html");
  	}
	else
	{
		alert("Wrong email/password");
	}
	
}

function create()
{
 var nm = document.forms["createaccform"]["email1"].value;
 var mob = document.forms["createaccform"]["mob"].value;
var em = document.forms["createaccform"]["email1"].value;
var add=document.forms["createaccform"]["address"].value;
var pw = document.forms["createaccform"]["password1"].value;
if (nm === "" && mob==="" && em === "" && add === "" && pw === "") 
  	{
    		alert("All fields are mandatory");
    		return false;
  	}
else
	{

		alert("Account Created Successfully");
	}
}