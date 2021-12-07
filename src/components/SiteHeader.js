import { Link } from "react-router-dom";
import '../Buttons.scss';
import '../SiteHeader.scss';

export default function SiteHeader() {

  return (
    <>
    <header id="site-header">
      <Link to="special" className="button button-icon" id="menu-button">
        <img src="/img/menu.svg" />
      </Link>
      <Link to="/">
        <div id="logo">
          <img id="globe" src="/img/globe.png" />
          <div id="wordmark-tagline">
            <img id="wordmark" src="/img/wordmark.svg" />
            <img id="tagline" src="/img/tagline.svg" />
          </div>
        </div>
      </Link>
      <div id="search-container">
        <div className="search-icon"></div>
        <input placeholder="Search Wikipedia" className="search-input" />
        <button className="search-button">
          <p>Search</p>
        </button>
      </div>
      <div id="user-links">
        <Link to="user" className="button button-bold">Zendaya212</Link>
        <a className="button button-icon">
          <img src="/img/bell.svg" />
        </a>
        <a className="button button-icon">
          <img src="/img/more.svg" />
        </a>
      </div>
    </header>
    </>
  )
}
