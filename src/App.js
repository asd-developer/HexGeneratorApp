import React, {useEffect} from 'react';
import Hex from './Modular/hex'
import Rgb from './Modular/rgb'
import './App.css';

const App = (props) => {

  useEffect(()=>{
    hexColorHandler()
  },[]);

// STATE HOOKS

  // HEX STATE
  const [hexState, setHexState] = React.useState({
    color: [
      {hex: ''}
    ]
  })
  // RGB STATE
  const [rgbState, setrgbState] = React.useState({
    color: [
      {r: '',g: '',b: ''}
    ]
  })

  // TEXT COLOR STATE
  const [textColorstate, setTextColorState] = React.useState({
    color: [
      {textColor: ''}
    ]
  })

  //HEX COLOR GENERATOR
  const hexColorHandler = () =>{
    const hexGenerator = '#'+(Math.random()*0xFFFFF << 0).toString(16).padStart(6,'0');
    setHexState({color:[{hex: hexGenerator}]});
    hexToRGB(hexState.color[0].hex)
  }

  const hexToRGB = (c) =>{
    if(/^#([a-f0-9]{3}){1,2}$/.test(c)){
      if(c.length==4){
        c= '#'+[c[1],c[1],c[2],c[2],c[3],c[3]].join('')
      }
      c = '0x'+c.substring(1)
      const rgb = {r: (c>>16)&255, g: (c>>8)&255, b: c&255}
      console.log(rgb)
      luminanceHandler(rgb)
      setrgbState({color: {r: (c>>16)&255, g: (c>>8)&255, b: c&255}})
    }
  }

  const luminanceHandler = (rgb) => {

  }

  return (
    <div className="App" style={{backgroundColor: hexState.color[0].hex}} onClick={hexColorHandler}>
      <h1> Click anywhere to change color!</h1>
      <Hex color={hexState.color[0].hex}/>
      <Rgb/>
    </div>
  );
}

export default App;
