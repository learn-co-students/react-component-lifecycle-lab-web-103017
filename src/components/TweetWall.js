import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: props.tweets
    };
  }



  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }

  // this.setState({
  //   tweets: this.props.newTweets
  // })

  //
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: [
        ...nextProps.newTweets,
        ...this.state.tweets
      ]
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   let newArr = []
  //   newArr.push(nextProps.newTweets)
  //   newArr.push(this.state.tweets)
  //   this.setState({
  //     tweets: newArr
  //   })
  // }

  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.newTweets.length > 0)

  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()


  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }

}

export default TweetWall;
