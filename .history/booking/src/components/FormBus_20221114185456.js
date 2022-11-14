import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { DatePicker } from '@material-ui/pickers'

import dayjs from 'dayjs';
import { Button, Container } from '@mui/material';
import { ClassNames } from '@emotion/react';

export default function Form({setShowModal,setIsCreate}) {
     

    const [date, setDate] = React.useState(dayjs().format('YYYY-MM-DD'));
    // const [Nombre_bas, setNombre_bas] =React.useState("");
    const [Name, setName] =React.useState("");
    const [date_depart, setDate_depart] =React.useState("");
    const [date_arriver, setdate_arriver] =React.useState("");
    const [ville_depart, setville_depart] =React.useState("");
    const [ville_arriver, setville_arriver] =React.useState("");
    const [places, setplaces] =React.useState("");
    async function AddBus(){
        try{
          const response = await  fetch('api/buses/createbas', {
          method:'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({Name,date_depart,date_arriver,ville_depart,ville_arriver,places}),
        })
        if (response.status) {
          setShowModal(false)
          setIsCreate(true)

            // usenavigate("/displayBuses");  
        } else {
          alert('Failed')
        //   toast.error('Register failed!');
        }
      } catch (error) {
          error(error.response);
      }
      }


  return (
      <Container 
       md
        sx={{
          backgroundColor: '#fff',
          borderRadius: '5px',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
          padding: '30px',
          marginTop: '20px',
        }}
      >
    <React.Fragment >
      <Typography variant="h6" gutterBottom>
        Add Bus
      </Typography>
      <form onSubmit={ e => {
        e.preventDefault();
        AddBus();
      }}>
      <Grid container spacing={3} Container maxWidth="sm">
      <Grid item xs={12} sm={6}>
        </Grid>
        <DatePicker
        label="Date depart"
        value={date_depart}
        onChange={(newValue) => {
          setDate_depart(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />


        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            InputLabelProps={{ shrink: true, required: true}}
            onChange = {(e) => setName(e.target.value)}
            type="text"
            value={Name}
            // defaultValue={values.someDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date_depart"
            name="date_depart"
            label="Date depart"
            InputLabelProps={{ shrink: true, required: true}}
            onChange={(e) => setDate_depart(e.target.value)}
            type="date"
            value={date_depart}
            // defaultValue={values.someDate}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date_arriver"
            name="date_arriver"
            label="Date arriver"
            InputLabelProps={{ shrink: true, required: true}}
            onChange = {(e) => setdate_arriver(e.target.value)}
            type="date"
            value={date_arriver}
            // defaultValue={values.someDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ville_depart"
            name="ville-depart"
            label="ville-depart"
            fullWidth
            autoComplete="ville-depart"
            onChange = {(e) => setville_depart(e.target.value)}
            variant="standard"
            value={ville_depart}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ville_arriver"
            name="ville-arriver"
            label="ville-arriver"
            fullWidth
            autoComplete="ville-arriver"
            onChange = {(e) => setville_arriver(e.target.value)}
            variant="standard"
            value={ville_arriver}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            id="places"
            name="places"
            label="places"
            fullWidth
            variant="standard"
            onChange = {(e) => setplaces(e.target.value)}
            value={places}
          />
        </Grid>
       <Grid item xs={12} sm={6}>
        <Button 
        type ="submit"
        variant="contained">
        Add Bus
       </Button>
       </Grid>
      </Grid>
      </form>
    </React.Fragment>
      </Container>
  );
}
