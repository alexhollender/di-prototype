import { Link } from "react-router-dom";
import Article from "./Article";
import '../PageContent.scss';

const PageContent = ({ page }) => {

  return (
    <>
    <main id="page-content">
      {page === 'article' &&
        <Article />
      }
      {page === 'history' &&
        <Link to="/diff">
          <img src="/img/history.png" />
        </Link>
      }
      {page === 'diff' &&
        <img src="/img/diff.png" />
      }
      {page === 'edit' &&
        <img src="/img/article-edit.png" />
      }
      {page === 'talk' &&
        <img src="/img/talk.png" />
      }
      {page === 'talk-history' &&
        <img src="/img/talk-history.png" />
      }
      {page === 'talk-edit' &&
        <img src="/img/talk-edit.png" />
      }
      {page === 'user' &&
        <img src="/img/user.png" />
      }
      {page === 'user-dashboard' &&
        <img src="/img/user-dashboard.png" />
      }
      {page === 'special' &&
        <Link to="/history">
          <img src="/img/recentchanges.png" />
        </Link>
      }
    </main>
    </>
  )
}

export default PageContent;
