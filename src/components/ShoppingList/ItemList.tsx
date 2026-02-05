import React from "react";
import { FaXmark } from "react-icons/fa6";

export const ItemList = ({ items }) => {
    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {items.map(({ id, name }) => (
                    <li key={id} className="list-row flex items-center justify-between">
                        <div>{name}</div>
                        <button className="btn btn-square btn-ghost">
                            <FaXmark />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
