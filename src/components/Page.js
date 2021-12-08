import Header from "./Header";
import PageContent from "./PageContent";
import '../Page.scss';

const Page = ({ page, layout }) => {

  return (
    <div id="page-container" className={layout}>
      <div id="panel"><img src="/img/content.svg" /></div>
      <div id="content-container">
        <Header page={page} />
        <PageContent page={page} />
      </div>
    </div>
  )
}

export default Page;
