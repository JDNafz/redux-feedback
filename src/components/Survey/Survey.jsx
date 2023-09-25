import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import "./Survey.css";

export default function Survey({
  SCREAMER,
  nextUrl,
  backUrl,
  Question,
  label,
  requireValidation = true,
  placeholder = "ONLY 0-5",
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [promptAnswer, setPromptAnswer] = useState("");
  const [Error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (requireValidation) {
      //
      if (
        isNaN(Number(promptAnswer)) || //if user inputs a char
        Number(promptAnswer) > 5 || // or if user inputs higher than 5
        Number(promptAnswer) < 0 || //or if less than zero
        promptAnswer === "" //if nothing was entered
      ) {
        setError(true);
        setPromptAnswer("");
        // return;
      } else {
        history.push(nextUrl);
        dispatch({
          type: SCREAMER,
          payload: promptAnswer === "" ? -1 : Number(promptAnswer),
        });
      }
    } else {
      history.push(nextUrl);
      if (!requireValidation) {
        dispatch({ type: SCREAMER, payload: promptAnswer });
      } else {
        dispatch({
          type: SCREAMER,
          payload: promptAnswer === "" ? -1 : Number(promptAnswer),
        });
      }
    }
  }; //end handleSubmit

  const handleBack = () => {
    // console.log("BACK URL:", backUrl);
    history.push(`${backUrl}`);
  }; //end handleBack

  return (
    <Container className="surveyContainer" maxWidth="sm">
      <h1>{Question}</h1>
      <form className="inputField" onSubmit={handleSubmit}>
        <div className="text&buttonContainer">
          {/* IF ERROR : return textfield with 'error' attribute */}
          {/* this uses a double ternary { comments ? notRequired attribute : hasError ? errorVersion : normalVersion } but its a little hard to read*/}
          {SCREAMER === "SET_COMMENTS" ? (
            <TextField
              autoFocus
              maxLength={1}
              onChange={(e) => setPromptAnswer(e.target.value)}
              value={promptAnswer}
              id="standard-basic"
              label={label}
              variant="standard"
              placeholder={placeholder}
            />
          ) : Error ? (
            <TextField
              autoFocus
              required
              error
              maxLength={1}
              onChange={(e) => setPromptAnswer(e.target.value)}
              value={promptAnswer}
              id="standard-basic"
              label={label}
              variant="standard"
              placeholder={placeholder}
            />
          ) : (
            // if NOT ERROR: return textfield without 'error' attribute
            <TextField
              autoFocus
              required
              maxLength={1}
              onChange={(e) => setPromptAnswer(e.target.value)}
              value={promptAnswer}
              id="standard-basic"
              label={label}
              variant="standard"
              placeholder={placeholder}
            />
          )}

          {SCREAMER === "SET_FEELING" ? null : (
            <Button size="small" onClick={handleBack} variant="contained">
              Back
            </Button>
          )}
          <Button size="small" onClick={handleSubmit} variant="contained">
            Next
          </Button>
        </div>
      </form>
    </Container>
  );
}

//container
//box     material UI
