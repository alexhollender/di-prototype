import Header from "./Header";
import PageContent from "./PageContent";
import '../Page.scss';

const Page = ({ page }) => {

  return (
    <>
    <Header page={page} />
    <PageContent page={page} />
    </>
  )
}

export default Page;
