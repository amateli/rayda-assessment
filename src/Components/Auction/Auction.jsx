import css from './Auction.module.css'

const AuctionCard = () => {
    return ( 
       <>
         <div className={css.section}>
            <div className={css.background}>
              <img src="../Image/Background-Image.svg" alt="DesktopImage"/>
            </div>
            <div className={css.logo}>
              <img src="../Image/logo.svg" alt="logo"/>
            </div>
            <div className={css.textBox}>
              <div className={css.text}>
                <h2>Starts in: 3 days : 2 hours : 24 minutes</h2>
                <div className={css.statusContainer}>
                  <div className={css.status}>
                    <div></div>
                    <p>Not live</p>
                  </div>
                  <p>Layers Auction</p>
                </div>
              </div>
              <button className={css.inviteBtn}>
                <img src="../Image/thumbsUp.svg" alt="thumb-icon"/>
                <span>Accept Invite</span>
              </button>
            </div>
         </div>
         <div></div>
       </>
     );
}
 
export default AuctionCard;