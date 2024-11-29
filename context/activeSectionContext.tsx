"use client";

import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};
type ActiveType = {
    active: SectionName;
    setActive: Dispatch<SetStateAction<SectionName>>;
};

export const ActiveSectionContext = createContext<ActiveType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [active, setActive] = useState<SectionName>("Home");
    return (
        <ActiveSectionContext.Provider
            value={{
                active,
                setActive,
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
