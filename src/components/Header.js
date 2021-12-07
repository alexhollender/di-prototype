import ArticleHeader from "./ArticleHeader";
import HistoryHeader from "./HistoryHeader";
import DiffHeader from "./DiffHeader";
import EditHeader from "./EditHeader";
import TalkHeader from "./TalkHeader";
import TalkHistoryHeader from "./TalkHistoryHeader";
import TalkEditHeader from "./TalkEditHeader";
import UserHeader from "./UserHeader";
import UserDashboardHeader from "./UserDashboardHeader";
import SpecialHeader from "./SpecialHeader";
import '../Header.scss';

const Header = ({ page }) => {

  return (
    <>
    <header className="page-header">
      {page === 'article' &&
        <ArticleHeader />
      }
      {page === 'history' &&
        <HistoryHeader />
      }
      {page === 'diff' &&
        <DiffHeader />
      }
      {page === 'edit' &&
        <EditHeader />
      }
      {page === 'talk' &&
        <TalkHeader />
      }
      {page === 'talk-history' &&
        <TalkHistoryHeader />
      }
      {page === 'talk-edit' &&
        <TalkEditHeader />
      }
      {page === 'user' &&
        <UserHeader />
      }
      {page === 'user-dashboard' &&
        <UserDashboardHeader />
      }
      {page === 'special' &&
        <SpecialHeader />
      }
    </header>
    </>
  )
}

export default Header;
