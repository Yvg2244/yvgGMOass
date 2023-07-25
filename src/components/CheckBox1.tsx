import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const CheckBox1 = () => {
  const [checked, setChecked] = React.useState([false, false, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="graphic_design"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="product_design"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="web_design"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="design"
        control={
          <Checkbox
            checked={checked[0] && checked[1] && checked[2]}
            indeterminate={
              checked[0] !== checked[1] || checked[0] !== checked[2]
            }
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
};

export default CheckBox1;
