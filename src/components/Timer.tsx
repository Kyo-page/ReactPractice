import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const Timer = () => {
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);

    const formatCount = (count: number) => {
        const minutes = Math.floor((count % 3600) / 60);
        const seconds = count % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    useEffect(() => {
        if (isActive) {
            const timer = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [isActive]);
    return (
        <Card title="タイマー">
            <div className="text-4xl font-bold">{formatCount(count)}</div>
            <div className="flex gap-2">
                <button onClick={() => setIsActive((prev) => !prev)} className="btn btn-primary">
                    {isActive ? "ストップ" : "スタート"}
                </button>
                <button
                    onClick={() => {
                        setCount(0);
                        setIsActive(false);
                    }}
                    className="btn btn-soft"
                >
                    リセット
                </button>
            </div>
        </Card>
    );
};
