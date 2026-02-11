import React, { Dispatch, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";
import { CATEGORIES, getBadgeClass, Item } from "./ShoppingList";
import clsx from "clsx";

interface ItemListProps {
    items: Item[];
    setItems: Dispatch<SetStateAction<Item[]>>;
}

const ItemRow = ({
    item,
    onDelete,
}: {
    item: Item;
    onDelete: (id: Item["id"]) => void;
}) => (
    <li className="list-row flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className={clsx(getBadgeClass(item.category, false), "pointer-events-none")}>
                {item.category}
            </div>
            <div>{item.name}</div>
        </div>
        <button onClick={() => onDelete(item.id)} className="btn btn-square btn-ghost">
            <FaXmark />
        </button>
    </li>
);

const ListContent = ({ items, onDelete }: { items: Item[]; onDelete: (id: Item["id"]) => void }) => (
    <ul className="list">
        {items.map((item) => (
            <ItemRow key={item.id} item={item} onDelete={onDelete} />
        ))}
    </ul>
);

export const ItemList = ({ items, setItems }: ItemListProps) => {
    const clickDelete = (id: Item["id"]) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const categoriesInOrder = CATEGORIES.filter((cat) => items.some((i) => i.category === cat));

    return (
        <div className="tabs tabs-lift">
            <input type="radio" name="tabs" className="tab" aria-label="すべて" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-2">
                <ListContent items={items} onDelete={clickDelete} />
            </div>

            {categoriesInOrder.map((category) => (
                <React.Fragment key={category}>
                    <input type="radio" name="tabs" className="tab" aria-label={category} />
                    <div className="tab-content bg-base-100 border-base-300 p-2">
                        <ListContent
                            items={items.filter((item) => item.category === category)}
                            onDelete={clickDelete}
                        />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};
