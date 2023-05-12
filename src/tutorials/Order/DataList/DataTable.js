/* eslint-disable no-use-before-define */
import { useCallback, useEffect, useMemo, useState } from "react";
import Grid from "./Grid";

function DataTable({ setSelectedItem }) {
    const [limit, setLimit] = useState(1);
    const [slice, setSlice] = useState(0);
    // const [paginations, setPaginations] = useState(generatePagination());

    // function generatePagination(limiter = 0) {
    //     return Array.from({ length: 5 }, (_, i) => i + 5 * limiter + 1);
    // }
    const generatePagination = useMemo(() => {
        return Array.from({ length: 5 }, (_, i) => i + 5 * slice + 1);
    }, [slice]);

    const fetchMenu = useCallback(
        async (signal) => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`, { signal });
                const json = await res.json();
                return json;
            } catch (error) {
                signal.aborted ? console.log("The user aborted the request") : console.error("The request failed");
            }
        },
        [limit]
    );

    // useEffect(() => {
    //     console.log("LIMIT");
    //     setPaginations(generatePagination(slice));
    // }, [slice]);

    return (
        <div style={{ padding: 8, backgroundColor: "rgba(0,0,0,0.2)" }}>
            <Grid setSelectedItem={setSelectedItem} fetchApi={fetchMenu} limit={limit} />
            <div style={{ display: "flex", listStyle: "none", marginTop: 12 }}>
                <button onClick={() => setSlice((prev) => prev > 0 && prev - 1)}>{`<`}</button>
                {generatePagination.map((number) => (
                    <li
                        style={{
                            cursor: "pointer",
                            width: 50,
                            textAlign: "center",
                            margin: 2,
                            backgroundColor: `${limit === number ? "rgba(0,0,0,0.3)" : ""}`,
                        }}
                        key={number}
                        onClick={() => setLimit(number)}
                    >
                        {number}
                    </li>
                ))}
                <button onClick={() => setSlice((prev) => prev + 1)}>{`>`}</button>
            </div>
        </div>
    );
}

export default DataTable;
