import React from "react";
import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";

// 1. 材料を取りに行く「指示書」を作る
const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // もし通信に失敗したらエラーを投げる
    if (!response.ok) {
        throw new Error("データの取得に失敗しました");
    }

    // 成功したら中身（JSON）を返す
    return response.json();
};

export const UserList = () => {
    // 2. TanStack Query に「これ取ってきて！」と頼む
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["users"], // キャッシュにつける名前（あだ名）
        queryFn: fetchUsers, // 実行する関数
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
                        データを更新する
                    </button>
                </div>
                <ul>
                    {data.map((user: any) => (
                        <li key={user.id} style={{ marginBottom: "8px" }}>
                            <strong>{user.name}</strong> ({user.email})
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    // 最後に Card で包んで、中身だけを呼び出す
    return (
        <Card title="ユーザーリスト">
            <p className="text-sm text-base-content/60">JSONPlaceholderのAPIからユーザーリストを表示します。</p>
            {renderContent()}
        </Card>
    );
};
