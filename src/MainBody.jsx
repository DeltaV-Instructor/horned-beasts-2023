import React from "react";
import Pizza from "./Pizza";
class Mainbody extends React.Component {
  render() {
    return (
      <>
        <main>
          {/* we need to give this component some data to display with the template Pizza  */}
      
          <Pizza
            pizzaPie="New York Thin"
            imageURL="https://thumbs.dreamstime.com/z/pizza-different-tastes-vegetables-cooking-91039243.jpg"

          />
          <Pizza
            pizzaPie="Chicago Deep Dish"
            imageURL="https://thumbs.dreamstime.com/z/pizza-different-tastes-vegetables-cooking-91039243.jpg"

          />
          <Pizza
            pizzaPie="Oven Grinder"
            imageURL="https://thumbs.dreamstime.com/z/pizza-different-tastes-vegetables-cooking-91039243.jpg"

          />
          <Pizza
            pizzaPie="Brick Oven"
            imageURL="https://thumbs.dreamstime.com/z/pizza-different-tastes-vegetables-cooking-91039243.jpg"

          />
         
        </main>
      </>
    );
  }
}

export default Mainbody;
