
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
      event.preventDefault();
      const value = this.getAttribute("data-value");

    
    const button = this.closest(".relative").querySelector("button");
    button.textContent = value;


    const dropdownMenu = this.closest(".hidden");
    dropdownMenu.classList.add("hidden");
  });
});
