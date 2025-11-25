import { Search } from "lucide-react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWraper";
import useLocationStore from "../store/location";
import { locations } from "../constants";
import clsx from "clsx";
import useWindowStore from "../store/window";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";
import { useRef } from "react";

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();
    const contentRef = useRef(null);

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow("resume");
        if (item.kind === "folder") return setActiveLocation(item);
        if (["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    };

    useGSAP(() => {
        if (!contentRef.current) return;

        Draggable.create(contentRef.current.querySelectorAll(".item"), {
            bounds: contentRef.current,
        });
    }, [activeLocation]);

    const renderList = (name, items) => (
        <div>
            <h3 className="text-xs mb-1" style={{ color: "var(--window-text)" }}>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={clsx(
                            item.id === activeLocation.id ? "active" : "not-active",
                            "hover:bg-gray-200 dark:hover:bg-gray-700"
                        )}
                        onClick={() => setActiveLocation(item)}
                    >
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate" style={{ color: "var(--window-text)" }}>
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            {/* Window body */}
            <div
                className="flex h-full"
                style={{
                    backgroundColor: "var(--window-bg)",
                    color: "var(--window-text)",
                }}
            >
                {/* Sidebar */}
                <div
                    className="sidebar"
                    style={{
                        backgroundColor: "var(--window-header-bg)",
                        borderColor: "var(--window-border)",
                    }}
                >
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>

                {/* Content area */}
                <ul
                    className="content"
                    ref={contentRef}
                    style={{ color: "var(--window-text)" }}
                >
                    {activeLocation?.children.map((item) => (
                        <li
                            key={item.id}
                            className={clsx(item.position, "item")}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
