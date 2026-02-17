import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const Timer = () => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const timer = setInterval(() => {}, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Card title="タイマー">
            <div className="text-4xl font-bold">00:00:00</div>
            <div className="flex gap-2">
                <button className="btn btn-primary">スタート</button>
                <button className="btn btn-soft">リセット</button>
            </div>
        </Card>
    );
};
