import { memo } from "react";

function MenuDetail({ product }) {
    console.log("DETAIL", product);
    return (
        <>
            {product && (
                <div style={{ margin: 12 }}>
                    <h4>Detail</h4>
                    <li>{product}</li>
                    {/* <li>{product?.title}</li>
                    <li>$ {product?.price}</li> */}
                </div>
            )}
        </>
    );
}

function productPropsAreEqual(prevProduct, nextProduct) {
    console.log("COMPARE", prevProduct.product, nextProduct.product);
    const result = prevProduct.product?.length === nextProduct.product?.length;
    // console.log("COMPARE", result);
    return result;
}
export const MemoizedMenuDetail = memo(MenuDetail, productPropsAreEqual);

export default MenuDetail;
