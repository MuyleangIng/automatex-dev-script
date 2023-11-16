"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        console.log('ThemeChanger mounted');
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    console.log('Current theme:', theme);

    return (
        <div>
            <label className="relative inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                <div className={`w-11 h-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full peer peer-focus:ring-4 peer-focus:ring-yellow-300 ${theme === 'dark' ? 'dark:peer-focus:ring-yellow-800' : ''} peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${theme === 'dark' ? 'after:bg-white after:border-gray-300' : 'after:bg-white after:border-gray-600'} after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400`}></div>
            </label>

        </div>
    );
};

export default ThemeChanger;