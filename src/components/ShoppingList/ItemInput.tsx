import React, { Dispatch, SetStateAction, useState } from "react";
import { CATEGORIES, getBadgeClass, Item } from "./ShoppingList";
import { FaPlus } from "react-icons/fa";

interface ItemInputProps {
    setItems: Dispatch<SetStateAction<Item[]>>;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
}

export const ItemInput = ({ setItems, text, setText }: ItemInputProps) => {
    const [category, setCategory] = useState<Item["category"]>("その他");
    const [selectedCategory, setSelectedCategory] = useState<Item["category"] | null>("その他");

    const clickCategory = (category: Item["category"]) => {
        setCategory(category);
        setSelectedCategory(category);
    };

    const addItem = () => {
        if (!text) return;

        const newItem: Item = {
            id: Math.floor(Math.random() * 1000),
            name: text,
            category: category,
        };

        setItems((prev) => [...prev, newItem]);
        setText("");
    };

    return (
        <div className="space-y-4 mt-4 bg-base-200 rounded p-4">
            <div className="space-y-2">
                <div className="text-sm font-semibold text-base-content/60">カテゴリを選択</div>
                <div className="btn-group flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            // selectedCategoryとcategoryが一致しているかどうかを判断
                            className={getBadgeClass(category, selectedCategory === category)}
                            onClick={() => clickCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-2">
                <div className="text-sm font-semibold text-base-content/60">買うものを入力</div>
                <div className="join w-full">
                    <label className="input input-bordered join-item flex items-center gap-2 focus-within:outline-0 focus-within:border-neutral w-full">
                        <div>🛒</div>
                        <input
                            className="bg-transparent outline-none flex-1"
                            type="text"
                            inputMode="text"
                            autoComplete="off"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </label>
                    <button onClick={addItem} className="btn btn-neutral join-item">
                        <FaPlus className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};
