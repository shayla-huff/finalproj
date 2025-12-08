import React from "react";
import type { Cause } from "@/types/product";

export default function CauseBadge({ cause }: { cause: Cause }) {
    return (
        <span>
            Supports {cause.name}
        </span>
    );
}