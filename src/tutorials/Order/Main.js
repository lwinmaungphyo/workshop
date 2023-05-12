import { useState } from "react";
import DataTable from "./DataList/DataTable";
import MenuDetail, { MemoizedMenuDetail } from "./MenuDetail";

function Main() {
    const [showCart, setShowCart] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    return (
        <div style={{ display: "flex", backgroundColor: "beige" }}>
            <div
                style={{
                    display: "flex",
                    width: `${showCart ? "80%" : "100vw"}`,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <DataTable setSelectedItem={setSelectedItem} />
                    {/* <MenuDetail product={selectedItem} /> */}
                    <MemoizedMenuDetail product={selectedItem} />
                </div>
                <button style={{ height: 30, marginTop: 12 }} onClick={() => setShowCart((prev) => !prev)}>
                    Cart
                </button>
            </div>
            <div style={{ width: `${showCart ? "20%" : 0}` }}>
                <div style={{ padding: 8 }}>
                    <h3>Cart</h3>
                </div>
            </div>
        </div>
    );
}

export default Main;
