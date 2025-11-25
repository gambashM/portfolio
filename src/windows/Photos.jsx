import { Search, Mail } from "lucide-react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWraper";
import useWindowStore from "../store/window";
import { gallery, photosLinks } from "../constants";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            {/* Window Header */}
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="w-full flex justify-end items-center gap-3"
                     style={{ color: "var(--window-text)" }}>
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            {/* Layout */}
            <div className="flex w-full h-full"
                style={{
                    backgroundColor: "var(--window-bg)",
                    color: "var(--window-text)"
                }}
            >
                {/* Sidebar */}
                <div className="sidebar"
                    style={{
                        backgroundColor: "var(--window-header-bg)",
                        borderColor: "var(--window-border)"
                    }}
                >
                    <h2 style={{ color: "var(--window-text)", opacity: 0.8 }}>Photos</h2>

                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}
                                className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors
                                           hover:bg-gray-200 dark:hover:bg-gray-700"
                                style={{ color: "var(--window-text)" }}
                            >
                                <img src={icon} alt={title} className="w-4" />
                                <p className="text-sm font-medium">{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery */}
                <div className="gallery p-5">
                    <ul className="grid grid-cols-5 grid-rows-5 gap-2.5 w-full h-100">
                        {gallery.map(({ id, img }) => (
                            <li key={id}
                                className="cursor-pointer rounded-lg overflow-hidden"
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img
                                    })
                                }
                            >
                                <img
                                    src={img}
                                    alt={`Gallery image ${id}`}
                                    className="w-full h-full object-cover rounded-lg hover:opacity-80 transition"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
