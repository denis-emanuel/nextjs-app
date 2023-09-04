"use client";

import { useState } from "react";
import { Alert, Button, Paper } from "@mui/material";

export default function FirstPost() {
  // state that holds if an alert is good or bad
  const [alertType, setAlertType] = useState<"success" | "error" | "none">(
    "none"
  );

  return (
    <div>
      <Paper>
        <h1>Something</h1>
        <Button
          variant="contained"
          onClick={() => {
            setAlertType("success");
          }}
        >
          Do something good
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setAlertType("error");
          }}
        >
          Do something bad
        </Button>

        {alertType === "success" && (
          <Alert severity="success" variant="filled">
            This is a success alert — check it out!
          </Alert>
        )}

        {alertType === "error" && (
          <Alert severity="error" variant="filled">
            This is a error alert — check it out!
          </Alert>
        )}
      </Paper>
    </div>
  );
}
