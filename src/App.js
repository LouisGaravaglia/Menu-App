import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu"
import Item from "./Item";
import ItemAmounts from "./ItemAmounts";
import AddForm from "./AddForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
              <ItemAmounts snacks={snacks} drinks={drinks}   />
            </Route>
            <Route exact path="/snacks">
              <Menu menuItems={snacks} category="Snack" title="Some tasty bites to soak up all booze you're drinking"/>
            </Route>
            <Route exact path="/drinks">
              <Menu menuItems={drinks} category="Drink" title="We've made some fancy ass drinks for yo drunk ass."/>
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add-drink">
              <AddForm route="drinks"/>
            </Route>
            <Route exact path="/add-snack">
              <AddForm route="snacks"/>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;


// The homepage should show the # of food items (“snacks”) and drink choices (“drinks”)
// The navbar should add a new link, “Drinks”, leading to a page listing the drinks — just like the “Snacks” link leads to a page listing food items.
// The drink listing page should show a list of drink choices, with each being a link to the details about the drink, just like for food items.
// However, you shouldn’t solve this by just cloning the FoodMenu and FoodItem components — you’d have so much duplicate code! Instead, turn these into generic components that can work with either food or drink lists/items.
// Now that you have more things on your menu, you should add a page that lets site users add either a drink or a snack.
// Design your app well. We don’t want to see poor names or see AJAX calls buried in your components. Use good design! Test whatever you can!
// Make sure you document your code appropriately. Srsly.
// Make sure you handle not-found pages — if a visitor tries to go to a link that doesn’t work, it should give a friendly 404-style message. If someone tries to go to a drink or food item that doesn’t exist, it should redirect to the drinks or food items listing page.
// The app does not need any kind of login or authentication; everyone can see everything and can add new items.