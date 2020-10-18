import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";
import App from "./App";
import Item from "./Item";
import Home from "./Home";
import SnacksAmount from "./ItemAmounts";
import AddForm from "./AddForm";

const snacks = [
    {
      "id": "nachos",
      "name": "Nachos",
      "description": "An American classic!",
      "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
      "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
    },
    {
      "id": "hummus",
      "name": "Hummus",
      "description": "Sure to impress your vegan friends!",
      "recipe": "Purchase one container of hummus.",
      "serve": "Place unceremoniously on the table, along with pita bread."
    },
    {
      "id": "arugula-and-walnut-salad",
      "name": "Arugula and Walnut Salad",
      "description": "Tart and delicious.",
      "recipe": "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.",
      "serve": "Place on tiny, precious little plates."
    },
    {
      "id": "tacos",
      "name": "Tacos",
      "description": "Taco Tuesday!",
      "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
      "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
    },
    {
      "id": "guac-dip",
      "name": "Guac Dip",
      "description": "Tasty with chips",
      "recipe": "Avocados smashed",
      "serve": "Put in a bowl dum dum"
    }
  ]

  ////////////////////////////////////////  AddForm  ////////////////////////////////////////

it("renders AddForm component", () => {
    render(<MemoryRouter><AddForm /></MemoryRouter>)
  })
  
  it("should match snapshot", () => {
    const { asFragment } = render(<MemoryRouter><AddForm /></MemoryRouter>)
    expect(asFragment).toMatchSnapshot()
  })

  ////////////////////////////////////////  App  ////////////////////////////////////////

it("renders App", () => {
    render(<App/>)
})

it("should match snapshot", () => {
    const { asFragment } = render(<MemoryRouter><App /></MemoryRouter>)
    expect(asFragment).toMatchSnapshot()
})

//******************************************************************************************** */

//Can't use the below tests because I get a network error. What is the best way to test for this scenario?

//******************************************************************************************** */


////////////////////////////////////////  Home  ////////////////////////////////////////

// it("renders Home", () => {
//     render(<Home/>)
// })

// it("should match snapshot", () => {
//     const { asFragment } = render(<MemoryRouter><Home /></MemoryRouter>)
//     expect(asFragment).toMatchSnapshot()
// })


////////////////////////////////////////  Menu  ////////////////////////////////////////

// it("renders Menu component", () => {
//   render(<MemoryRouter><Menu menuItems={snacks} category="Drink" title="We've made some fancy ass drinks for yo drunk ass."/></MemoryRouter>)
// })

// it("should match snapshot", () => {
//   const { asFragment } = render(<MemoryRouter><Menu menuItems={snacks} category="Drink" title="We've made some fancy ass drinks for yo drunk ass."/></MemoryRouter>)
//   expect(asFragment).toMatchSnapshot()
// })



// it("should render home page", () => {
//     const {getByText} = render(<MemoryRouter initialEntries={['/']}><App/></MemoryRouter>);
//     expect(getByText("Welcome to Silicon Valley's premier dive cafe!")).toBeInTheDocument();
// })
