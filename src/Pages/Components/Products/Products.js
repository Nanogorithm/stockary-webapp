import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ProductBar from "./ProductBar";

const columns  = [
  { field: "id", headerName: "ID", width: 100,   },
  { field: "name", headerName: "Name", width: 220, sortable: false },
  { field: "category", headerName: "Category", width: 220 },
  { field: "availability", headerName: "Availability", width: 235 },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
];

const rows = [
  { id: 1, name: "Snow", category: "Jon", availability: 35, price: 400 },
  { id: 2, name: "Lannister", category: "Cersei", availability: 42, price: 400 },
  { id: 3, name: "Lannister", category: "Jaime", availability: 45, price: 400 },
  { id: 4, name: "Stark", category: "Arya", availability: 16, price: 400 },
  { id: 5, name: "Targaryen", category: "Daenerys", availability: null, price: 400 },
  { id: 6, name: "Melisandre", category: null, availability: 150, price: 400 },
  { id: 7, name: "Clifford", category: "Ferrara", availability: 44, price: 400 },
  { id: 8, name: "Frances", category: "Rossini", availability: 36, price: 400 },
  { id: 9, name: "Roxie", category: "Harvey", availability: 65, price: 400 },
];

const Products = () => {
  return (
    <div>
      <div>
      <h2 className="text-4xl font-semibold text-left m-10">Products</h2>
      </div>
      {/* Bar */}
      <div>
        {/* <ProductBar></ProductBar> */}
      </div>
      {/* Table */}
      <div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={12}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
    </div>
  );
};

export default Products;
