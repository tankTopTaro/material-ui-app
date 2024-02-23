import { Routes, Route } from "react-router-dom"
import Create from './pages/Create'
import Notes from './pages/Notes'
import Layout from "./components/Layout"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
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
  },
  field: {
    marginTop: 3,
    marginBottom: 3,
    display: 'block'
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Notes />}/>
          <Route path="/create" element={<Create theme={theme} />}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
