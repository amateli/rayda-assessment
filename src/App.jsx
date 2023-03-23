import React from "react";
import AuctionCard from "./Components/Auction/Auction";
import Header from "./Components/Header/Header"
import AuctionItems from "./Components/AuctionItems/AuctionItems";
import './style.css'

const App = () => {
    return ( 
        <div>
          <Header />
          <AuctionCard />
          <AuctionItems />
        </div>
     );
}
 
export default App;