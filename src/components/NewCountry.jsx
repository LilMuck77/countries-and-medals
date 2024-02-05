import React, { Component } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

class NewCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newCountryName: '',
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, newCountryName: '' });
  };

  handleSave = () => {
    const { newCountryName } = this.state;
    const { onAddCountry } = this.props;

    if (newCountryName.trim() !== '') {
      onAddCountry(newCountryName);
      this.handleClose();
    }
  };

  render() {
    const { open, newCountryName } = this.state;

    return (
      <> 
      
        <Fab color="primary" aria-label="add" onClick={this.handleOpen} style={{ position: 'fixed', top: '30px', left: '50px' }}>
          <AddIcon />
        </Fab>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Add New Country</DialogTitle>
          <DialogContent>
            <TextField
              label="Country Name"
              value={newCountryName}
              onChange={(e) => this.setState({ newCountryName: e.target.value })}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSave} disabled={newCountryName.trim() === ''}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default NewCountry;
