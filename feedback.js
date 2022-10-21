function feedback()
{
    var p = document.forms["responce"]["name"].value;
   var q = document.forms["responce"]["email"].value;
   var r = document.forms["responce"]["comment"].value;
   
   if (p == "") 
  {
    alert("Name must be filled out");
    return false;
  }
  else if (q == "") 
  {
    alert("Email must be filled out");
    return false;
  }
  else if (r == "") 
  {
    alert("Comment must be filled out");
    return false;
  }
  else
  {
    var s="Your responce has been submitted";
    document.getElementById("submitted").innerHTML = s;
    var t=document.getElementsByTagName("input");
    for(var i=0;i<t.length;i++)
    {
        t[i].value = "";
    }
    var u=document.getElementsByTagName("textarea");
    u[0].value="";
   }
}
