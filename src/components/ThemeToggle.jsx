import { useEffect, useState } from "react";

function update() {
	if (
		localStorage.getItem("theme") === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-colors-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}

function useTheme() {
	const [setting, setSetting] = useState(null);

	function setThemeFromLocalStorage() {
		let theme = localStorage.getItem("theme");
		if (theme === "light" || theme === "dark") {
			setSetting(theme);
		} else {
			setSetting(
				window.matchMedia("(prefers-colors-scheme: dark)").matches
					? "dark"
					: "light"
			);
		}
	}

	// set theme on mount
	useEffect(() => {
		setThemeFromLocalStorage();
		let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", update);

		const handleStorageChange = () => {
			update();
			setThemeFromLocalStorage();
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			mediaQuery.removeEventListener("change", update);
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	//to handle the theme after mounting
	useEffect(() => {
		if (setting === "light" || setting === "dark") {
			localStorage.setItem("theme", setting);
		}
		update();
	}, [setting]);

	return { setting, setSetting };
}
