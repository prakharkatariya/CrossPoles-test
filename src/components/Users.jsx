import { useDispatch, useSelector } from "react-redux";
import { loadusers } from "../store/users";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.list);
    const [user,setUser] = useState()
    
    useEffect(()=>{
        setUser(users) 
    },[users])
    useEffect(() => {
        dispatch(loadusers());
    }, [dispatch]);
    
    const handleDelete = (id) =>e=>{ 
        e.preventDefault()
        let filterUser = user.filter(item => item.id !== id)
        setUser(filterUser)
    } 
    return (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Phone</TableCell>
                                        <TableCell align="right">City with zip</TableCell> 
                                    </TableRow>
                                </TableHead>
                                 <TableBody>
                                    {user?.map((row) => (
                                        <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={handleDelete(row.id)}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell> 
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.phone}</TableCell>
                                            <TableCell align="right">{row.address.city}&nbsp;{row.address.zipcode}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody> 
                            </Table>
                        </TableContainer>
                    )  
};

export default Users;