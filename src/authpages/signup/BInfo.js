import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function BInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Bussiness Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="companyName" label="Company / Bussiness Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="storeName"
            label="Store Name"
            fullWidth           
          />
        </Grid>
        <Grid item xs={12} >
          <TextField required id="pCategory" label="Product Category" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="gst" label="GST Number" fullWidth autoComplete="gst" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="pan"
            label="PAN ID"
            fullWidth
            autoComplete="pan"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
