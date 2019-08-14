import React from 'react'

const items = [
    {
        id: 1,
        name: 'Product 1'
    },
    {
        id: 2,
        name: 'Product 2'
    },
    {
        id: 3,
        name: 'Product 3'
    },
    {
        id: 4,
        name: 'Product 4'
    },
    {
        id: 5,
        name: 'Product 5'
    }
]

const styles = {
    color: 'red',
    marginLeft: '120px',
    fontSize: 40
}

const ProductList = props => (
    <div className="container">
        <ul>
            {items.map(item => {
                return <li style={styles} key={item.id}>{item.name}</li>
            })}
        </ul>
    </div>
)

export default ProductList