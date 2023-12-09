import React from 'react';
import {DarkThemeToggle} from "flowbite-react";
import {useLocalStorage, useReadLocalStorage} from "usehooks-ts";

function BtnTheme() {
    const themeMode = useReadLocalStorage("flowbite-theme-mode")
    const [theme, setTheme] = useLocalStorage('flowbite-theme-mode', themeMode)

    return (
        <DarkThemeToggle onClick={() => {
            setTheme(themeMode ? (themeMode==='dark' ? 'light' : 'dark') : 'dark')
        }} />
    );
}

export default BtnTheme;