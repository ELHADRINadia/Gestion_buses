import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { Button } from '@mui/material';

export default function Form() {
     
    const [date, setDate] = React.useState(dayjs().format('YYYY-MM-DD'));
    const [date_depart, setDate_depart] =React.useState("");
    const [date_arriver, setDate_Arriver] =React.useState("");
    const [ville_depart, setVille_depart] =React.useState("");
    const [ville_arriver, setVille_arriver] =React.useState("");
    const [places, setPlaces] =React.useState("");


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Booking
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date_depart"
            name="date_depart"
            label="Date depart"
            InputLabelProps={{ shrink: true, required: true }}
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
            InputLabelProps={{ shrink: true, required: true }}
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
            value={places}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="status"
            name="status"
            label="status"
            fullWidth
            variant="standard"
            value="pending"
          />
        </Grid>
        
       <Grid item xs={12} sm={6}>
        <Button onSubmit={Form()}
        type ="submit"
        variant="contained">
        Add Booking
       </Button>
       </Grid>
      </Grid>
    </React.Fragment>
  );
}
