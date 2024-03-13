import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";


const Kanban = () => {


  const [products, setProducts] = useState([
    { id: 1, name: "Potato", price: 2.99, quantity: 250 },
    { id: 2, name: "Onion", price: 3.99, quantity: 230 },
    { id: 3, name: "Tomato", price: 5.99, quantity: 225 },
    { id: 4, name: "Burger", price: 1.99, quantity: 225 },
  ]);

  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", quantity: "" });

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setAddDialogOpen(false);
    setNewProduct({ name: "", price: 0, quantity: 0 });
  };

  const handleEditProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? { ...product, ...newProduct } : product
    );
    setProducts(updatedProducts);
    setEditDialogOpen(false);
    setSelectedProduct(null);
    setNewProduct({ name: "", price: 0, quantity: 0 });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setNewProduct(product);
    setEditDialogOpen(true);
  };

  return (
    <Box m="20px">
  
      <Button
        style={{ backgroundColor: "aqua", marginBottom: 10 + "px" }}
        onClick={() => setAddDialogOpen(true)}
      >
        Add Product
      </Button>

      <TableContainer style={{ background: "#143368" }} component={Paper}>
        <Table>
          <TableHead style={{ background: "rgb(219 234 254)", color: "#a4a9fc" }}>
            <TableRow >
              <TableCell align="center">S. No.</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id} style={{ background: "rgb(242, 240, 240)" }}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">${product.price.toFixed(2)}</TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="center">
                  <Button
                    style={{ backgroundColor: "aqua", marginBottom: 10 + "px", marginRight:4+"px"}}
                    onClick={() => handleEditClick(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ backgroundColor: "aqua", marginBottom: 10 + "px" }}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onClose={() => setAddDialogOpen(false)}>
        <DialogTitle style={{ background: "rgb(219 234 254)" }}>Add Product</DialogTitle>
        <DialogContent style={{ background: "rgb(242, 240, 240)" }}>
          <TextField
            label="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            type="number"
            value={newProduct.quantity}
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })
            }
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions style={{ background: "rgb(219 234 254)" }}>
          <Button
            style={{ backgroundColor: "aqua", marginBottom: 10 + "px" }}
            onClick={() => setAddDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "aqua", marginBottom: 10 + "px" }}
            onClick={handleAddProduct}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle style={{ background: "rgb(219 234 254)" }}>Edit Product</DialogTitle>
        <DialogContent style={{ background: "rgb(242, 240, 240)" }}>
          <TextField
            label="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            type="number"
            value={newProduct.quantity}
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })
            }
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions style={{ background: "rgb(219 234 254)" }}>
          <Button
            style={{ backgroundColor: "aqua", marginBottom: 10 + "px" }}
            onClick={() => setEditDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "aqua", marginBottom: 10 + "px" }}
            onClick={handleEditProduct}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Kanban;
