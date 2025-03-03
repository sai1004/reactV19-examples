import { useState } from "react";
import "./App.css";

function App() {
    const [activeCell, setActiveCell] = useState<Record<string, string>>({});
    const grid: Array<number[]> = [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
    ];

    const updateAtiveCell = (rowIndex: number, cellIndex: number): void => {
        console.log("index >>", rowIndex, cellIndex);
        setActiveCell((prev) => {
            return { ...prev, [`${rowIndex}-${cellIndex}`]: `${rowIndex}-${cellIndex}` };
        });
        console.log("activeCell", activeCell[`${rowIndex}-${cellIndex}`]);
        clearActiveCell();
    };

    const clearActiveCell = () => {
        const timer: ReturnType<typeof setInterval> = setInterval(() => {}, 3000);
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
                                                `${rowIndex}-${cellIndex}` == activeCell[`${rowIndex}-${cellIndex}`]
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

export default App;
