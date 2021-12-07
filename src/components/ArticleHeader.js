import ArticleToolbar from "./ArticleToolbar";

const ArticleHeader = () => {

  return (
    <>
    <div className="path"></div>
    <div className="title">
      <h1>
        <span className="page-title">Lemon</span>
      </h1>
      <a id="languages" className="button button-with-icon button-menu button-bold right">
        <img src="/img/languages.svg" />
        <span>205 Languages</span>
        <img src="/img/down.svg" />
      </a>
    </div>
    <div className="toolbar">
      <ArticleToolbar />
    </div>
    </>
  )
}

export default ArticleHeader;
