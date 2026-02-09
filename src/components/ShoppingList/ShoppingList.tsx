import React, { useState } from "react";
import { ItemList } from "./ItemList";
import { ItemInput } from "./ItemInput";

interface ShoppingListProps {
    label: string;
}

export type Item = {
    id: number;
    name: string;
    category: "野菜" | "肉" | "その他";
};

export const ShoppingList = ({ label }: ShoppingListProps) => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: "キャベツ", category: "野菜" },
        { id: 2, name: "鶏肉", category: "肉" },
    ]);

    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <h2 className="card-title">{label}</h2>
                    <p className="text-sm text-base-content/60">
                        「何を買うか」を入力し、カテゴリごとに表示・管理できるアプリです。
                    </p>
                    <div className="max-w-80 space-y-4">
                        <ItemInput setItems={setItems} text={text} setText={setText} />
                        <ItemList items={items} />
                    </div>
                </div>
            </div>
        </>
    );
};
