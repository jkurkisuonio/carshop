import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Addcar from './AddCar';


export default function Carlist() {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);  
    }

        function Alert(props) {
            return <MuiAlert elevation={6} variant="filled" {...props} />;
          }

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
    }

    const deleteCar = (link) => {
        if (window.confirm('Are you sure?')){
        fetch(link,{method: 'DELETE'})
        .then (res => { fetchData();
        setOpen(true);
        })
        .catch(err => console.error(err))
        }
    } 

    const columns = [
        {
            Header: 'Brand', accessor: 'brand'
        },
        {
            Header: 'Model', accessor: 'model'
        },
        {
            Header: 'Color', accessor: 'color'
        },
        {
            Header: 'Fuel', accessor: 'fuel'
        },
        {
            Header: 'Year', accessor: 'year'
        },
        {
            Header: 'Price', accessor: 'price'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: '_links.self.href',
            Cell: row => <Button color="secondary" size="small" onClick={() => deleteCar(row.value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <Addcar />
            <ReactTable filterable={true} data={cars} columns={columns}/>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Deleted successfully!
        </Alert>
      </Snackbar>
        </div>
    )
 }