import './table.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  tracking,
  date,
  status,
) {
  return { name, tracking, date, status};
}

const rows = [
  createData('Lasania chicken fri', 198342, "2 march 2021", "Approved"),
  createData('Chilli chicken wings', 198323, "2 march 2021", "Approved"),
  createData('fry biryani', 198442, "2 march 2021", "pending"),
  createData('chicke tikka', 190342, "2 march 2021", "Approved"),
  createData('mandi biryani', 190242, "2 march 2021", "waiting for confirmation"),
];
const makeStyles=(status)=>{
    if (status === "Approved"){
        return{
            background:'rgb(145 254 159 / 47%)',
            color:"green",
        }
    }
    else if(status === "pending"){
        return{
            background:'#ffadad8f',
            color:"red",
        }
    }
    else{
        return{
            background:'black',
            color:"white",
        }
    }
}

export default function BasicTable() {
  return (
    <div className='table'>
    <h3>Recent Orders</h3>
    
    <TableContainer component={Paper}
    style={{boxShadow:'0px  13px 20px 0px #80808029'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Approved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.tracking}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
