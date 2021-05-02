import React, { useContext, useState } from "react";
import { LoadingContext } from "./LoadingContext";
import Typing from 'react-typing-animation';

const ModernOpening = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    const [setLoadContent] = useState(0);

    const skipIntro = () => {
        setTimeout(() => {
            setLoading(loading + 1);
        }, 500);
    };

    return (
        <div>
            <Typing onFinishedTyping={skipIntro} speed={25}>
                <div className="intro__content">
                    <Typing.Delay ms={100} />
                        Welcome to my personal site!{' '}
                        <Typing.Delay ms={700} />
                        <Typing.Backspace count={29} />
                        I'm a Danish web developer
                        <Typing.Delay ms={700} />
                        <Typing.Backspace count={26} />
               </div>
                <div>I've been living in Finland for a few years</div>
                <Typing.Delay ms={700} />
                <Typing.Backspace count={43} />
            </Typing>
        </div>
    );
};

export default ModernOpening;