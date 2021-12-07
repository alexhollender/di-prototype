import { Link } from 'react-router-dom';

const DiffHeader = () => {

  return (
    <>
    <div className="path">
      <Link to="/">Lemon</Link>
      / <Link to="/history">Edit history</Link>
      / Diff
    </div>
    <div className="title">
      <Link to="/history" className="button page-header-back">
        <img src="/img/back.svg" />
      </Link>
      <h1>
        <span className="sub-title">Difference between revisions of "Lemon"</span>
      </h1>
      <a id="help" className="button right">
        <span>Help</span>
      </a>
    </div>
    </>
  )
}

export default DiffHeader;
