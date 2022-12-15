import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import CategoryBar from './CategoryBar';


const columns = [
    { field: "name", headerName: "Category Name", width: 750 },
    { field: "number", headerName: "No Of Items", width: 150 },

]
const rows = [
    {
      id: "1",
      name: "Bread",
      number: 35,
    },
    {
      id: "4",
      name: "Chips",
      number: 12,
    },
]

const Category = () => {
    return (
        <div>
        <div>
        <h1 className="mt-[60px] text-3xl font-semibold text-left ml-[375px] mb-6">Categories</h1>
          <div className="w-9/12 ml-[375px]">
            <CategoryBar></CategoryBar>
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

export default Category;