import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { FaSun, FaMoon } from "react-icons/fa";

export const DarkModeToggle = () => {
    type ThemeType = "light" | "dark";

    const STORAGE_KEY = "user-theme";

    const [theme, setTheme] = useState<ThemeType>(() => {
        // 1. Storageから値を取り出す
        // localStorageが取得した値（string | null）を、無理やり ThemeType だと思い込ませる
        const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeType;

        // 2. 値があればそれを返し、なければデフォルト（'light'）を返す
        return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <div>
            <Card title="ダークモード切替" cardTheme={theme}>
                <p>ダークモードとライトモードを切り替えます。リロードしても保持されます。</p>
                <div>
                    <button
                        className="btn btn-primary text-xl p-6"
                        onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
                    >
                        {theme === "dark" ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </Card>
        </div>
    );
};
