import {create} from "zustand";
import { INITIAL_Z_INDEX, NAV_CONFIG } from "../constants";
import { immer } from 'zustand/middleware/immer'

const useNavStore = create(
    immer((set) => ({
        windows: NAV_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,
        
    openNav: (windowKey, anchorRect = null) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        // toggle behavior: click again to close
        if (win.isOpen) {
            win.isOpen = false;
            return;
        }

        // close other navs
        Object.values(state.windows).forEach(w => { w.isOpen = false; });

        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.anchorRect = anchorRect;
    }),

        closeNav: (windowKey) => set((state) => {
            const win = state.windows[windowKey]
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),

        focusNav: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey]
            win.zIndex = state.nextZIndex++;
        }),
    }))
)

export default useNavStore;