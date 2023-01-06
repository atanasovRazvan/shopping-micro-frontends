import {Button, Checkbox, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import './styles/form.css';

const Form = ({sendOrder}) => {

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [consentGiven, setConsentGiven] = useState(false);

    return(
      <div className="cart_form">
          <TextField
              label="Full Name"
              fullWidth={true}
              id="filled-start-adornment"
              required={true}
              InputProps={{
                  startAdornment: <InputAdornment position="start"> > </InputAdornment>,
              }}
              variant="standard"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
              label="Address"
              fullWidth
              required={true}
              id="filled-start-adornment"
              InputProps={{
                  startAdornment: <InputAdornment position="start"> > </InputAdornment>,
              }}
              variant="standard"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
              label="Phone Number"
              fullWidth
              required={true}
              id="filled-start-adornment"
              InputProps={{
                  startAdornment: <InputAdornment position="start"> > </InputAdornment>,
              }}
              variant="standard"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="cart_form--bottom">
              <Checkbox onChange={() => setConsentGiven(!consentGiven)}/>
              <Typography variant="body">
                  I have read and agree to the <a href="https://www.lipsum.com/" target="_blank">Terms and Conditions and Privacy Policy</a>
              </Typography>
          </div>
          <Button
              variant="contained"
              disabled={!(consentGiven && fullName && address && phoneNumber)}
              onClick={() => sendOrder(fullName, address, phoneNumber)}
          >
              Order
          </Button>
      </div>
    );
}

export default Form;
