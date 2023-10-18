import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Col from 'react-bootstrap/Col';
import {Card, Button, Col} from 'react-bootstrap';
import "./App.css";
import "./Pizza.css";

class Pizza extends React.Component {
  //add a constructor function add state
  constructor(props) {
    super(props);
    this.state = {
      //can have several properties
      //tally our counting of likes
      likes: 0,
      pizzaNeed: false,
      //we can also assign default values to make state more readable
      //global variable would update only one value and not render correct state to the user.
    };
  }
  //we are going to add some arrow function to help us manage state.
  handleLikes = () => {
    console.log("handle the like");
    //lets update state
    this.setState({
      likes: this.state.likes + 1,
      //we want to update something else in state.
    });
  };

  pizzaNeeded = () => {
    console.log("proof of life");
    this.setState({
      pizzaNeed: true,
    });
  };

  pizzaGot = () => {
    this.setState({
      pizzaNeed: false,
    });
  };

  render() {
    // console.log("we got props?", this.props.crust);
    // console.log(this.state.likes);
    return (
      <>
      <Col>

      
        <Card className="h-100 p-3">
          <Card.Body>
            <Card.Title>{this.props.pizzaPie}</Card.Title>

            <Card.Img
              variant="top"
              src={this.props.imageURL}
              alt={this.props.pizzaPie}
              title={this.props.pizzaPie}
            />

            <h3>{this.props.pizzaPie}</h3>
            <p>{this.state.likes} Likes</p>
            <p onClick={this.handleLikes}>Click to like this pizza!</p>

            <div>{this.state.pizzaNeed ? "I Got Pizza!" : "I need Pizza!"}</div>
            {/* add two buttons  */}
            <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
            <Button variant="success" onClick={this.pizzaGot}>
              I got Pizza!
            </Button>
          </Card.Body>
        </Card>

        </Col>
        {/* <article>
          <h3>{this.props.pizzaPie}</h3>
          <p>{this.state.likes} Likes</p>
          <p onClick={this.handleLikes}>Click to like this pizza!</p>
        </article>
        <img
          src={this.props.imageURL}
          alt={this.props.pizzaPie}
          title={this.props.pizzaPie}
        />
        <div>{this.state.pizzaNeed ? "I Got Pizza!" : "I need Pizza!"}</div>
        <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
        <Button variant="success" onClick={this.pizzaGot}>
          I got Pizza!
        </Button> */}
      </>
    );
  }
}

export default Pizza;
