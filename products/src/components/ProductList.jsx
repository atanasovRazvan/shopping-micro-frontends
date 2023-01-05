import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import './styles/product-list.css'
import {useState, useEffect} from "react";

const fakeProduct = {
    id: "2po1nP(JFQ",
    title: "Adidas Forum Mid",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSource: "https://static.footshop.com/626560-full_product/132967.jpg",
    price: "259 EUR",
};

const ProductList = () => {

    const [numberOfItems, setNumberOfItems] = useState(0);
    const [products, setProducts] = useState([]);

    const addToCart = (id) => {
        //TODO: Backend call for adding to cart
        console.log(id);
        setNumberOfItems(numberOfItems+1);
    }

    useEffect(() => {
        //TODO: Backend call for getting all the products
        setProducts(Array(10).fill(fakeProduct));
    }, [])

    return (
        <div className="products">
            <div className="products--wrapper">
                {
                    products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            imageSource={product.imageSource}
                            price={product.price}
                            addToCart={addToCart}
                        />
                    ))
                }
            </div>
            <div className="products--cart">
                <Cart number={numberOfItems}/>
            </div>
        </div>

    );
}

export default ProductList;
