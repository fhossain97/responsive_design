import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { formatDate } from "../../../lib/utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: "80%",
    md: 400,
  },
  maxWidth: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  borderRadius: 2,
};

const MovieModal = ({
  open,
  votes,
  release_date,
  onClose,
}: {
  open: boolean;
  votes: number;
  release_date: string;
  onClose: () => void;
}) => {
  return (
    <Box>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Additional Information
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Current votes: {votes}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Date of release : {formatDate(release_date)}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
export default MovieModal;
