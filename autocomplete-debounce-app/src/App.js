import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResullt, setShowResult] = useState(false);

    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/recipes/search?q=" + searchQuery);
        const json = await response.json();
        console.log("json", json);
        setSearchResult(json.recipes);
    };

    useEffect(() => {
        let timer = setTimeout(fetchData, 400);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    return (
        <div className="App">
            <div className="title">
                <h2>Auto Complete Debounce App!! </h2>
            </div>
            <div className="app-layout">
                <div className="search-input-section">
                    <input
                        type="search"
                        name="searchQuery"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                        onBlur={() => {
                            setShowResult(false);
                        }}
                    />
                </div>
                <div className="search-result-container">
                    {showResullt &&
                        searchResult &&
                        searchResult.map((result) => {
                            return <div key={result.id} className="search-item">{result.name}</div>;
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;