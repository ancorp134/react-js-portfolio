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
  width: 1000,
  bgcolor: "#010E1B",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: 0,
  color: "#12D640",
  height : 500

  
};

export default function ProjectItem({image,name,desc,skill,codelink,demolink}) {
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
          <Box sx={style} className="box">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="project-head">
                {name}
              </Typography>
              <Typography variant="body2" color="white" className="project-tech">
                <span  className="project-span" style={{color : "#12D640" , fontSize:"25px"}}>Languages and Framework: </span> {skill}
              </Typography>
              {'\n'}
              <Typography variant="body2" color="white" className="project-tech">
                <span  className="project-span" style={{color : "#12D640" , fontSize:"25px"}}>Description: </span> 
              </Typography> 
              {desc.map((e)=>{
                return(
                  <Typography variant="body2" color="white" className="project-desc">
                    <li>{e}</li> 
                  </Typography> 
                )
              })}
              <CardActions>
                <a href={codelink} ><GitHubIcon titleAccess="github" sx={{fontSize : "2.5rem" , margin : "20px" , cursor : "pointer"}} className="link-btn"></GitHubIcon></a>
                <a href={demolink} ><LinkIcon titleAccess="demo-link" sx={{fontSize : "2.5rem" , margin : "20px" , cursor : "pointer"}} className="link-btn"></LinkIcon></a>
              </CardActions>
            </CardContent>
          </Box>
        </Modal>
      </Card>
    
  );
}
