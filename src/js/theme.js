import "../scss/theme.scss";
import "../scss/common.scss";
import "../scss/menu.scss";
import "../index.html";

document.addEventListener("DOMContentLoaded", function () {
	//refs
	const refs = {
		body: document.body,
		checkbox: document.querySelector(".theme-switch__toggle"),
		content: document.querySelectorAll(".card__content"),
		toolbar: document.querySelector(".toolbar")
	};
	//theme
	const Theme = {
		LIGHT: "light-theme",
		DARK: "dark-theme"
	};

	//vars
	let checkboxIsChecked = refs.checkbox.checked;
	const body = refs.body.classList;

	//check a localStorage userTheme value
	const storedTheme = localStorage.getItem("userTheme");
	storedTheme === Theme.DARK
		? ((refs.checkbox.checked = true), refs.body.classList.add(Theme.DARK))
		: refs.body.classList.add(Theme.LIGHT);

	refs.checkbox.addEventListener("change", onCheckboxChecked);

	//functions
	function onCheckboxChecked() {
		refs.checkbox.checked === true
			? (toggleThemeToDark(), changeStyle("dark"))
			: (toggleThemeToLight(), changeStyle("light"));
	}
	function localStorageTheme() {
		localStorage.getItem("userTheme") === "dark-theme"
			? ((checkboxIsChecked = true), changeStyle("dark"))
			: ((checkboxIsChecked = false), changeStyle("light"));
	}
	function changeStyle(theme) {
		const text = refs.content;
		text.forEach(item => {
			theme === "dark"
				? (item.classList.add("dark"),
				  item.classList.remove("light"),
				  refs.toolbar.classList.add("dark"),
				  refs.toolbar.classList.remove("light"))
				: (item.classList.add("light"),
				  item.classList.remove("dark"),
				  refs.toolbar.classList.add("light"),
				  refs.toolbar.classList.remove("dark"));
		});
	}
	function toggleThemeToLight() {
		localStorage.setItem("userTheme", Theme.LIGHT);
		body.add(Theme.LIGHT);
		body.remove(Theme.DARK);
	}
	function toggleThemeToDark() {
		localStorage.setItem("userTheme", Theme.DARK);
		body.add(Theme.DARK);
		body.remove(Theme.LIGHT);
	}
	//set a theme
	window.onload = function () {
		localStorageTheme();
	};
});
