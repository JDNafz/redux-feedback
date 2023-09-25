import { Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './Review.css'

export default function Review() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inputs = useSelector((store) => store.inputs);

  const handleSubmit = () => {
    if (
      inputs.feeling === -1 ||
      inputs.understanding === -1 ||
      inputs.support === -1
    ) {
      history.push("/");
    } else {
      axios
        .post(`/feedback`, inputs)
        .then((response) => {
          dispatch({ type: "RESET" });
          console.log("Empty cart");
          history.push("/submit-success");
        })
        .catch((error) => {
          console.log(error);
          alert(
            `Sorry, couldn't add feedback at this time. Better luck learning next time...`
          );
        });
    } //else do axios
  }; //end handle submit
  const handleBack = () => {
    // console.log("BACK URL:",backUrl)
    history.push(`/comments`);
  }; //end handleBack

  return (
    <Container className="surveyContainer" maxWidth="sm">
      <h1>Review Your Feedback</h1>

      <Typography variant="h5" gutterBottom>
        Feelings: {inputs.feeling == -1 ? "" : inputs.feeling}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Understanding: {inputs.understanding === -1 ? "" : inputs.understanding}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Support: {inputs.support === -1 ? "" : inputs.support}
      </Typography>

      {/* conditionally render comments */}
      {inputs.comments.length > 0 && (
        <Typography variant="h5" gutterBottom>
          Comments: {inputs.comments}
        </Typography>
      )}

      {/* Autofocus allows you to hit enter on keyboard allowing for full keyboard navigation */}
      <Button className="backButton" size="small" onClick={handleBack} variant="contained">
        Back
      </Button>
      <Button size="small" autoFocus onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Container>
  );
}