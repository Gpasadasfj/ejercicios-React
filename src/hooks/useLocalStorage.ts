import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) as T : initialValue;
        } catch (error) {
            console.error("Error leyendo localStorage:", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error guardando en localStorage:", error);
        }
    },  [key, value]);
    return [value, setValue] as const;
}