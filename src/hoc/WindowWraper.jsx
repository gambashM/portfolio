import { useLayoutEffect, useRef } from 'react';
import useWindowStore from '../store/window.js';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import clsx from 'clsx';

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, width, defaultW, defaultH } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen) {
                // OPEN ANIMATION
                el.style.display = "block";

                gsap.fromTo(
                    el,
                    { scale: 0.8, opacity: 0, y: 40 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
                );

            } else {
                // CLOSE ANIMATION
                gsap.to(el, {
                    scale: 0.8,
                    opacity: 0,
                    y: 40,
                    duration: 0.25,
                    ease: "power3.in",
                    onComplete: () => {
                        el.style.display = "none";
                    }
                });
            }
        }, [isOpen]);
                
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            const desktop = document.querySelector("#desktop");

            const [instance] = Draggable.create(el, {
                handle: el.querySelector("#window-header"), 
                bounds: desktop,
                onPress: (e) => {
                    // Prevent dragging the parent when clicking a child window
                    if (e.target.closest("section") !== el) {
                        e.stopPropagation();
                        instance.disable();
                    } else {
                        instance.enable();
                        focusWindow(windowKey);
                    }
                }
            });

            return () => instance.kill();
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (width === "full") {
                gsap.to(el, {
                    top: 0,
                    left: 0,
                    x: 0,
                    y: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight,
                    duration: 0.35
                });

            } else {
                gsap.to(el, {
                    duration: 0.35,
                    ease: "power3.out",
                    width: defaultW,
                    height: defaultH,
                    borderRadius: "12px",
                    top: "20vh",
                    left: "10vw",
                });
            }
        }, [width]);
            

        return <section id={windowKey} ref={ref} style={{zIndex}} className='absolute hidden'>
            <Component {...props} isFullscreen={width === "full"}/>
        </section>;
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
}

export default WindowWrapper