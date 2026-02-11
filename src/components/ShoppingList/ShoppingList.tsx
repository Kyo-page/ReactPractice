import React, { useState } from "react";
import { ItemList } from "./ItemList";
import { ItemInput } from "./ItemInput";
import clsx from "clsx";

interface ShoppingListProps {
    label: string;
}

// 1. 【マスターデータ】
// as const をつけることで、単なる文字列配列ではなく「この値しか許さない」という
// 読み取り専用の「リテラル型」として定義できる（＝スペルミスを防止できる）
export const CATEGORIES = ["野菜・果物", "肉", "乳製品", "加工食品", "飲料", "調味料", "その他"] as const;

// 2. 【型の自動生成】
// 配列の中身を「型」として抽出。
// これにより、CATEGORIES を更新するだけで、アプリ全体の型が自動で同期される（二重管理を防止）
export type Category = (typeof CATEGORIES)[number];

// 3. 【データ構造の定義】
// category プロパティに「Category型」を指定することで、
// マスターに存在しないカテゴリー名が紛れ込むのをコンパイル時点で防ぐ
export type Item = {
    id: number;
    name: string;
    category: Category;
};

export const getBadgeClass = (category: Item["category"], isSelected: boolean) => {
    return clsx("badge badge-outline cursor-pointer transition", {
        // 選択されている時は一律で文字を白にする
        "text-white": isSelected,
        "bg-white": !isSelected,

        // --- カテゴリー別の設定 ---
        // 「そのカテゴリー」かつ「選択されていない時」だけテキストに色をつける
        "text-green-500 hover:text-white hover:bg-green-500": category === "野菜・果物" && !isSelected,
        "bg-green-500": isSelected && category === "野菜・果物",

        "text-rose-500 hover:text-white hover:bg-rose-500": category === "肉" && !isSelected,
        "bg-rose-500": isSelected && category === "肉",

        "text-blue-500 hover:text-white hover:bg-blue-500": category === "乳製品" && !isSelected,
        "bg-blue-500": isSelected && category === "乳製品",

        "text-orange-500 hover:text-white hover:bg-orange-500": category === "加工食品" && !isSelected,
        "bg-orange-500": isSelected && category === "加工食品",

        "text-cyan-500 hover:text-white hover:bg-cyan-500": category === "飲料" && !isSelected,
        "bg-cyan-500": isSelected && category === "飲料",

        "text-yellow-500 hover:text-white hover:bg-yellow-500": category === "調味料" && !isSelected,
        "bg-yellow-500": isSelected && category === "調味料",

        "text-gray-500 hover:text-white hover:bg-gray-500": category === "その他" && !isSelected,
        "bg-gray-500": isSelected && category === "その他",
    });
};

export const ShoppingList = ({ label }: ShoppingListProps) => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: "キャベツ", category: "野菜・果物" },
        { id: 2, name: "鶏肉", category: "肉" },
        { id: 3, name: "チョコレート", category: "加工食品" },
    ]);

    const [text, setText] = useState("");

    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <h2 className="card-title">{label}</h2>
                    <p className="text-sm text-base-content/60">
                        「何を買うか」を入力し、カテゴリごとに表示・管理できるアプリです。
                    </p>
                    <div className="max-w-120 space-y-4">
                        <ItemInput setItems={setItems} text={text} setText={setText} />
                        <ItemList items={items} setItems={setItems} />
                    </div>
                </div>
            </div>
        </>
    );
};
