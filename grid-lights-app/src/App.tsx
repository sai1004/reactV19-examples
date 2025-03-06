import { useState } from "react";
import "./App.css";
const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

export default function App() {
    const [activeCell, setActiveCell] = useState<Record<string, string>>({});
    const grid: Array<number[]> = matrix;

    const updateAtiveCell = (rowIndex: number, cellIndex: number): void => {
        setTimeout(() => {
            console.log("index >>", rowIndex, cellIndex);
            setActiveCell((prev) => {
                return { ...prev, [`${rowIndex}-${cellIndex}`]: `${rowIndex}-${cellIndex}` };
            });
            console.log("activeCell", activeCell[`${rowIndex}-${cellIndex}`]);
            clearActiveCellInReverseSequence()
        }, 400);
    };
 
    const clearActiveCellInReverseSequence = () => {
        // not completed yet logic part
        const clonedObj = { ...activeCell };
        const keys = Object.keys(clonedObj);
        for (let i = 0; i < keys.length; i++) {
            // const timer: ReturnType<typeof setInterval> = setInterval(() => {
            // }, i * 3000);
        }
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