import React, { useState } from "react";
import clsx from "clsx";

export const CharaGacha = ({ label }) => {
    const characters = [
        { name: "勇者", rarity: "SSR" },
        { name: "魔法使い", rarity: "SR" },
        { name: "戦士", rarity: "SR" },
        { name: "盗賊", rarity: "R" },
        { name: "僧侶", rarity: "R" },
    ];

    const [index, setIndex] = useState(null);
    const character = index !== null ? characters[index] : null;

    const clickGacha = () => {
        setIndex(Math.floor(Math.random() * characters.length));
    };

    const rarityClass = {
        SSR: "badge-secondary",
        SR: "badge-accent",
        R: "badge-ghost",
    };

    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">{label}</h2>
                        {/* <span className="badge badge-primary badge-outline">React</span> */}
                    </div>
                    <p className="text-sm text-base-content/60">ランダムでキャラを生成します。</p>
                    <button onClick={clickGacha} className="btn btn-soft w-fit">
                        🌀ガチャを回す
                    </button>
                    {character && (
                        <div className="flex items-center justify-between rounded-box border border-base-300 bg-base-200 px-3 py-2">
                            <div>
                                <p className="text-lg font-bold">{character.name}</p>
                                <p className="text-xs text-base-content/60">レア度</p>
                            </div>
                            <span className={clsx("badge badge-lg", rarityClass[character.rarity])}>
                                {character.rarity}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
