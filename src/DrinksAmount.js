import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


function DrinksAmount({drinks}) {
    const drinksLength = drinks.length;
  return (
    <section className="col-md-8">
    <Card>
      <CardBody className="text-center">
        <CardTitle>
          <h3 className="font-weight-bold">
          Drinks Available: {drinksLength}
          </h3>
        </CardTitle>
      </CardBody>
    </Card>
  </section>
  );
}

export default DrinksAmount
;
