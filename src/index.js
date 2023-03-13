import "./index.html";
import "./scss/common.scss";
import "./scss/menu.scss";
const menuTpl = require("./template/menu.hbs");
import menu from "./js/menu.json";
import "./js/theme.js";
import "./scss/icons.scss";

const refs = {
	menuContainer: document.querySelector(".js-menu")
};
console.log(menu[0].ingredients);
renderMarkup();

function renderMarkup() {
	const markup = menu.map(item => menuTpl(item));
	refs.menuContainer.innerHTML = markup;
}
