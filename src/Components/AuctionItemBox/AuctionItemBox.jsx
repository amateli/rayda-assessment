import css from "./AuctionItemBox.module.css";

const AuctionItemBox = ({items}) => {
  
  

  return (
    <>
      {items.map((items, index) => (
        <div className={css.container} key={index}>
          <div className={css.productPreview}>
            <img src={items.image} alt="item" />
          </div>
          <div className={css.textBox}>
            <div className={css.userBio}>
              <div className={css.userInitials}>
                <span>ST</span>
              </div>
              <p>{items.name}<span>(Highest Bidder)</span></p>
            </div>
            <h3 className={css.model}>{items.title}</h3>
            <p className={css.currentBid}>Current Bid: <span>{items.bid}</span></p>
          </div>
          <button>Add to wishlist</button>
        </div>
      ))}
    </>
  );
};

export default AuctionItemBox;
