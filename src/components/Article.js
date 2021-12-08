import React from 'react';

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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <>
      <div
        dangerouslySetInnerHTML={{__html: this.state.html}}
      />
      </>
    );
  }
}

export default Article;
