import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie_Result } from "../../../lib/types";
import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieContainer = ({ data }: { data: Movie_Result }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {
    original_title,
    overview,
    poster_path,
    title,
    release_date,
    vote_count,
  } = data;

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "75%",
          md: "50%",
        },
        height: {
          xs: "auto",
          sm: "auto",
          md: "50%",
        },
        margin: {
          xs: 1,
          sm: 2,
          md: 3,
        },
      }}
      onClick={() => setOpenModal(true)}
    >
      <CardMedia
        component="img"
        sx={{
          height: {
            xs: "auto",
            sm: "200px",
            md: "100%",
          },
          width: "100%",
          objectFit: "cover",
        }}
        image={`${import.meta.env.VITE_TMDB_BASE_IMAGE_URL}${poster_path}`}
        alt={title}
      />
      <CardContent
        sx={{
          textAlign: "center",
          height: {
            xs: "auto",
            sm: "200px",
            md: "200px",
          },
          overflow: "auto",
          padding: {
            xs: 1,
            sm: 2,
            md: 3,
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="black"
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
        >
          {original_title}
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" } }}
        >
          {overview}
        </Typography>
      </CardContent>
      {openModal && (
        <MovieModal
          onClose={() => setOpenModal(false)}
          open={openModal}
          votes={vote_count}
          release_date={release_date}
        />
      )}
    </Card>
  );
};

export default MovieContainer;
