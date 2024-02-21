import { Routes, Route } from "react-router-dom"
import Create from './pages/Create'
import Notes from './pages/Notes'
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    }
  },
  typography: {
    fontFamily: "Kode Mono", 
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  btn: {
      hover: {
          backgroundColor: '#808080'
      }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Notes />}/>
        <Route path="/create" element={<Create theme={theme} />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
