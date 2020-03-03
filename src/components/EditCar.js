import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function EditCar(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setCar({ brand: props.car.brand, model: props.car.model, color: props.car.color, fuel: props.car.fuel, year: props.car.year, price: props.car.price})
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [car, setCar] = React.useState({
            brand: '', model: '', color: '', fuel: '', year: '', price: ''
        }
    );

     const handleInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value })
    }
    

    const updateCar = () => {
        props.updateCar(car, props.car._links.car.href);
        handleClose();
    }


 

    return (
    <div>
      <Button  color="primary" onClick={handleClickOpen}>
       Edit a Car
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit a Car</DialogTitle>
        <DialogContent>   
            <TextField
                autoFocus
                margin="dense"
                name="brand"
                label="Brand"
                value={car.brand}
                type="text"
                onChange = {e => handleInputChange(e)}
            fullWidth/>
            <TextField     
                margin="dense"
                name="model"
                label="Model"
                value={car.model}
                type="text"
                onChange = {e => handleInputChange(e)}
            fullWidth/>
            <TextField     
                margin="dense"
                name="color"
                label="Color"
                value={car.color}
                type="text"
                onChange = {e => handleInputChange(e)}
            fullWidth/>
            <TextField     
                margin="dense"
                name="fuel"
                label="Fuel"
                value={car.fuel}
                type="text"
                onChange = {e => handleInputChange(e)}
            fullWidth/>
            <TextField     
                margin="dense"
                name="year"
                label="Year"
                value={car.year}
                type="text"
                onChange = {e => handleInputChange(e)}
            fullWidth/>
            <TextField     
                margin="dense"
                name="price"
                label="Price"
                value={car.price}
                type="text"
                onChange = {e => handleInputChange(e)}
            fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCar} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
);
}