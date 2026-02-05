import { useState } from 'react';

//クイズ
export const Quiz = () => {
    const [result, setResult] = useState(null);

    const clickCorrect = () => {
        setResult(true);
    };

    const clickInCorrect = () => {
        setResult(false);
    };

    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">クイズ</h2>
                        {/* <span className="badge badge-primary badge-outline">React</span> */}
                    </div>
                    <p className="text-sm text-base-content/60">
                        Q. 日本で一番高い山は？
                    </p>
                    <div className="join">
                        <button className="btn btn-soft join-item" onClick={clickCorrect}>
                            富士山
                        </button>
                        <button className="btn btn-soft join-item" onClick={clickInCorrect}>
                            北岳
                        </button>
                    </div>
                    {result === true && (
                        <div className="alert alert-success py-2">
                            <span className="font-bold">正解！</span>
                        </div>
                    )}
                    {result === false && (
                        <div className="alert alert-error py-2">
                            <span className="font-bold">不正解！</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
