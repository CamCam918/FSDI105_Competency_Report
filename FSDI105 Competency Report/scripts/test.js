// javascript vs. JQuery
// var title=document.getElementById('title');
// title.style.display="none";

$("#title").hide();
$(".menu").hide();
$("#title").show();
$("a").show();

// var h2=document.createElement("h2");
// var text=document.createTextNode("Title 2");
// h2.appendChild(text);
// document.body.appendChild(h2);
$("h3").text("text");
$("h3:first").html("<h2>Title 2</h2>");