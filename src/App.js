import * as React from 'react';
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Add  from './components/Add';
import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  const [mode,setMode]=React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
<Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2}>
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
