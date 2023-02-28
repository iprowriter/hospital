import DisplayLists from "./components/DisplayLists";
import Hero from "./components/Hero";
import Header from "./components/navigation/Header";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";


function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f5f5f5"}}>
        <DisplayLists/>
        </Box>
      </Container>
    
    </>
  );
}

export default App;
