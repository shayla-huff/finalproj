import React from "react";

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="container">
            {children}
        </div>
    );
}