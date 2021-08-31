import React, { useEffect, useRef } from 'react';
import './App.css';
import img from './Images/01.jpg';
import VanillaTilt from 'vanilla-tilt';
import Particle from 'react-particles-js';
import particlesConfig from'./assets/particlesConfig.json';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
function App() {
  const options = {
    scale: 1.2,
    speed: 2000,
    max: 30,
    glare: true,
    "max-glare": 0.2,
    easing:.03,

  };
  return (<>
  
  <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
         <div className="wrapper" >
    <Tilt options={options}>
    <Card image={img} title="Hello Card" description="This is my first card"/>
    </Tilt>
    <Tilt options={options}>
    <Card image={img} title="Hello Card" description="This is my Second card"/>
    </Tilt>
    </div>
    <div className="wrapper" options={options}>
    <Tilt options={options}>
    <Card image={img} title="Hello Card" description="This is my Third card"/>
    </Tilt>
    <Tilt options={options}>
    <Card image={img} title="Hello Card" description="This is my Fourth card"/>
    </Tilt>
    </div>
      </div>
  </>
  );
}
function Card(props){
  return(
    <div className="card" data-tilt-glare data-tilt-max-glare="0.8">
      <div className="card_body">
       <img className="card_image" src={props.image} alt=""/>
       <h2 className="card_title">{props.title}</h2>
       <p className="card_description">{props.description}</p>
      </div>
      <button className="card_button">Details</button>
      <script type="text/javascript" src="vanilla-tilt.js"></script> 
    </div>
  )
}
export default App;
