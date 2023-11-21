function hoverImage(event) {
    var x = document.querySelectorAll("#hover_img>img");
    var sDisplay = (event.type === "mouseout") ? "none" : "block";
    x[0].style.display = sDisplay;
  }