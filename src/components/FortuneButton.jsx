import { useState } from "react";
import clsx from "clsx";

export const FortuneButton = ({ label }) => {
    const [result, setResult] = useState(null);
    const fortunes = [
        { label: "大吉", emoji: "🎉", className: "bg-success text-success-content" },
        { label: "中吉", emoji: "🙂", className: "bg-info text-info-content" },
        { label: "凶", emoji: "💀", className: "bg-error text-error-content" },
    ];
    const fortune = result !== null ? fortunes[result] : null;

    const onClickResult = () => {
        setResult(Math.floor(Math.random() * 3));
    };

    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">{label}</h2>
                        {/* <span className="badge badge-primary badge-outline">React</span> */}
                    </div>
                    <p className="text-sm text-base-content/60">ボタンを押すたびに結果が変わります。</p>
                    <button className="btn btn-primary w-fit" onClick={onClickResult}>
                        運試しする
                    </button>
                    {fortune && (
                        <div className={clsx("rounded-box px-3 py-2 text-center text-lg font-bold", fortune.className)}>
                            {fortune.label} {fortune.emoji}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
