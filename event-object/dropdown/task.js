let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");
let dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
})
for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener("click", function(event) {
      dropdownValue.textContent = dropdownItem[i].textContent;
      document.querySelector(".dropdown__list_active").classList.remove("dropdown__list_active");
      event.preventDefault();
}
)}
