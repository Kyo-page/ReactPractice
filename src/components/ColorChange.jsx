import { useState } from 'react';
import clsx from 'clsx';

//色チェンジ
export const ColorChange = () => {
    const [bgStatus, setBgStatus] = useState(null);
    const colorLabels = ['プライマリ', 'セカンダリ', 'アクセント'];
    const currentLabel = bgStatus === null ? '未選択' : colorLabels[bgStatus];
    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">色チェンジ</h2>
                        {/* <span className="badge badge-primary badge-outline">React</span> */}
                    </div>
                    <p className="text-sm text-base-content/60">
                        ボタンで円の色を切り替えます。
                    </p>
                    <div className="flex items-center gap-4">
                        <div
                            className={clsx(
                                'circle rounded-full w-16 h-16 border-2 border-dashed',
                                bgStatus === 0 && 'bg-primary border-primary',
                                bgStatus === 1 && 'bg-secondary border-secondary',
                                bgStatus === 2 && 'bg-accent border-accent',
                                bgStatus === null && 'border-neutral'
                            )}
                        ></div>
                        <div className="text-sm text-base-content/60">
                            選択中: <span className="font-medium">{currentLabel}</span>
                        </div>
                    </div>
                    <div className="join">
                        <button
                            onClick={() => setBgStatus(0)}
                            className="btn btn-primary join-item"
                        >
                            1
                        </button>
                        <button
                            onClick={() => setBgStatus(1)}
                            className="btn btn-secondary join-item"
                        >
                            2
                        </button>
                        <button
                            onClick={() => setBgStatus(2)}
                            className="btn btn-accent join-item"
                        >
                            3
                        </button>
                        <button
                            onClick={() => setBgStatus(null)}
                            className="btn btn-neutral btn-soft join-item"
                        >
                            リセット
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};