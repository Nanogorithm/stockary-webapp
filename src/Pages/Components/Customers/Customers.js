import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CustomerBar from "./CustomersBar";
const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 220, sortable: false },
    { field: "company", headerName: "Company", width: 250 },
    { field: "address", headerName: "Address", width: 300 },
    {
      field: "type",
      headerName: "Type",
      width: 150,
    },
  ];
  
  const rows = [
    {
      id: "#CM1038",
      name: "Special Fruit Cake",
      company: "Bread",
      address: 35,
      type: "Retailer",
    },
    {
      id: "#CM1038",
      name: "Katherine Moss",
      company: "Ashiana Group",
      address: "Washburn Baton Rouge",
      type: "Distributor",
    },
    {
      id: "#PM9803",
      name: "Koray Okumus",
      company: "Janaia Distrubt",
      address: "Meadow Lane Oakland, New York",
      type: "Dealer",
    },
  ];

const Customers = () => {
  return (
    <div>
      <div>
      <h1 className="mt-[60px] text-3xl font-semibold text-left ml-[375px] mb-6">Customers</h1>
        <div className='"w-9/12 ml-[375px]'>
          <CustomerBar></CustomerBar>
        </div>
        <div className="ml-[375px]">
        <div style={{ height: 750, width: "100%",  }}>
          <DataGrid
          sx={{border:'none' }}
            rows={rows}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[5]}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
