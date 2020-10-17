import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ category, title, menuItems }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {category} Menu
          </CardTitle>
          <CardText>
            {title}
          </CardText>
          <ListGroup>
            {menuItems.map(item => (
              <Link to={`/${category}s/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
