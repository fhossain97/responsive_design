import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MovieContainer from "./MovieContainer"; // Assuming this is your component
import { Movie_Result } from "../../../lib/types";

const MoviesList = ({ data }: { data: Movie_Result[] }) => {
  const [page, setPage] = useState<number>(1);
  const totalPages = data ? Math.ceil(data.length / 4) : 0;

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <IconButton
        onClick={handlePrev}
        disabled={page === 1}
        sx={{
          fontSize: { xs: "24px", sm: "32px", md: "40px" },
        }}
      >
        <ArrowBackIosIcon fontSize="inherit" style={{ color: "#023020" }} />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 1, md: 1 },
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {data && data.length > 0
          ? data
              .slice((page - 1) * 4, page * 4)
              .map((movie) => <MovieContainer key={movie.id} data={movie} />)
          : null}
      </Box>
      <IconButton
        onClick={handleNext}
        disabled={page === totalPages}
        sx={{
          fontSize: { xs: "24px", sm: "32px", md: "40px" },
        }}
      >
        <ArrowForwardIosIcon fontSize="inherit" style={{ color: "#023020" }} />
      </IconButton>
    </Box>
  );
};

export default MoviesList;
