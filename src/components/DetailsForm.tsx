import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { user } from "../interface";
import {useNavigate} from 'react-router-dom';
const DetailsForm = () => {
  const [name, setname] = useState<string | null | "">(null);
  const [email, setemail] = useState<string | null | "">(null);
  const [number, setnumber] = useState<number | null | 0>(null);
  const [btndisable, setbtndisable] = useState<boolean>(true);
  const navigate=useNavigate()
  let userdata: user = {
    name: null,
    email: null,
    number: null,
  };

  useEffect(() => {
    userdata = { ...userdata, name: name, email: email, number: number };
    console.log(userdata);
    if (
      !userdata.name ||
      userdata.name == "" ||
      !userdata.email ||
      userdata.email == "" ||
      !userdata.number ||
      userdata.number == 0
    )
      setbtndisable(true);
      else
      setbtndisable(false);

  }, [name, email, number]);
  const handleSubmit=()=>{
    localStorage.setItem('user-info',JSON.stringify(userdata))
    navigate("/data")
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50rem",
        gap: "1rem",
      }}
    >
      <h1>Form</h1>
      {!name || name == "" ? <div>Name is Required</div> : <></>}
      <TextField
        id="filled-basic"
        type="text"
        label="Name"
        variant="filled"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      {!number || number == 0 ? <div>number is Required</div> : <></>}
      <TextField
        id="filled-basic"
        type="number"
        label="Number"
        variant="filled"
        onChange={(e) => {
          setnumber(+e.target.value);
        }}
      />
      {!email || email == "" ? <div>email is Required</div> : <></>}
      <TextField
        id="filled-basic"
        type="email"
        label="Email"
        variant="filled"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <Button variant="contained" disabled={btndisable} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default DetailsForm;
