// IMPORT ANY NEEDED COMPONENTS HERE
import { Dataset } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import { useState } from "react";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";
// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!

export function App() {
  const { data, categories, restaurants } = Dataset.createDataSet()


  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRestaurant, setselectedRestaurant] = useState(null);
  const [selectedItem, setSelectedItem] = useState("")

  const currentMenuItems = data.filter((item)=> {
    if (item.food_category === selectedCategory &&
        item.restaurant === selectedRestaurant){
          return true;
        }
        return false;
  })
  // console.log(categories);

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}

          {
            categories.map( (category) =>{
              const isBurgers = (category === selectedCategory) ? true : false;

              return (<Chip 
                        key={category} 
                        isActive = {isBurgers} 
                        label= {category}
                        onClick={
                          () => {
                            console.log(`${category}`)
                            setSelectedCategory(category)
                          }}
                        />)
            })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title= {appInfo.title} tagline ={appInfo.tagline} description= {appInfo.description} />

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{restaurants.map( (restaurant) =>{ 
          const isRestaurant = (restaurant === selectedRestaurant) ? true : false;

          return (<Chip 
            key={restaurant} 
            isActive = {isRestaurant} 
            label = {restaurant} 
            onClick={
            () =>{
              setselectedRestaurant(restaurant)
          }}
          />)

          })}
          </div>
        </div>
        

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instruction = {appInfo.instructions.start} start ={appInfo.instructions.start} />
        
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {
              currentMenuItems.map((item)=> {
                return (<Chip 
                  key={item.item_description} 
                  label = {item.item_name} 
                  onClick={
                  ()=>{
                    setSelectedItem(item)
                }}
                />)
                
              })}
          
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{/* YOUR CODE HERE */}
          <NutritionalLabel item = {selectedItem} />
          
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
