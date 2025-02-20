import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    return (
        <div className="App">
            <div className="title">
                <h2>Hello Search App!! </h2>
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
                    />
                </div>
                <div className="search-result-container">
                    {searchResult &&
                        searchResult.map((result) => {
                            return <div key={result.id}></div>;
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;
