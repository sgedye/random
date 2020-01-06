// https://scrimba.com/p/p7P5Hd/co5c3-3ee909da8e9b
/* All these files work together to produce this:

  We have: Pencil for $1
  Perfect for those who can't remember things! 5/5 Highly recommend.

  We have: Housing for $0
  Housing provided for out-of-state students or those who can't commute

  ...
*/

// index.html
<html>
  <head><link rel="stylesheet" href="style.css"></head>
  <body>
    <div id="root"></div>
    <script src="index.pack.js"></script>
  </body>
</html>


// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
ReactDOM.render(<App />, document.getElementById('root'))


// App.js
import React from "react"
import productsData from "./vschoolProducts"
import Product from "./product.js"
function App() {
  let productList = productsData.map(el => <Product key={el.id} title={el.name} price={el.price} desc={el.description} />);
  return <div>{productList}</div>
}
export default App


// products.js
import React from 'react'
function Product(props) {
    return (
        <div>
            <h3 id={props.id}>We have: {props.title} for ${props.price}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
export default Product


// vschoolProducts.js
const products = [
    {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "Perfect for those who can't remember things! 5/5 Highly recommend."
    },
    {
        id: "2",
        name: "Housing",
        price: 0,
        description: "Housing provided for out-of-state students or those who can't commute"
    },
    {
        id: "3",
        name: "Computer Rental",
        price: 300,
        description: "Don't have a computer? No problem!"
    },
    {
        id: "4",
        name: "Coffee",
        price: 2,
        description: "Wake up!"
    },
    {
        id: "5",
        name: "Snacks",
        price: 0,
        description: "Free snacks!"
    },
    {
        id: "6",
        name: "Rubber Duckies",
        price: 3.50,
        description: "To help you solve your hardest coding problems."
    },
    {
        id: "7",
        name: "Fidget Spinner",
        price: 21.99,
        description: "Because we like to pretend we're in high school."
    },
    {
        id: "8",
        name: "Sticker Set",
        price: 14.99,
        description: "To prove to other devs you know a lot."
    }
]
export default products
