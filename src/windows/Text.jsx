import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWraper";
import useWindowStore from "../store/window"

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile"/>
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-[var(--popover-bg)]">
                {image ? (
                    <div className="w-full h-80 overflow-hidden">
                        <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded"
                        />
                    </div>
                ): null}

                {subtitle ? <h3 className="text-lg font-semibold">{subtitle}</h3> : null}

                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-3 leading-relaxed text-base" style={{ color: "var(--window-text)" }}>
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;