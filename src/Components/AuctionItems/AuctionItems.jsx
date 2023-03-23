import { useEffect, useState } from 'react';
import AuctionItemBox from '../AuctionItemBox/AuctionItemBox';
import css from './AuctionItems.module.css'

const AuctionItems = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "John Doe",
      title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
      bid: "₦795,000",
      image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png"
    },
    {
      id: 2,
      name: "Peter Doe",
      title: "Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold",
      bid: "₦795,000",
      image: "https://i.ibb.co/h7Bts6w/Imagelaptop.png"
    },
  ]);
  
  useEffect(() =>{
    fetch('')
  });

  return ( 
        <>
          <div className={css.itemsContainer}>
            <div className={css.heading}>
              <h2>Featured Items</h2>
              <button>View Auction</button>
            </div>
            <div className={css.items}>
              <AuctionItemBox items={items}/>
            </div>
          </div>
        </>
     );
}
 
export default AuctionItems;