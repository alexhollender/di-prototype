import React from 'react';
import '../Article.scss';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.handleSectionClick = this.handleSectionClick.bind(this);
    this.state = {
      html: ''
    };
  }

  componentDidMount() {
    fetch('https://en.wikipedia.org/api/rest_v1/page/html/Lemon')
    .then(result => result.text())
    .then(
        (html) => {
          this.setState({
            html: html
          });
          // create an array with all sections
          let sectionsArray = document.querySelectorAll('section');
          // add click listener for each section
          sectionsArray.forEach(item => {
            item.addEventListener('click', e => {
              // call handleSectionClick on clicked section
              this.handleSectionClick(e.currentTarget);
            })
          });
          var base = document.getElementsByTagName('base');
          base[0].href = '';
        },
        (error) => {
          this.setState({
            html: 'error'
          });
        }
      )
  }

  handleSectionClick = (section) => {
    // remove active class from all sections
    let allSections = document.querySelectorAll('section');
    allSections.forEach(item => {
      item.classList.remove('active');
    });
    // add active class to clicked section
    section.classList.add('active');
  }

  render() {
    return (
      <>
      <p id="from-Wikipedia-tagline">From Wikipedia, the free encyclopedia</p>
      <div
        id="data-from-API"
        dangerouslySetInnerHTML={{__html: this.state.html}}
      />
      </>
    );
  }
}

export default Article;
