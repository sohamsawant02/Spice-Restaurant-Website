function validateForm() 
{
   var a = document.forms["myForm"]["name"].value;
   var b = document.forms["myForm"]["email"].value;
   var c = document.forms["myForm"]["phone"].value;
   var d = document.forms["myForm"]["date"].value;
   var e = document.forms["myForm"]["time"].value;
   var f = document.forms["myForm"]["num"].value;

  if (a == "") 
  {
    alert("Name must be filled out");
    return false;
  }
  else if (b == "") 
  {
    alert("Email must be filled out");
    return false;
  }
  else if (c == "") 
  {
    alert("Phone Number must be filled out");
    return false;
  }
  else if (d == "") 
  {
    alert("Date must be filled out");
    return false;
  }
  else if (e == "") 
  {
    alert("Time must be filled out");
    return false;
  }
  else if (f == "") 
  {
    alert("Number of Guests must be filled out");
    return false;
  }
  else
  {
    var x="Your Table has been reserved";
    document.getElementById("reserved").innerHTML = x;
    var y=document.getElementsByTagName("input","textarea");
    for(var i=0;i<y.length;i++)
    {
        y[i].value = "";
    }
  }
}
