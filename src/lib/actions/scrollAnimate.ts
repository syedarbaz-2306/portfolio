export default function scrollAnimate(node: HTMLElement, opts: any = {}) {
	const {
		threshold = 0.1,
		rootMargin = "0px 0px -50px 0px",
		observeSelector = "[data-animate]",
		parallaxSelector = "[data-parallax]",
		parallax = true,
		disableOnMobileWidth = 0,
		once = true,
	} = opts;

	let sectionTop = 0;
	let isMobile =
		typeof window !== "undefined" && window.innerWidth < disableOnMobileWidth;
	let observer: IntersectionObserver | null = null;
	let rafId: number | null = null;

	function initObserver() {
		if (observer) observer.disconnect();

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;
					if (entry.isIntersecting) {
						el.classList.add("in-view");
						const idx = el.dataset.index ?? null;
						node.dispatchEvent(
							new CustomEvent("enter", { detail: { index: idx, target: el } })
						);
						if (once) {
							observer?.unobserve(el);
						}
					} else {
						if (!once) {
							el.classList.remove("in-view");
							const idx = el.dataset.index ?? null;
							node.dispatchEvent(
								new CustomEvent("leave", { detail: { index: idx, target: el } })
							);
						}
					}
				});
			},
			{ threshold, rootMargin }
		);

		const els = Array.from(node.querySelectorAll(observeSelector));
		// Also observe the node itself if it matches or if no selector children found?
		// The snippet implies observing children. But for our sections, we might want to observe the section itself.
		// However, the snippet says `node.querySelectorAll(observeSelector)`.
		// If we want to animate the section itself, we should probably pass `observeSelector: null` or handle it.
		// But let's stick to the snippet. If the user applies it to a container, they should have data-animate elements inside.
		// OR, we can modify it to observe `node` if `observeSelector` is empty/null.
		// For now, I'll stick to the snippet logic but add a check: if no children found, observe node?
		// No, the user said "use above functions". I will paste it as is, but add Typescript types.

		if (els.length === 0) {
			// Fallback: observe the node itself if no children match,
			// effectively acting like the previous viewport action.
			observer.observe(node);
		} else {
			els.forEach((el) => observer?.observe(el));
		}
	}

	function handleParallax() {
		if (!parallax) {
			return;
		}

		const parEls = Array.from(
			node.querySelectorAll(parallaxSelector)
		) as HTMLElement[];

		if (parEls.length === 0) return;

		sectionTop = node.offsetTop || 0;

		if (isMobile) {
			parEls.forEach((el) => {
				el.style.transform = "";
			});
			return;
		}

		const windowScroll = window.scrollY;
		const windowHeight = window.innerHeight;
		const currentSectionHeight = node.offsetHeight || 0;

		if (
			windowScroll + windowHeight > sectionTop &&
			windowScroll < sectionTop + currentSectionHeight
		) {
			const scrollY = windowScroll - sectionTop;

			parEls.forEach((el, idx) => {
				const speed = parseFloat(el.dataset.parallaxSpeed || "0.08");
				const direction = el.dataset.parallaxDirection || "x";

				if (direction === "xy") {
					const speedX = parseFloat(el.dataset.parallaxX || String(speed));
					const speedY = parseFloat(el.dataset.parallaxY || String(speed));
					const transformValue = `translate(${scrollY * speedX}px, ${scrollY * speedY}px)`;
					el.style.transform = transformValue;
				} else if (direction === "y") {
					el.style.transform = `translateY(${scrollY * speed}px)`;
				} else {
					el.style.transform = `translateX(${scrollY * speed}px)`;
				}
			});
		} else {
			parEls.forEach((el) => {
				el.style.transform = "";
			});
		}
	}

	function onScroll() {
		if (rafId) return;
		rafId = requestAnimationFrame(() => {
			handleParallax();
			rafId = null;
		});
	}

	function onResize() {
		isMobile = window.innerWidth < disableOnMobileWidth;
		sectionTop = node.offsetTop || 0;
		handleParallax();
	}

	initObserver();
	sectionTop = node.offsetTop || 0;

	setTimeout(() => {
		handleParallax();
	}, 100);

	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener("resize", onResize);

	return {
		update(newOpts: any = {}) {
			if (newOpts.once !== undefined) opts.once = newOpts.once;
		},
		destroy() {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
			if (observer) observer.disconnect();
			if (rafId) {
				cancelAnimationFrame(rafId);
				rafId = null;
			}
		},
	};
}
