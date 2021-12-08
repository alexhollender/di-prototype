import React from 'react';
import { Link } from "react-router-dom";
import '../Toolbar.scss';

class ArticleToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.triggerMenu = this.triggerMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      menu: null
    };
  }

  triggerMenu = (e) => {
    e.stopPropagation();
    var menu = e.currentTarget.getAttribute('menu');
    this.setState({
      menu: menu
    });
  }

  closeMenu = () => {
    this.setState({
      menu: null
    });
  }

  componentDidMount() {
    document.body.addEventListener('click', this.closeMenu);
  }

  render() {
    return (
      <>
      <nav id="toolbar" className="article">
        <Link to="/history" className="button">Last edited 3 days ago</Link>
        <Link to="/talk" className="button">5 discussions</Link>
        <div menu="subpages" className="has-menu" onClick={this.triggerMenu}>
          <a className="button button-menu">
            <span>More</span>
            <img src="/img/down.svg" />
          </a>
          {this.state.menu === 'subpages' &&
            <menu>
              <section>
                <li>What links here</li>
                <li>Related changes</li>
              </section>
              <section>
                <li>Permanent link</li>
                <li>Page information</li>
                <li>Wikidata item</li>
                <li>Page size</li>
              </section>
            </menu>
          }
        </div>
        <div className="right">
          <div menu="actions" className="has-menu" onClick={this.triggerMenu}>
            <a className="button"><img src="/img/more.svg" /></a>
            {this.state.menu === 'actions' &&
              <menu>
                <section>
                  <li>Cite this page</li>
                  <li>Add interlanguage links</li>
                  <li>Download as PDF</li>
                  <li>Printable version</li>
                </section>
              </menu>
            }
          </div>
          <div menu="watch" className="has-menu" onClick={this.triggerMenu}>
            <a className="button"><img src="/img/watch.svg" /></a>
            {this.state.menu === 'watch' &&
            <menu>
              <section>
                <li>Watch menu</li>
              </section>
            </menu>
            }
          </div>
          <Link to="/edit" id="edit" className="button button-with-icon button-bold button-primary">
            <img src="/img/edit.svg" />
            <span>Edit</span>
          </Link>
        </div>
      </nav>
      </>
    );
  }
}

export default ArticleToolbar;
