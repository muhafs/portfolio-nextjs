"use client";

import type { SectionName } from "@/lib/types";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};
type ActiveType = {
    active: SectionName;
    setActive: Dispatch<SetStateAction<SectionName>>;
    lastClick: number;
    setLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [active, setActive] = useState<SectionName>("Home");
    const [lastClick, setLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                active,
                setActive,
                lastClick,
                setLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveContext() {
    const ctx = useContext(ActiveSectionContext);

    if (ctx === null) {
        throw Error(
            "useActiveContext must be used within an ActiveSectionContextProvider",
        );
    }

    return ctx;
}
