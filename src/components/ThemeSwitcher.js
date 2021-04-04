import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import Switch from "react-switch";

const ThemeSwitcher = () => {
    const [loadContent, setLoadContent] = useState(0);

    const startToLoad = () => {
        setLoadContent(1);
    };

    useEffect(() => {
        setTimeout(() => {
            startToLoad();
        }, 500);
    }, []);

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => {
        if (theme) {
            setTheme(false);
        }
        else {
            setTheme(true);
        }
    }

    return (
        <div className="switch" style={{ opacity: loadContent }}>
            <Switch
                checked={theme}
                onChange={handleChange}
                handleDiameter={28}
                height={30}
                width={100}
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 9,
                            color: "white",
                            paddingRight: 15,
                        }}
                    >
                        Retro
                    </div>
                }
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 12,
                            paddingLeft: 22
                        }}>
                        Modern
                    </div>
                }
                className={theme ? 'on' : 'off'}
            />
        </div>
    );
};

export default ThemeSwitcher;
