import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    const { robots } = this.props;
    const cardComponent = robots.map((robot, i) => (
      <Card 
        key={i} 
        id={robot.id} 
        name={robot.name} 
        email={robot.email} 
      />
    ));
    return <div>{cardComponent}</div>;
  }
}

export default CardList;
