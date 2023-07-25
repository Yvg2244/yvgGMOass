import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../interface";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import CheckBox1 from "./CheckBox1";
import CheckBox2 from "./CheckBox2";
const DataComponents = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState<Array<post>>([]);
  useEffect(() => {
    let user_data = localStorage.getItem("user-info");
    if (!user_data) navigate("/");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const columns: GridColDef[] = [
    { field: "userId", headerName: "User ID", width: 90 },
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      width: 250,
    },
    {
      field: "body",
      headerName: "Body",
      width: 300,
    },
  ];

  return (
    <div>
      <div>DATA</div>
      <Box sx={{ height: 400, width: "100vw" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <div>Select Department</div>
      <CheckBox2 />
      <CheckBox1 />
    </div>
  );
};

export default DataComponents;
