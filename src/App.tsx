import { Box, Typography } from "@mui/material";
import "./App.css";
import { TMDB } from "../lib/utils";
import { useEffect, useState } from "react";
import { Movie_Result } from "../lib/types";
import MoviesList from "./components/Movies/MoviesList";

function App() {
  const [data, setData] = useState<Movie_Result[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await TMDB(import.meta.env.VITE_TMDB_POPULAR_MOVIES);
      setData(response);
    }

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        padding: {
          xs: 2,
          sm: 4,
          md: 6,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: {
            xs: 2,
            sm: 4,
            md: 8,
          },
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
          textAlign: "center",
        }}
      >
        Popular Movies
      </Typography>
      <MoviesList data={data} />
    </Box>
  );
}

export default App;
