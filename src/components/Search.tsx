import { styled } from "@mui/material/styles";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import data from "../data/mock_data.json";
import DisplayLists from "./DisplayLists";




const StyledContainer = styled(Container)`
  margin-top: 10px;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
width: 500px;
height: 200px;
padding: 2rem;
background-color: #CEEFEC;

`;

function Search() {
  return (
    <>
      <StyledContainer>
        <StyledPaper elevation={3} sx={{ paddingX: 10 }}>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
          <Grid container direction="row">
            <Typography>Sort Alphabetically:</Typography>
            <Switch />
          </Grid>
        </StyledPaper>
      </StyledContainer>
      <DisplayLists data={data} />
    </>
  );
}

export default Search;
