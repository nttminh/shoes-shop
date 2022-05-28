import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productsData, setStateModal }) {

    return (<div className='product-list'>
        {productsData && (
            productsData.map((item, index) => (
                <ProductItem
                    key={item.id}
                    product={item}
                    setStateModal={setStateModal}
                />
            ))
        )}
    </div>
    )
}

export default ProductList