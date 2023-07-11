import * as React from "react";

// Hooks
import { useFormikContext } from "formik";

//Components
import MuiAutocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";

export default function Autocomplete({
  name,
  labelId,
  options,
  inputProps,
  ...props
}) {
  const { setFieldValue } = useFormikContext();

  return (
    <FormControl sx={{ mt: 2, width: 330 }} size="small">
      <InputLabel id={labelId} className="select-label-theme">
        {labelId}
      </InputLabel>
      <MuiAutocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField variant="outlined" {...params} {...inputProps} />
        )}
        {...props}
        onChange={(event, value) => setFieldValue(name, value)}
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
          // fontSize: "15px",
        }}
      />
    </FormControl>
  );
}
