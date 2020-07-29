import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: "",
    rating: 2.5
  },
  {
    id: 2,
    name: "Pizza",
    image: "",
    rating: 8.1
  },
  {
    id: 3,
    name: "Kimbap",
    image: "",
    rating: 3.1
  },
  {
    id: 4,
    name: "Hambuger",
    image: "",
    rating: 8.7
  },
  {
    id: 5,
    name: "Pork belly",
    image: "",
    rating: 7.5
  }
];

function Food({name, picture, rating}){
  //console.log(props);
  return (
    <div>
      <h2>I don't like {name}!</h2>
      <h3>{rating}/10.0</h3>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired // without 'isRequired', undefined is acceptable
}

function App() {
  return (
  <div>
    <h1>Hello from the other side of the world...</h1>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
  </div>
  );
}

export default App;

//<Food fav="kimchi" /> {/*give property 'fav' which has value 'kimchi' to 'Food' component*/}
//'.map' does specific funtion to all item in the array.
// passed parameter dish in '.map' is an object.