import Card from "./CardComponent";

const ProductItem: React.FC = () => {

    const products = [
        {id: 1, productName: "product 1", description: "description example"},
        {id: 2, productName: "product 1", description: "description example"},
        {id: 3, productName: "product 1", description: "description example"},
        {id: 4, productName: "product 1", description: "description example"},
        {id: 5, productName: "product 1", description: "description example"},
        {id: 6, productName: "product 1", description: "description example"},
        {id: 7, productName: "product 1", description: "description example"},
        {id: 8, productName: "product 1", description: "description example"},
        {id: 9, productName: "product 1", description: "description example"},
        {id: 10, productName: "product 1", description: "description example"}
    ]

    return(
        <div>
            {
                products.map ( product => {
                        return <Card name={ product.productName } description={ product.description }/>
                    }
                )
            }
        </div>
    );
}

export default ProductItem;