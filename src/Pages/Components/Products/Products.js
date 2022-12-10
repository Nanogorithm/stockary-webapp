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
  { id: "#PM9801", name: "Special Fruit Cake", category: "Bread", availability: 35, price: 400 },
  { id: "#PM9801", name: "Kalo Jam", category: "Sweets", availability: 35, price: 400 },
  { id: "#PM9803", name: "Nutty Biscuits", category: "Biscuit", availability: 35, price: 400 },

];

const Products = () => {
  return (
    <div>
      <div>
      {/* <h2 className="text-4xl font-semibold text-left m-10">Products</h2> */}
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
