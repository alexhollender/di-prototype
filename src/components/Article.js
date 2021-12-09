import React from 'react';
import '../Article.scss';

class Article extends React.Component {
  constructor(props) {
    super(props);
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
          var page = document.getElementById('page');
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
