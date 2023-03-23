import { useEffect, useState } from 'react';
import AuctionItemBox from '../AuctionItemBox/AuctionItemBox';
import css from './AuctionItems.module.css'

const AuctionItems = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() =>{
    fetch('https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setItems(data.data);
      })
  }, []);

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