import { useLayoutEffect, useRef } from 'react';
import useNavStore from '../store/nav.js';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const NavWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { windows, focusNav } = useNavStore();
        const { isOpen, zIndex, anchorRect } = windows[windowKey];  // ✅ use anchorRect
        const ref = useRef(null);

        // OPEN / CLOSE ANIMATION
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen) {
                el.style.display = "block";

                gsap.fromTo(
                    el,
                    { opacity: 0, y: -10, scale: 0.97 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power3.out" }
                );
            } else {
                gsap.to(el, {
                    opacity: 0,
                    y: -10,
                    scale: 0.97,
                    duration: 0.2,
                    ease: "power3.in",
                    onComplete: () => {
                        el.style.display = "none";
                    }
                });
            }
        }, [isOpen]);

        // POSITION UNDER NAV ICON
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el || !isOpen || !anchorRect) return;

            // use the actual rendered width
            const panelWidth = el.offsetWidth || 220; // fallback
            const x = anchorRect.left + anchorRect.width / 2 - panelWidth / 2;
            const y = anchorRect.bottom + 8; // 8px under icon

            gsap.set(el, { left: x, top: y });
        }, [isOpen, anchorRect]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute hidden"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `NavWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};

export default NavWrapper;
