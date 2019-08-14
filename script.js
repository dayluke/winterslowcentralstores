function navbarMenu() {
  var title = document.getElementById("name");
  var nav = document.getElementById("nav");
  var tabs = nav.getElementsByTagName("a");
  
  if (tabs[0].style.width === "100%") { // Menu is open, so close it.
    for (var i = 0; i < tabs.length - 1; i++) {
      tabs[i].style.width = null;
      
      if (window.innerWidth <= 1300) {
        tabs[i].style.display = "none";
      } else {
        tabs[i].style.display = "initial";
      }
      title.style.float = "left";
      title.style.textAlign = null;
    }
  } else { // Menu is closed, so open it.
    for (var i = 0; i < tabs.length - 1; i++) {
      tabs[i].style.width = "100%";
      tabs[i].style.display = "block";
    }
    title.style.float = null;
    title.style.textAlign = "center";
  }
}
