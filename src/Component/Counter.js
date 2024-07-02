import { React, useState } from "react";
import { Card, Button, Box, Typography } from "@mui/material";

function Counter() {
  const [count, setCount] = useState(0);
  const add = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("value cant be more than 10");
    }
  };
  const sub = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("value cant be negative");
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
          flexDirection: "column",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
            width: "300px",
            height: "200px",
            backgroundColor: "#96C9F4",
          }}
        >
          <h2>Counter</h2>
          <h1>{count}</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              onClick={add}
              variant="outlined"
              sx={{ backgroundColor: "#FAFFAF", color: "black" }}
            >
              + Increase
            </Button>
            <Button
              variant="outlined"
              onClick={sub}
              sx={{ backgroundColor: "#FAFFAF", color: "black" }}
            >
              - Decrease
            </Button>
          </div>
        </Card>
        <Button onClick={reset} variant="contained" sx={{ marginTop: "20px" }}>
          Reset
        </Button>
      </Box>
      <Typography sx={{marginTop:"180px", marginLeft:"1 0px"}}>Coding Alone Diaries</Typography>
    </div>
  );
}

export default Counter;
