import NavWrapper from "../hoc/NavWraper";
import useThemeStore from "../store/theme";

const Settings = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="bg-[var(--popover-bg)] backdrop-blur-xl rounded-2xl px-4 py-3 w-44 select-none border border-white/20 shadow-xl flex flex-col gap-3 z-99999999">
      <h3 className="text-[var(--popover-text)] text-xs font-semibold opacity-80">
        Appearance
      </h3>

      <button
        type="button"
        onClick={toggleTheme}
        className="flex items-center gap-3 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
      >
        <div className="w-9 h-9 rounded-full bg-[var(--popover-circle-bg)] flex items-center justify-center text-xs font-medium">
          {theme === "light" ? "☀️" : "🌙"}
        </div>

        <div className="flex flex-col items-start">
          <span className="text-[var(--popover-text)] text-sm font-medium">
            {theme === "light" ? "Light" : "Dark"}
          </span>
          <span className="text-[var(--popover-text)] text-[10px] opacity-70">
            Click to switch
          </span>
        </div>
      </button>
    </div>
  );
};

export default NavWrapper(Settings, "settings");
