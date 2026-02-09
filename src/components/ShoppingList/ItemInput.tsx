import React, { Dispatch, SetStateAction } from "react";
import { Item } from "./ShoppingList";
import { FaPlus } from "react-icons/fa";

interface ItemInputProps {
    setItems: Dispatch<SetStateAction<Item[]>>;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
}

export const ItemInput = ({ setItems, text, setText }: ItemInputProps) => {
    const addItem = () => {
        const newItem: Item = {
            id: Math.floor(Math.random() * 1000),
            name: text,
            category: "その他",
        };

        setItems((prev) => [...prev, newItem]);
        setText("");
    };

    return (
        <>
            <div className="join w-full">
                <label className="input input-bordered join-item flex items-center gap-2 focus-within:outline-0 focus-within:border-neutral w-full">
                    <div>🛒</div>
                    <input
                        className="bg-transparent outline-none flex-1"
                        type="text"
                        inputMode="text"
                        autoComplete="off"
                        placeholder="買うものを入力"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <button onClick={addItem} className="btn btn-neutral join-item">
                    <FaPlus className="w-3 h-3" />
                </button>
            </div>
        </>
    );
};
