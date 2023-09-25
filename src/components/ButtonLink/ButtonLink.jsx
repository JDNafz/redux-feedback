import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <Button size="small" variant="contained">
        {children}
      </Button>
    </Link>
  );
}

// Usage
{
  /* <ButtonLink to="/some-page">Go to Some Page!</ButtonLink> */
}
