import React, { useContext, useState } from "react";
import { LoadingContext } from "./LoadingContext";
import Typing from 'react-typing-animation';

const RetroOpening = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    const [setLoadContent] = useState(0);

    const skipIntro = () => {
        //setLoadContent(0);
        setTimeout(() => {
            setLoading(loading + 1);
        }, 500);
    };

    return (
        <div>
            <Typing onFinishedTyping={skipIntro} speed={50}>
                <div className="intro__content">
                    <Typing.Delay ms={100} />
                        The adventure begins with young Jonas from Denmark.{' '}
                    <Typing.Delay ms={500} />
                        Instead of pursuing a career as a raiding viking, he chose one within web development.
                </div>
                <Typing.Delay ms={1000} />
                <br />
                <div>So far the adventure has brought him to Finland, where he currently resides.</div>
                <Typing.Delay ms={1000} />
            </Typing>
        </div>
    );
};

export default RetroOpening;