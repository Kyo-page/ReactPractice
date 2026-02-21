import React from "react";
import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";

// 1. 材料を取りに行く「指示書」を作る
const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");

    // もし通信に失敗したらエラーを投げる
    if (!response.ok) {
        throw new Error("データの取得に失敗しました");
    }

    // 変数に入れてから加工する場合は、await をつける
    const data = await response.json();
    // 配列の0番目を返すと、あとの data.url が楽になる
    return data[0];
};

export const RandomCats = () => {
    // 2. TanStack Query に「これ取ってきて！」と頼む
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["catImage"], // キャッシュにつける名前（あだ名）
        queryFn: fetchCat, // 実行する関数
    });

    // 共通の「中身」を判定して変数に入れる
    const renderContent = () => {
        // 3. 「届くのを待っている間」の表示
        if (isLoading)
            return (
                <div role="alert" className="alert alert-info alert-soft">
                    <span>データを読み込み中...</span>
                </div>
            );

        // 4. 「もし失敗した時」の表示
        if (isError)
            return (
                <div role="alert" className="alert alert-error alert-soft">
                    <span>エラー: {error.message}</span>
                </div>
            );

        return (
            <>
                <div>
                    <button onClick={() => refetch()} className="btn btn-primary">
                        🐱を更新する
                    </button>
                </div>
                <img src={data.url} />
            </>
        );
    };

    // 最後に Card で包んで、中身だけを呼び出す
    return (
        <Card title="ランダム猫ビューアー">
            <p className="text-sm text-base-content/60">The Cat APIからランダムで猫を取得して表示します。</p>
            {renderContent()}
        </Card>
    );
};
