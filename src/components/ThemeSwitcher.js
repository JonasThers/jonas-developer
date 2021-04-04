import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Switch from "react-switch";

const ThemeSwitcher = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => {
        if(theme) {
            setTheme(false);
        }
        else {
            setTheme(true);
        }
    }

    return (
        <div className="switch">
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
                            fontSize: 8,
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
                            fontSize: 8,
                            paddingLeft: 20
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
