import css from './Header.module.css'

const Header = () => {
    return (  
      <nav className={css.headerNav}>
        <div className={css.headerText}>
          <h1>Welcome</h1>
          <p>Your current sales auction and activity.</p>
        </div>
        <figure className={css.headerIcon}>
          <img src="../Image/NotificationIcon.svg" alt="Notification-Icon" />
          <div className={css.number}>2</div>
        </figure>
      </nav>
     );
}
 
export default Header;
 