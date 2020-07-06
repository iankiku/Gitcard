import React from 'react';
import './App.css';
// //.. api data source https://api.github.com/users

const testdata = [
  {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Tom Preston-Werner",
      "company": null,
      "blog": "http://tom.preston-werner.com",
      "location": "San Francisco",
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 61,
      "public_gists": 62,
      "followers": 22033,
      "following": 11,
      "created_at": "2007-10-20T05:24:19Z",
      "updated_at": "2020-06-24T19:57:44Z"
    }, {
      "login": "pjhyett",
      "id": 3,
      "node_id": "MDQ6VXNlcjM=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pjhyett",
      "html_url": "https://github.com/pjhyett",
      "followers_url": "https://api.github.com/users/pjhyett/followers",
      "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
      "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
      "organizations_url": "https://api.github.com/users/pjhyett/orgs",
      "repos_url": "https://api.github.com/users/pjhyett/repos",
      "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pjhyett/received_events",
      "type": "User",
      "site_admin": false,
      "name": "PJ Hyett",
      "company": "GitHub, Inc.",
      "blog": "https://hyett.com",
      "location": "San Francisco",
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 8,
      "public_gists": 21,
      "followers": 8215,
      "following": 30,
      "created_at": "2008-01-07T17:54:22Z",
      "updated_at": "2020-05-08T03:10:49Z"
    }]

//function component
const CardList =(props) =>(
  <div>
    <Card {...testdata[0]}/>
    <Card {...testdata[1]}/>
  </div>
)


// class component
class Card extends React.Component {

  render() {
    const profile = this.props;


    return (
    <div className="git-profile">
      <img src={profile.avatar_url} alt="avatar"/>
      <div className="info">
        <div className="name">{profile.name} </div>
        <div className="name">{profile.email} </div>
        <div className="name">{profile.bio} </div>
        <div className="name">{profile.company} </div>
        <div className="name">{profile.organizations_url} </div>
        <div className="name">{profile.location} </div>
        <div className="name">{profile.twitter_username} </div>
        <div className="name">{profile.blog}</div>
        <div className="name">{profile.hireable} </div>
        <div className="name">{profile.followers} </div> 
      </div>
      </div>
      );
  }
}




class App extends React.Component {
  // constructure
  // this


  render() {
    return (<div>
      <div className="header">{this.props.title}</div>
      <CardList/>
    </div>);
  }
}




export default App;
