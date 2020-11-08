/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '35ch',
    marginTop: '5ch',
    WebkitTextFillColor: '#FFFFFF',
    textTransform: 'none',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  formRow: {
    paddingTop: '5ch',
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '35ch',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

function Form(props) {
  const {
    age,
    handleChangeAge,
    dependents,
    handleChangeDependents,
    collectableEarnings,
    handleCollectableEarnings,
    totalLimitedDeductions,
    handleTotalLimitedDeductions,
    readyToSubmit,
    handleSubmit,
  } = props;
  const classes = useStyles();

  return (
    <div>
      <div>
        <TextField
          label="Idade"
          id="outlined-margin-i"
          className={classes.textField}
          variant="outlined"
          type="number"
          onChange={handleChangeAge}
          value={age}
        />
        <TextField
          label="Dependentes"
          id="outlined-margin-d"
          className={classes.textField}
          variant="outlined"
          type="number"
          onChange={handleChangeDependents}
          value={dependents}
        />
      </div>
      <div>
        <TextField
          label="Redimento Coletável"
          id="outlined-margin-rc"
          className={classes.textField}
          variant="outlined"
          type="number"
          onChange={handleCollectableEarnings}
          value={collectableEarnings}
        />
        <TextField
          label="Total deduções sujeitas a limite"
          id="outlined-margin-tdjl"
          className={classes.textField}
          variant="outlined"
          type="number"
          onChange={handleTotalLimitedDeductions}
          value={totalLimitedDeductions}
        />
      </div>
      <div className="submitButtonRow">
        <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} disabled={!readyToSubmit} onClick={handleSubmit}>
          Calcular
        </BootstrapButton>
      </div>
    </div>
  );
}

export default Form;
