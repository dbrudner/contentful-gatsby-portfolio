import { useEffect, useState } from "react";

export default function() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener(resizse);
		};
	});

	return windowWidth;
}
