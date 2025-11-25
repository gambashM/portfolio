import dayjs from "dayjs";
import { navLinks, navIcons } from "../constants/index.js";
import useWindowStore from "../store/window.js";
import useNavStore from "../store/nav.js";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const { windows, openNav, closeNav } = useNavStore();

    const handleNavToggle = (e, type) => {
        const win = windows[type];

        // If open → close it
        if (win?.isOpen) {
            return closeNav(type);
        }

        // If closed → open at button position
        const rect = e.currentTarget.getBoundingClientRect();
        openNav(type, rect);
    };

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p style={{ color: "var(--menubar-text)" }}>Matan Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p style={{ color: "var(--menubar-text)" }}>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img, type }) => (
                        <li
                            key={id}
                            onClick={(e) => handleNavToggle(e, type)}
                            className="cursor-pointer"
                        >
                            <img
                                src={img}
                                className="icon-hover"
                                alt="icon"
                                style={{ filter: "var(--navbar-icon-filter)" }}
                            />
                        </li>
                    ))}
                </ul>

                <time style={{ color: "var(--menubar-text)" }}>
                    {dayjs().format("ddd D MMM h:mm A")}
                </time>
            </div>
        </nav>
    );
};

export default Navbar;
