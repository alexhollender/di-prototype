import { Link } from 'react-router-dom';
import UserToolbar from "./UserToolbar";

const UserHeader = ({ mode }) => {

  return (
    <>
    <div className="path"></div>
    <div className="title">
      <h1>
        <span className="pre-title">User: </span>
        <span className="page-title">Zendaya212</span>
      </h1>
    </div>
    <div className="toolbar">
      <UserToolbar />
    </div>
    </>
  )
}

export default UserHeader;
