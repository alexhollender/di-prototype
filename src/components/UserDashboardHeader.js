import { Link } from 'react-router-dom';

const UserDashboardHeader = () => {
  return (
    <>
    <div className="path">
      <Link to="/user">Zendaya212</Link>
      / Dashboard
    </div>
    <div className="title">
      <Link to="/user" className="button page-header-back">
        <img src="/img/back.svg" />
      </Link>
      <h1>
        <span className="sub-title">Your dashboard</span>
      </h1>
    </div>
    </>
  )
}

export default UserDashboardHeader;
