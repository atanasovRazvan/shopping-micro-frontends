import {Typography} from "@mui/material";
import './styles/products.css'

const Products = ({productList}) => {

    const computePrice = () => {
        let total = 0;
        productList.forEach((product) => total += product.number * product.price)
        return total;
    }

    return (
        <div className="cart_products">
            {
                productList.map((product) => (
                    <Typography
                        key={product.id}
                        variant="body"
                    >
                        {product.number}x {product.title.toUpperCase()}
                    </Typography>
                ))
            }
            <Typography variant="h6">
                Total: <span className="cart_price--red">{computePrice()} EUR</span>
            </Typography>
        </div>
    )
}

export default Products;
