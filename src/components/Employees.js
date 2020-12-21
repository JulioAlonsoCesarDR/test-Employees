import React, { Fragment, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Box, Button, Container, Grid, TextField } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from '@date-io/luxon';

const Employees = () => {
    const [user, setUser] = useState({name:'',
                                        last_name:'' ,
                                        birthday:null })

    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value })
    }
    const handleClick = (e)=> {
        e.preventDefault();
        console.log('user', user)
        if(user.name ===''){}
    }
    return (
        <Fragment>
            <Container>
                <form>
                    <Box m={5}>
                        <h3>
                            Nuevo usuario
                        </h3>
                        <Grid container spacing={5} justify='center' alignItems='center'>
                            <Grid item>
                                <TextField
                                required
                                id='name'
                                error
                                label='Nombre'
                                value={user.name}
                                onChange={(e)=>handleChange(e)}
                                />
                            </Grid>
                            <Grid item>
                            <TextField
                                required
                                id='last_name'
                                error
                                label='Apellido'
                                value={user.last_name}
                                onChange={(e)=>handleChange(e)}
                                />
                            </Grid>
                            <Grid item>
                            <MuiPickersUtilsProvider utils={LuxonUtils} >
                                <DatePicker
                                    required
                                    error
                                    disableFuture
                                    openTo="year"
                                    format="yyyy/MM/dd"
                                    label="Date of birth"
                                    views={["year", "month", "date"]}
                                    value={user.birthday}
                                    onChange={(e)=>setUser({...user,birthday:`${e.year}/${e.month}/${e.day}` })}
                                />
                            </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" 
                                onClick={(e)=>handleClick(e)}>
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                </form>
            </Container>
        </Fragment>
    )
}

export default Employees