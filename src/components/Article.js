import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    fetch("https://en.wikipedia.org/api/rest_v1/page/html/Lemon")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            data: result
          });
        },
        (error) => {
          console.log('error');
          this.setState({
            data: 'error'
          });
        }
      )
  }

  render() {
    return (
      <>
      <div>{this.state.data}</div>
      </>
    );
  }
}

export default Article;
