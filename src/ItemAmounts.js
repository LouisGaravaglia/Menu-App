import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function ItemAmounts({snacks, drinks}) {
    const snackLength = snacks.length;
    const drinkLength = drinks.length;
    return (
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
              Snacks Available: {snackLength}
              </h3>
            </CardTitle>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
              Drinks Available: {drinkLength}
              </h3>
            </CardTitle>
          </CardBody>
        </Card>
      </section>
    );
}

export default ItemAmounts;



