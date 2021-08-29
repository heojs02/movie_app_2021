import React from 'react';

function Food({name}){
  return (
    <h3> I love {name}</h3>
  )
}
const foodILike =[
  {id:1, name:'Kimchi'},
  {id:2, name:'Ramen'},
  {id:3, name:'Samgiopsal'},
  {id:4, name:'Chukumi'}
];

function renderFood(dish){
  return <Food key = {dish.id} name ={dish.name} />;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
