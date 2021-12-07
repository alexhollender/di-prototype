import { Link } from 'react-router-dom';
import TalkToolbar from "./TalkToolbar";

const TalkHeader = ({ page }) => {

  return (
    <>
    <div className="path">
      <Link to="/">Lemon</Link>
       / Discussions
    </div>
    <div className="title">
      <Link to="/" className="page-header-back button">
        <img src="/img/back.svg" />
      </Link>
      <h1>
        <span className="sub-title">5 active discussions about "Lemon"</span>
      </h1>
    </div>
    <div className="toolbar">
      <TalkToolbar />
    </div>
    </>
  )
}

export default TalkHeader;
