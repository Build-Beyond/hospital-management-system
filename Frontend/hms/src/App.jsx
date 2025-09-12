import './App.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Button } from '@mantine/core';
import MainRoutes from './Routes/MainRoutes';

const theme = createTheme({
  focusRing:"never",
  fontFamily: "Poppins, sans-serif", 
  headings: {fontFamily: "Merriweather, serif"},
  colors: {
    primary: ['#f3faf9','#d7f0ed','#bce5e0','#7fc9c2','#55aca7','#3b918e','#2d7473','#275e5d','#234c4c','#214040','#0e2425'],
    neutral: ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#000000']
},
primaryColor:"primary",
primaryShade: 4,
defaultGradient: {
  from:"primary.4",
  to:"primary.8",
  deg:120
}
});

function App() {

  return (
     <MantineProvider theme={theme}>
         <MainRoutes />
    </MantineProvider>
  );
}

export default App
