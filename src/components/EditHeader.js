import { Link } from 'react-router-dom';

const EditHeader = () => {

  return (
    <>
    <div className="path">
      <Link to="/">Lemon</Link>
       / Edit
    </div>
    <div className="title">
      <Link to="/" className="button page-header-back show">
        <img src="/img/back.svg" />
      </Link>
      <h1>
        <span className="sub-title">Editing "Lemon"</span>
      </h1>
    </div>
    <div className="toolbar edit">
      <img id="edit-toolbar" src="/img/edit-toolbar.svg" />
    </div>
    </>
  )
}

export default EditHeader;
