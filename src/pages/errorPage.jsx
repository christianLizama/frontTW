import { useRouteError } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Typography variant="h4" color="initial">
        Oops!
      </Typography>
      <Typography variant="body1" color="initial">
        Sorry, an unexpected sadasdasd has occurred.
      </Typography>
      <Typography variant="body1" color="initial">
        {error.statusText || error.message}
      </Typography>
    </div>
  );
}
