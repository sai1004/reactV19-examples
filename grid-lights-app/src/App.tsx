import { useRef, useState } from "react";
import "./App.css";
const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

export default function App() {
    const [activeCell, setActiveCell] = useState<Record<string, string>>({});
    const grid: Array<number[]> = matrix;
    const timersRef = useRef<number[]>([]); // Explicitly typed as an array of numbers

    const updateAtiveCell = (rowIndex: number, cellIndex: number): void => {
        console.log("index >>", rowIndex, cellIndex);
        setActiveCell((prev) => {
            return { ...prev, [`${rowIndex}-${cellIndex}`]: `${rowIndex}-${cellIndex}` };
        });
        console.log("activeCell", activeCell[`${rowIndex}-${cellIndex}`]);
        setTimeout(() => {
            clearActiveCellInReverseSequence();
        }, 1000);
    };

    const clearActiveCellInReverseSequence = () => {
        const keys = Object.keys(activeCell).reverse();

        if (keys.length === 0) return; // Stop if object is empty

        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];

        keys.forEach((key, index) => {
            const timer: ReturnType<typeof setTimeout> = window.setTimeout(() => {
                setActiveCell((prevObj) => {
                    const newObj = { ...prevObj };
                    delete newObj[key];
                    // ✅ Ensure the last key deletion results in an empty object
                    return Object.keys(newObj).length > 0 ? newObj : {};
                });

                console.log(`Deleted key: ${key}`);
            }, index * 5000);
            timersRef.current.push(timer);
        });
    };

    return (
        <div className="app">
            <div className="grid-container">
                {grid &&
                    grid.map((row: Array<number>, rowIndex: number) => {
                        return (
                            <div key={rowIndex} className="row">
                                {row.map((cell: number, cellIndex: number) => {
                                    return (
                                        <div
                                            key={cellIndex}
                                            className={
                                                `${rowIndex}-${cellIndex}` === activeCell[`${rowIndex}-${cellIndex}`]
                                                    ? "cell-active"
                                                    : "cell"
                                            }
                                            onClick={() => {
                                                updateAtiveCell(rowIndex, cellIndex);
                                            }}
                                        ></div>
                                    );
                                })}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
