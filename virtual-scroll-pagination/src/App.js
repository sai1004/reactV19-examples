import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const PAGE_NUMBER = 1;
function App() {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCoins() {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page}2&page=1&sparkline=false`
                );

                if (response) {
                    setCoins((prev) => {
                        return [...prev, ...response?.data];
                    });
                }
                setLoading(false);
            } catch (error) {}
        }
        fetchCoins();
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div className="App">
            {coins &&
                coins.map((coin, index) => {
                    return (
                        <div key={index + "XYZ"}>
                            <h1> Coin Name: {coin?.name}</h1>
                        </div>
                    );
                })}
            {loading && <div>Loading...</div>}
        </div>
    );
}

export default App;
