import { Link } from "react-router-dom";
import '../Toolbar.scss';

const UserToolbar = () => {

  return (
    <>
    <nav id="toolbar" className="article">
      <Link to="/user-dashboard" className="button">Dashboard</Link>
      <Link to="/user" className="button">Last edited 3 days ago</Link>
      <Link to="/user" className="button">5 discussions</Link>
      <Link to="/user" className="button button-menu">
        <span>More</span>
        <img src="/img/down.svg" />
      </Link>
      <div className="right">
        <Link to="user" className="button"><img src="/img/watch.svg" /></Link>
        <Link to="user" id="edit" className="button button-bold button-primary">Edit</Link>
      </div>
    </nav>
    </>
  )
}

export default UserToolbar;
