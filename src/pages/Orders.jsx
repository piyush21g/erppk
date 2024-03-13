import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";

import Box from "@mui/material/Box";

const orders = [
  { id: 1, orderId: "ORD001", customerName: "Aarav Patel", orderDate: "2024-03-10", status: "Pending" },
  { id: 2, orderId: "ORD002", customerName: "Bhavya Shah", orderDate: "2024-03-09", status: "Delivered" },
  { id: 3, orderId: "ORD003", customerName: "Chetan Sharma", orderDate: "2024-03-08", status: "Processing" },
  { id: 4, orderId: "ORD004", customerName: "Dhruv Joshi", orderDate: "2024-03-07", status: "Pending" },
  { id: 5, orderId: "ORD005", customerName: "Esha Singh", orderDate: "2024-03-06", status: "Delivered" },
  { id: 6, orderId: "ORD006", customerName: "Fiza Gupta", orderDate: "2024-03-05", status: "Cancelled" },
  { id: 7, orderId: "ORD007", customerName: "Girish Kumar", orderDate: "2024-03-04", status: "Processing" },
  { id: 8, orderId: "ORD008", customerName: "Hina Sharma", orderDate: "2024-03-03", status: "Pending" },
  { id: 9, orderId: "ORD009", customerName: "Ishaan Gupta", orderDate: "2024-03-02", status: "Processing" },
  { id: 10, orderId: "ORD010", customerName: "Jhanvi Patel", orderDate: "2024-03-01", status: "Delivered" },
  { id: 11, orderId: "ORD011", customerName: "Kabir Singh", orderDate: "2024-02-29", status: "Pending" },
  { id: 12, orderId: "ORD012", customerName: "Lavanya Joshi", orderDate: "2024-02-28", status: "Delivered" },
  { id: 13, orderId: "ORD013", customerName: "Mohit Sharma", orderDate: "2024-02-27", status: "Processing" },
  { id: 14, orderId: "ORD014", customerName: "Neha Gupta", orderDate: "2024-02-26", status: "Pending" },
  { id: 15, orderId: "ORD015", customerName: "Omkar Patel", orderDate: "2024-02-25", status: "Processing" },
  { id: 16, orderId: "ORD016", customerName: "Pooja Shah", orderDate: "2024-02-24", status: "Delivered" },
  { id: 17, orderId: "ORD017", customerName: "Qamar Ali", orderDate: "2024-02-23", status: "Pending" },
  { id: 18, orderId: "ORD018", customerName: "Rahul Sharma", orderDate: "2024-02-22", status: "Processing" },
  { id: 19, orderId: "ORD019", customerName: "Sneha Gupta", orderDate: "2024-02-21", status: "Cancelled" },
  { id: 20, orderId: "ORD020", customerName: "Tanvi Patel", orderDate: "2024-02-20", status: "Delivered" },
];

  
  

const EditDeleteOrder = ({ order, onUpdateStatus, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(order.status);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateStatus = () => {
    onUpdateStatus({ ...order, status });
    handleClose();
  };

  const handleDelete = () => {
    onDelete(order.id);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit or Delete Order</DialogTitle>
        <DialogContent>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateStatus} color="primary">
            Update Status
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const Orders = () => {
  const [data, setData] = useState(orders);

  const columns = [
    {
      name: "orderId",
      label: "Order ID",
    },
    {
      name: "customerName",
      label: "Customer Name",
    },
    {
      name: "orderDate",
      label: "Order Date",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const order = data[tableMeta.rowIndex];
          return (
            <EditDeleteOrder
              order={order}
              onUpdateStatus={handleUpdateOrderStatus}
              onDelete={handleDeleteOrder}
            />
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    sort: true,
    selectableRows: "none",
    rowsPerPage:5,
  };

  const handleUpdateOrderStatus = (updatedOrder) => {
    setData(
      data.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  };

  const handleDeleteOrder = (id) => {
    setData(data.filter((order) => order.id !== id));
  };

  return (
    <div style={{ background: "#eceff1", height: "100vh" }}>
  
      <Box sx={{ display: "flex" }}>
     
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MUIDataTable
            title="Orders"
            data={data}
            columns={columns}
            options={options}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Orders;