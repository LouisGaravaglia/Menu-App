import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function SnacksAmount({snacks}) {
    const snackLength = snacks.length;
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
      </section>
    );
}

export default SnacksAmount;



