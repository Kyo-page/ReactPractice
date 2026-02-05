import React from "react";

export const Card = ({ title, children }) => {
    return (
        <>
            <div className="card bg-base-100 shadow-md border border-base-300">
                <div className="card-body gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">{title}</h2>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};