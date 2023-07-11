import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function Select({ name, labelId, options, submit, ...props }) {
  return (
    <FormControl
      // className="select-theme w-[300px] bg-[#fff] px-[15px] py-[10px] relative"
      className="cursor-default  drop-shadow-2xl md:w-[90vw] md:px-[30px]   py-[10px] px-[10px] rounded-[3px]  w-[330px]  bg-[#fff]"
      style={{
        zIndex: 10000000,
        border: "1px solid #000",
      }}
      size="small"
    >
      <InputLabel
        id={labelId}
        className="select-label-theme px-[15px] py-[3px] bg-[#fff] rounded-sm "
        style={{}}
      >
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
        {options.map(({ label, value }, i) => (
          <MenuItem
            key={value}
            value={value}
            style={{
              zIndex: 99999999999,
            }}
          >
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
