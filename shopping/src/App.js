import {useState} from "react";
import './App.css';

function App() {
    //TODO: simple design: Simple Navigation and Background

    const [homePage, setHomePage] = useState(true);

    const setCartButtonJob = () => {
        const cartButtonElement = document.getElementsByClassName("products--cart")[0];
        cartButtonElement.onclick = function () {setHomePage(false)}
    }

    return (
      <div className="App" onClick={() => setCartButtonJob()}>
          <div id="root--cart" className={`shopping_component${homePage ? '--hidden' : ''}`}/>
          <div id="root--products" className={`shopping_component${!homePage ? '--hidden' : ''}`}/>
      </div>
    );
}

export default App;
