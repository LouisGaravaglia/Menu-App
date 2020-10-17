import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";


function AddForm({route}) {
    const INITIAL_STATE = 
        {
          "id": "",
          "name": "",
          "description": "",
          "recipe": "",
          "serve": ""
        }
      
 const [formData, setFormData] = useState(INITIAL_STATE);

 const handleChange = (e) => {
     const {name, value} = e.target;
     setFormData(fData => ({
        ...fData,
        [name]: value
      }));
 }
 const handleSubmit = () => {
    SnackOrBoozeApi.addDrink(formData, route)
    setFormData(INITIAL_STATE);
 }

  return (
    <Card>
    <CardBody>
      <CardTitle className="font-weight-bold text-center">
        Add {route}!
      </CardTitle>
      <CardText className="font-italic"></CardText>
      <form onSubmit={handleSubmit}>
        <input 
            className="col"
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
        />
        <input 
            className="col"
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
        />
        <input 
            className="col"
            type="text"
            name="recipe"
            placeholder="recipe"
            onChange={handleChange}
        />
        <input 
            className="col"
            type="text"
            name="serve"
            placeholder="serve"
            onChange={handleChange}
        />
        
        <CardTitle className="text-center">
        <button>Submit</button>
      </CardTitle>
    </form>
    </CardBody>
    </Card>

  );
}

export default AddForm;


