import Products from "./Products.jsx";
import Form from "./Form.jsx";

const Order = () => {

    const productList = [
        {
            id: "1",
            number: 2,
            title: "Adidas Forum Mid",
            price: 259,
        },
        {
            id: "2",
            number: 1,
            title: "Raebook Air 5",
            price: 319,
        }
    ];

    //TODO: Get products (in cart) from server

    const sendOrder = (fullName, address, phoneNumber) => {
        console.log(fullName);
        console.log(address);
        console.log(phoneNumber);
        console.log("He ordered");
        console.log("2x Adidas Forum Mid");
        console.log("1x Raebook Air 5");
        console.log("TOTAL: 837 EUR");
    }

    //TODO: Send order to server

    return(
        <div>
            <Products productList={productList} />
            <Form sendOrder={sendOrder}/>
        </div>
    );
}

export default Order;
