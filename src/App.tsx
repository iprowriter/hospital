import DisplayLists from "./components/DisplayLists";
import Hero from "./components/Hero";
import Header from "./components/navigation/Header";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Search from "./components/Search";


function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f5f5f5"}}>
          <Search/>
        </Box>
      </Container>
    
    </>
  );
}

export default App;
