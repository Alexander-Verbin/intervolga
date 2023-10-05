const _footerHeight = () => {
	const footer = document.querySelector(".footer");
	const footerHeight = footer.getBoundingClientRect().height;

	document.documentElement.style.setProperty(
		"--footer-height",
		`${footerHeight}px`
	);
};

document.addEventListener("DOMContentLoaded", _footerHeight, false);

window.addEventListener("load", _footerHeight);

const _headerHeight = () => {
	const header = document.querySelector(".header");
	const headerHeight = header.getBoundingClientRect().height;

	document.documentElement.style.setProperty(
		"--header-height",
		`${headerHeight}px`
	);
};

document.addEventListener("DOMContentLoaded", _headerHeight, false);

window.addEventListener("load", _headerHeight);

const _replace = () => {
	const w = window.innerWidth;
	const aside = document.querySelector(".aside");
	const yellow = document.querySelector(".yellow");
	const red = document.querySelector(".red");
	const green = document.querySelector(".green");

	if (aside) {
		if (w < 768) {
			yellow.prepend(red);
			yellow.append(green);
		} else {
			aside.prepend(red);
			aside.append(green);
		}
	}
};

document.addEventListener("DOMContentLoaded", _replace, false);

window.addEventListener("load", _replace);

window.addEventListener("resize", _replace, false);
