const toggleButton = document.getElementById("navitoggle");
const links = document.getElementById("dropdown-links");

toggleButton.addEventListener("click", () => {
  links.classList.toggle("show");
});

window.addEventListener("click", e => {
   if(links.classList.contains("show")){
        if(e.target.id !== "navitoggle"){
            links.classList.remove("show")
        }
   }
})
