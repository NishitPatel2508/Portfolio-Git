import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Box, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { ToastContainer, toast } from "react-toastify";
const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#D8D8D8",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#ffff",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const Contact = () => {
  const outerTheme = useTheme();
  const [msg, setMsg] = useState("");
  const [nameValue, setName] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [email, setEmail] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMsg = (e) => {
    setUserMsg(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "387697f9-1bc8-46b1-a1c7-5383f6c8f333");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log(res);
      setMsg(res.message);
      setTimeout(() => {
        setUserMsg("");
        setEmail("");
        setName("");
      }, 2000);
      setTimeout(() => {
        setMsg("");
      }, 5000);
      // toast.success(res.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MdEmail className="iconStyle" />
              <p> nishitpatel78638@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoCallSharp className="iconStyle" />
              <p> +91 6355242731</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot className="iconStyle" />
              <p> Ahmedabad, India</p>
            </div>
          </div>
        </div>
        {/* <Box
          component="form"
          noValidate
          autoComplete="off"
          className="contact-right"
        >
          <div> 
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              error
              id="outlined"
              label="Name"
              name="name"
              placeholder="Enter Your Name"
              error=""
              helperText=""
              // className="inputStyle"
              fullWidth
              // fullWidth
            />
            <TextField
              error
              id="outlined"
              placeholder="Enter Your Email ID"
              type="email"
              label="Email"
              className="inputStyle"
              error=""
              helperText="Incorrect entry."
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              name="message"
              multiline
              rows={4}
              helperText="Incorrect entry."
              className="inputStyle"
            />
          </ThemeProvider>
          </div> 
          <Button variant="contained">Submit now</Button>
        </Box> */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={nameValue}
            onChange={handleName}
          />
          <input type="hidden" name="from_name" value={nameValue}></input>
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="name"
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="Write Your message here">Message</label>
          <textarea
            name="message"
            placeholder="Enter Your message"
            value={userMsg}
            id=""
            cols="30"
            rows="20"
            onChange={handleMsg}
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
          {msg && <label>{msg}</label>}
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Contact;
