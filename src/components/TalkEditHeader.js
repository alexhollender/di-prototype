import { Link } from 'react-router-dom';

const TalkEditHeader = () => {

  return (
    <>
    <div className="path">
      <Link to="/">Lemon</Link>
      / <Link to="/talk">Discussions</Link>
      / Edit
    </div>
    <div className="title">
      <Link to="/talk" className="button page-header-back">
        <img src="/img/back.svg" />
      </Link>
      <h1>
        <span className="sub-title">Editing discussions about "Lemon"</span>
      </h1>
    </div>
    <div className="toolbar edit">
      <img id="edit-toolbar" src="/img/edit-toolbar.svg" />
    </div>
    </>
  )
}

export default TalkEditHeader;
