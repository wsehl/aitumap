import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </BrowserRouter>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
   
  );
}

export default App;
