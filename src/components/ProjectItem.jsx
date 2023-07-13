import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../styles/projectitem.css"
import "animate.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 390,
  bgcolor: "#010E1B",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: 0,
  color: "#086F2C"
  
};

export default function ProjectItem({image,name,desc , skill}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    
      <Card
        sx={{ maxWidth: 300, maxHeight: 400, borderRadius: 5 }}
        className="card"
      >
        <CardMedia
          sx={{ height: 300, backgroundSize: "contain", width: "300px" }}
          image={image}
          title={name}
          onClick={handleOpen}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <Modal
          sx={{}}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="white">
                {desc}
              </Typography>
              <Typography variant="body2" color="white">
                <span style={{color : "#086F2C"}}>Languages and Framework: </span> {skill}
              </Typography>
              <CardActions>
                <GitHubIcon></GitHubIcon>
                <LinkIcon></LinkIcon>
              </CardActions>
            </CardContent>
          </Box>
        </Modal>
      </Card>
    
  );
}
