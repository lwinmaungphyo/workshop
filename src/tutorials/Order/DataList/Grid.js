/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function Grid({ fetchApi, limit, setSelectedItem }) {
    const [products, setProducts] = useState();

    useEffect(() => {
        console.log("GRID");

        const controller = new AbortController();
        const signal = controller.signal;
        fetchApi(signal).then((result) => setProducts(result));

        return () => controller.abort();
    }, [fetchApi, limit]);

    return (
        <>
            <h3>Menu</h3>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gridTemplateRow: "repeat(5, 1fr)",
                    gridColumnGap: "8px",
                    gridRowGap: "8px",
                }}
            >
                {products &&
                    products.length > 0 &&
                    products.map((product, index) => (
                        <div
                            key={product.id}
                            style={{ backgroundColor: "beige", padding: 16, display: "flex", flexDirection: "column", cursor: "pointer" }}
                            onClick={() => setSelectedItem("product" + index)}
                        >
                            <p style={{ flex: 1 }}>{product.title}</p>
                            <p>$ {product.price}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Grid;
