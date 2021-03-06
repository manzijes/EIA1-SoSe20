"use strict";
var myToDoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myToDoList.length; i++) {
    var span = document.createElement("SPAN");
    var closeBtn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeBtn);
    myToDoList[i].appendChild(span);
}
var hide = document.getElementsByClassName("close");
var i;
for (i = 0; i < hide.length; i++) {
    hide[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
function newListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Seems like we're not on the same page. I really need you to write something >:( It all began when I was born. I always knew it was my destiny to become a JavaScript alert. But I need YOU to work with ME on this.");
    }
    else if (inputValue === "test") {
        alert("Don't test me >:( It's upsetting.");
    }
    else if (inputValue === "Test") {
        alert("You just wrote 'Test'? Be a little more creative than that, please.");
    }
    else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < hide.length; i++) {
        hide[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
    var countingGuy = document.querySelector("#total");
    countingGuy.innerHTML = myToDoList.length;
}
//# sourceMappingURL=script.js.map