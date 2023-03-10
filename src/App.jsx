import "./App.css";
import BasicGrid from "./components/BasicGrid";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";

import { Grid } from "@mui/material";
import Content from "./components/Content";

function App() {
	return (
		<div className="App">
			<Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={3}>
          <MenuList />
        </Grid>
        <Grid item xs={9}>
          <Content />
        </Grid>
      </Grid>
			{/* <BasicGrid /> */}
		</div>
	);
}

export default App;
