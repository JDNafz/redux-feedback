import Survey from "../Survey/Survey";

// Throughout this app I use the Routes like the Feeling 
// Component to pass in params and create the Survey Component 
// which forms most of the routes which are used.

export default function Feeling() {
  return (
    <Survey
      SCREAMER={"SET_FEELING"}
      nextUrl={"/understanding"}
      label={"Feeling?"}
      Question={"How are you feeling today?"}
    />
  );
}
