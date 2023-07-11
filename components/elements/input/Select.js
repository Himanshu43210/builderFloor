import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function Select({ name, labelId, options, ...props }) {
  return (
    <FormControl
      className="select-theme"
      sx={{ mt: 2, width: "100%" }}
      size="small"
    >
      <InputLabel id={labelId} className="select-label-theme">
        {labelId}
      </InputLabel>
      <MuiSelect
        name={name}
        {...props}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          outline: "none",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            color: "transparent",
          },
          backgroundColor: "white",
          borderRadius: "10px",
          // padding: "10px",
        }}
      >
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
