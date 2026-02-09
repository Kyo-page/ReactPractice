import React from "react";
import { FaXmark } from "react-icons/fa6";
import clsx from "clsx";
import { Item } from "./ShoppingList";

export const ItemList = ({ items }) => {
    const getBadgeClass = (category: Item["category"]) => {
        return clsx("badge badge-outline", {
            "text-green-500": category === "野菜",
            "text-rose-500": category === "肉",
        });
    };

    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {items.map(({ id, name, category }) => (
                    <li key={id} className="list-row flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={getBadgeClass(category)}>{category}</div>
                            <div>{name}</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <FaXmark />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
