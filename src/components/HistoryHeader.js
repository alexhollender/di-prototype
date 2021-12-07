import { Link } from 'react-router-dom';

const HistoryHeader = () => {

  return (
    <>
    <div className="path">
      <Link to="/">Lemon</Link>
       / Edit history
    </div>
    <div className="title">
      <Link to="/" className="button page-header-back">
        <img src="/img/back.svg" />
      </Link>
      <h1>
        <span className="sub-title">"Lemon" was last edited 3 days ago</span>
      </h1>
      <a id="help" className="button right">
        <span>Help</span>
      </a>
    </div>
    </>
  )
}

export default HistoryHeader;
