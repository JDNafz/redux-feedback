import Box from "@mui/material/Box";
import "./SubmitSuccess.css";
import { useHistory } from "react-router-dom/";
import { Hidden, TextField } from "@mui/material";
import { useEffect } from "react";

export default function SubmitSuccess() {
  const history = useHistory();

  // detect any keyDown
  //useEffect to run listener on document
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    //if on the /submit-success:
    if (history.location.pathname === "/submit-success") {
      // e.key contains pressed key
      if (e.key === "Enter") {
        //if it was the 'Enter' key
        history.push("/");
      }
      // else{
      //   console.log("pathname",history.location.pathname);
      //   console.log(e.key);
      // }
    }
  };

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="successContainer">
      <Box
        className="firstBox"
        sx={{
          width: 500,
          height: 75,
          border: 2,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 60, md: 75 },
            maxWidth: { xs: 90, md: 100 },
          }}
          alt="The house from the offer."
          src="https://i.etsystatic.com/16421349/r/il/1d4b0f/2983712461/il_fullxfull.2983712461_6kwo.jpg"
        />

        <h2>Feedback Submitted!</h2>
      </Box>
      <Box
        className="thanksBox"
        sx={{
          mt: 7,
          width: 500,
          height: 300,
          border: 2,
        }}
      >
        <h2>Thank You!</h2>
        <Box
          className="newFeedback"
          autoFocus
          onClick={handleClick}
          sx={{
            width: 230,
            height: 50,
            border: 2,
          }}
        >
          <h3>Leave New Feedback!</h3>
        </Box>
      </Box>
    </div>
  );
}
