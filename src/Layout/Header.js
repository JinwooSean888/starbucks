function Header() {
  return (
    <>
      <header>
        <div>
          <img src="/images/logo.png"></img>
        </div>
        <div>
          {/* {sub header} */}
          <div className="sub-Header">
            <ul className="header-ul">
              <li>
                <a herf="/sign_in"> sign in</a>
              </li>
              <li>
                <a herf="/my"> My Starbucks</a>
              </li>
              <li>
                <a herf="/customer"> Customer Service</a>
              </li>
            </ul>
          </div>
          {/* main header */}
          <div className="main-header">
            <ul className="header-ul">
              <li>
                <a href="/coffee">coffee</a>
              </li>
              <li>
                <a href="/menu">menu</a>
              </li>
              <li>
                <a href="/store">store</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
