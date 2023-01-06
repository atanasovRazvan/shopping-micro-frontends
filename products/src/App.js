import ProductList from "./components/ProductList.jsx";


function App({cartClicked}) {
    return(
        <ProductList cartClicked={cartClicked}/>
    )
}

export default App;
