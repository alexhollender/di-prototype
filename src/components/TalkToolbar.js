import { Link } from "react-router-dom";
import '../Toolbar.scss';

const TalkToolbar = () => {

  return (
    <>
    <nav id="toolbar" className="article">
      <Link to="/talk-history" className="button">Last edited 6 days ago</Link>
      <Link to="/talk" className="button button-menu">
        <span>More</span>
        <img src="/img/down.svg" />
      </Link>
      <div className="right">
        <Link to="/talk-edit" className="button"><img src="/img/edit-source.svg" /></Link>
        <Link to="/talk" id="edit" className="button button-bold button-primary">New section</Link>
      </div>
    </nav>
    </>
  )
}

export default TalkToolbar;
