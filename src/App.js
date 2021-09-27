import { Box } from "@mui/material";
import React from "react";
import { Route, Switch } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Box bgcolor="success.light" sx={{ height: '100vh', py: 2, overflow: 'scroll' }}>
      <Box maxWidth={600} mx="auto">
        <Switch>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default App;
