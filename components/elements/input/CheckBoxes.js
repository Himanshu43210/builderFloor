import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormikContext, Field } from "formik";

function CheckBoxes({ name, options }) {
  const { values } = useFormikContext();
  return (
    <FormGroup>
      {options.map(({ value, label }) => (
        <Field
          key={value}
          value={value}
          as={FormControlLabel}
          name={name}
          control={
            <Checkbox
              checked={values[name]?.includes(value)}
              sx={{
                "& .Mui-checked": {
                  color: "#2f2a4a",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: "30px",
                  color: "#2f2a4a",
                  // border: "1px solid #2f2a4a",
                  // borderBlockColor: "#2f2a4a !important",
                },
                marginLeft: "20px",
              }}
            />
          }
          label={label}
        />
      ))}
    </FormGroup>
  );
}

export default CheckBoxes;
