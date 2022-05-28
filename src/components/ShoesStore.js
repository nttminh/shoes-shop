import React, { useState } from 'react'
import products from "../data.json";
import Modal from './Modal';
import ProductList from './ProductList';


function ShoesStore({ children }) {
    const [stateModal, setStateModal] = useState(false);
    const [productDetail, setProductDetail] = useState();

    const handleOpen = (product) => {
        setStateModal(true);
        setProductDetail(product)
    };
    const handleClose = () => setStateModal(false);
    
    return (
        <>
            <ProductList productsData={products} setStateModal={handleOpen}>
                <div>{children}</div>
            </ProductList>
            <Modal content={productDetail} open={stateModal} handleClose={handleClose} />
        </>
    )
}

export default ShoesStore