import React, { useState } from "react";
import { IoMdShare } from "react-icons/io";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProjectCard.css";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const ProjectCard = (props) => {
  const [openStackExpandBar, setopenStackExpandBar] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [links, setLink] = useState("");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLinkOpen = (link) => {
    setLink(link);
    console.log(link);
    window.open(links);
  };
  return (
    // <div className="card">
    //   {" "}
    //   <div className="picture">
    //     <img src={props.image} alt={props.title} />
    //   </div>
    //   <div className="card-details">
    //     <div className="card-details-top">
    //       <h2 className="title">{props.title}</h2>
    //     </div>
    //     <div className="card-details-middle">
    //       <p>{props.data.description}</p>
    //     </div>
    //     <div className="card-details-bottom">
    //       <div className="stack-container">
    //         <div className="stack-left">Stack</div>
    //         <div className="stack-right">
    //           <div className="stack-box-container">
    //             {props.stack.map((list, index) => {
    //               if (index < 4) {
    //                 return (
    //                   <div className="stack-box">
    //                     <div className="stack-icon-container">
    //                       <span
    //                         className="stack-icon"
    //                         style={{ color: list.iconColor }}
    //                       >
    //                         {list.icon}
    //                       </span>
    //                       <span className="stack-name">{list.name}</span>
    //                     </div>
    //                   </div>
    //                 );
    //               }
    //             })}
    //           </div>{" "}
    //           {/* end stack-box-container */}
    //           {props.stack.length > 4 ? (
    //             <div className="stack-view-more">
    //               <div
    //                 className="more-btn"
    //                 onClick={() => setopenStackExpandBar(!openStackExpandBar)}
    //               >
    //                 <div
    //                   className={`stack-expand-box ${
    //                     openStackExpandBar ? "open-stack-expand-box" : ""
    //                   }`}
    //                 >
    //                   <h3 className="title">More Stack Used</h3>
    //                   <div className="stack-box-container">
    //                     {props.stack.map((list, index) => {
    //                       if (index >= 4) {
    //                         return (
    //                           <div className="stack-box">
    //                             <div className="stack-icon-container">
    //                               <span
    //                                 className="stack-icon"
    //                                 style={{ color: list.iconColor }}
    //                               >
    //                                 {list.icon}
    //                               </span>
    //                               <span className="stack-name">
    //                                 {list.name}
    //                               </span>
    //                             </div>
    //                           </div>
    //                         );
    //                       }
    //                     })}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ) : (
    //             ""
    //           )}
    //         </div>
    //       </div>{" "}
    //       {/* end stack-container */}
    //       <div className="btn-container">
    //         <a
    //           href={props.demoLink}
    //           target="_blank"
    //           className="btn btn_primary"
    //         >
    //           Demo
    //         </a>
    //         <div className="btn-share">
    //           <IoMdShare className="btnShareStyle" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div className="card-details-middle">
            <p>{props.data.description}</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <Typography>Expand More to View Stack Used in Project</Typography> */}
        <Button aria-label="add to favorites">
          <FavoriteIcon onClick={() => handleLinkOpen(props.demoLink)} />
          {/*  */}
        </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Typography paragraph>Stack Used:</Typography>
          <Typography paragraph>
            <div className="stack-box-container">
              {props.stack.map((list, index) => {
                return (
                  <>
                    <span
                      className="stack-icon"
                      style={{ color: list.iconColor }}
                    >
                      {list.icon}
                    </span>
                    <span className="stack-name">{list.name}</span>
                  </>
                );
              })}
            </div>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
