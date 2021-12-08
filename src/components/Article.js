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
    .then(function (response) {
    	// The API call was successful!
    	return response.text();
    })
    .then(function (html) {
    	// This is the HTML from our response as a text string
      console.log(html);
      var page = document.getElementById('page');
      page.innerHTML = html;
      var base = document.getElementsByTagName('base');
      base[0].href = '';
    })
    .catch(function (err) {
    	// There was an error
    	console.warn('Something went wrong.', err);
    });
  }

  render() {
    return (
      <>
      <div id="page">{this.state.html}</div>
      </>
    );
  }
}

export default Article;
