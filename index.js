const dropdown_menu = document.getElementById("dropdown_menu");
const menu_icon = document.getElementById("menu-icon");
const close_icon = document.getElementById("close-icon");
const openMenu = () => {
  dropdown_menu.style.display = "block";
  menu_icon.style.display = "none";
  close_icon.style.display = "block";
};
const closeMenu = () => {
  dropdown_menu.style.display = "none";
  menu_icon.style.display = "block";
  close_icon.style.display = "none";
};