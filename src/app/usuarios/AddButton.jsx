"use client"
import { useState } from "react";

export function AddButton() {
    const [liked, setLiked] = useState(false);
    return (
        <button>
            Añadir usuario
        </button>
    );
}
