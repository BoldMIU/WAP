window.onload = function () {
  "use strict";

  document.getElementById("makebigger").onclick = function () {
    setInterval(function () {
      let fsize = document.getElementById("textArea").style.fontSize;
      document.getElementById("textArea").style.fontSize =
        (Number.parseInt(fsize) + 2).toString() + "pt";
    }, 500);
  };

  document.getElementById("bling").onchange = function () {
    if (document.getElementById("bling").checked) {
      document.getElementById("textArea").style.fontWeight = "bold";
      document.getElementById("textArea").style.color = "green";
      document.getElementById("textArea").style.textDecoration = "underline";
      document.body.style.backgroundImage = "url('/assets/images/paper.gif')";
    } else {
      document.getElementById("textArea").style.fontWeight = "normal";
      document.getElementById("textArea").style.color = "black";
      document.getElementById("textArea").style.textDecoration = "none";
      document.body.style.backgroundImage = "none";
    }
  };
};
