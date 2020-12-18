import React, {useEffect} from 'react';
import Hex from './Modular/hex'
import Rgb from './Modular/rgb'
import './App.css';

const App = (props) => {
//RUNS ON START
  useEffect(()=>{hexColorHandler()},[]);

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
      {rgb: ''}
    ]
  })

  // TEXT COLOR STATE
  const [textColorstate, setTextColorState] = React.useState({
    color: [
      {textColor: ''}
    ]
  })

  //HEX COLOR GENERATOR
  const hexColorHandler= () =>{
    const hexGenerator = '#'+(Math.random()*0xFFFFF << 0).toString(16).padStart(6,'0');
    setHexState({color:[{hex: hexGenerator}]});
    hexToRGB(hexGenerator)
  }

  //CONVERTS HEX TO RGB
  const hexToRGB = (c) =>{
    if(/^#([a-f0-9]{3}){1,2}$/.test(c)){
      if(c.length===4){
        c= '#'+[c[1],c[1],c[2],c[2],c[3],c[3]].join('')
      }
      c = '0x'+c.substring(1)
      const rgb = {r: (c>>16)&255, g: (c>>8)&255, b: c&255}
      const rgbResult = 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
      setrgbState({color: [{rgb: rgbResult}]});
      console.log(rgbState.color[0].rgb)
      luminanceHandler(rgb)
    }
  }
  //CHECKS THE LUMINANCE OF THE RGB AND CHANGES TEXTCOLOR TO WHITE OR BLACK ACCORDINGLY
  const luminanceHandler = (rgb) => {
    const luma = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    console.log('luma',luma)
    if(luma <= 120){
      setTextColorState({color:[{textColor: 'white'}]})
    }
    else{
      setTextColorState({color:[{textColor: 'black'}]})
    }
  }

  return (
    <div className="App" style={{backgroundColor: hexState.color[0].hex}} onClick={hexColorHandler}>
      <div className={'spacer'}>
        <h1 className={'text preventselection'} style={{color: textColorstate.color[0].textColor}}> Click anywhere to change color!</h1>
        <Hex textColor={textColorstate.color[0].textColor} hexColor={hexState.color[0].hex} />
        <Rgb textColor={textColorstate.color[0].textColor} rgbColor={rgbState.color[0].rgb}/>
      </div>
    </div>
  );
}

export default App;
