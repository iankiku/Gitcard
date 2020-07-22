import React from 'react';
import './App.css';
import { Button, Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import  axios from 'axios'
// //.. api data source https://api.github.com/users


//function component
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card {...profile} key={profile.id+1} />)}
  </div>
)


// class component
class Card extends React.Component {

  render() {
    const profile = this.props;


    return (
      <Container maxWidth="sm">
        <div className="git-profile">
          <img src={profile.avatar_url} alt="avatar" />
          <div className="info">
            <div className="name">{profile.name} </div>
            <div className="item">{profile.email} </div>
            <div className="item">{profile.bio} </div>
            <div className="item">{profile.company} </div>
            <div className="item">{profile.organizations_url} </div>
            <div className="item">{profile.location} </div>
            <div className="item">{profile.twitter_username} </div>
            <div className="item">{profile.blog}</div>
            <div className="item">{profile.hireable} </div>
            <div className="item">{profile.followers} </div>
          </div>
        </div>
      </Container>
    );
  }
}
// class component
class Form extends React.Component {
  // submit fnct
  state = { userName: ''};

  handleSubmit = async (e) => {
    e.preventDefault();
    var url= "https://api.github.com/users/"
    //get data from github with axios

    const response = await axios.get(`${url}${this.state.userName}`)

    this.props.onSubmit(response.data)
    this.setState({ userName: '' })

  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter GitHub Username" 
        //ref={this.userNameInput}  instead of using ref use a state object
        value={this.state.userName}
        onChange={event=>this.setState({ userName: event.target.value })}
        required />
        <button>Add Card</button>
      </form>
    );
  }
}




class App extends React.Component {


  state = {
    profiles: [],
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  } 

  render() {
    return (<div>

      <AppBar position="static">
        <Toolbar>
          <div className="header">{this.props.title}</div>
        </Toolbar>
      </AppBar>

      <Form onSubmit={this.addNewProfile}/>

      <CardList profiles={this.state.profiles} />
    </div>);
  }
}




export default App;
