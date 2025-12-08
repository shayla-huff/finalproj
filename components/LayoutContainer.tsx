import React from "react";

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}