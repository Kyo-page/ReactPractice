import { useState } from 'react';
import clsx from 'clsx';

export const LikeButton = ({ label }) => {
    const [likeCount, setLikeCount] = useState(0);
    const onClickLike = () => {
        setLikeCount((prev) => prev + 1);
    };
    const onClickReset = () => {
        setLikeCount(0);
    };

    const styleLikeCount = clsx('text-4xl font-bold', {
        'text-primary': likeCount % 2 === 0,
        'text-base-content': likeCount % 2 !== 0,
    });

    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <h2 className="card-title">{label}</h2>
                    {/* <span className="badge badge-primary badge-outline">React</span> */}
                    <p className="text-sm text-base-content/60">
                        クリック回数が偶数のときは色が変わります。
                    </p>
                    {likeCount >= 10 && (
                        <div className="alert alert-error py-2">
                            <span className="text-sm font-bold">押しすぎ！</span>
                        </div>
                    )}
                    <div className={styleLikeCount}>{likeCount}</div>
                    <div className="join">
                        <button className="btn btn-primary join-item" onClick={onClickLike}>
                            いいね
                        </button>
                        <button
                            className="btn btn-neutral btn-soft join-item"
                            onClick={onClickReset}
                        >
                            リセット
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};