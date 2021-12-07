import { Link } from 'react-router-dom';

const TalkHistoryHeader = () => {

  return (
    <>
    <div className="path">
      <Link to="/">Lemon</Link>
      / <Link to="/talk">Discussions</Link>
      / Edit history
    </div>
    <div className="title">
      <Link to="/talk" className="back page-header-back">
        <img src="/img/back.svg" />
      </Link>
      <h1>
        <span className="sub-title">"Lemon" discussions were last updated 6 days ago</span>
      </h1>
      <a id="help" className="button right">
        <span>Help</span>
      </a>
    </div>
    </>
  )
}

export default TalkHistoryHeader;
