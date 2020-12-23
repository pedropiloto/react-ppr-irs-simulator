import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MoneyItem from '@material-ui/icons/Money';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Box from '@material-ui/core/Box';
import * as gtag from '../lib/gtag';

import Header from './Header';
import Form from './Form';
import { calc } from '../utils/utils';
import Footer from './Footer';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    color: '#FFFFFF',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function App() {
  const [age, setAge] = useState(24);
  const [dependents, setDependents] = useState(0);
  const [collectableEarnings, setCollectableEarnings] = useState(20000);
  const [totalLimitedDeductions, setTotalLimitedDeductions] = useState(696);
  const [result, setResult] = useState(2000);
  const [readyToSubmit, setReadyToSubmit] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function isReadyToSubmit() {
    if (
      typeof age !== 'undefined'
      && typeof dependents !== 'undefined'
      && typeof collectableEarnings !== 'undefined'
      && typeof totalLimitedDeductions !== 'undefined'
    ) {
      setReadyToSubmit(true);
    }
  }

  function handleChangeAge(event) {
    const { value } = event.target;
    setAge(value);
    const calcResult = calc(value, dependents, collectableEarnings, totalLimitedDeductions);
    setResult(calcResult);
    isReadyToSubmit();
  }

  function handleChangeDependents(event) {
    const { value } = event.target;
    setDependents(value);
    const calcResult = calc(age, value, collectableEarnings, totalLimitedDeductions);
    setResult(calcResult);
    isReadyToSubmit();
  }

  function handleCollectableEarnings(event) {
    const { value } = event.target;
    setCollectableEarnings(value);
    const calcResult = calc(age, dependents, value, totalLimitedDeductions);
    setResult(calcResult);
    isReadyToSubmit();
  }

  function handleTotalLimitedDeductions(event) {
    const { value } = event.target;
    setTotalLimitedDeductions(value);
    const calcResult = calc(age, dependents, collectableEarnings, value);
    setResult(calcResult);
    isReadyToSubmit();
  }

  function handleSubmit() {
    console.log('cenas');
    gtag.event({
      action: 'submit_form',
      category: 'PPR',
      label: 'submit ppr data form',
    });
    const calcResult = calc(age, dependents, collectableEarnings, totalLimitedDeductions);
    setResult(calcResult);
    console.log('cenas', calcResult);
    handleOpen();
  }

  return (
    <div>
      <Header />
      <div className="root">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Form
            handleChangeAge={handleChangeAge}
            handleChangeDependents={handleChangeDependents}
            handleCollectableEarnings={handleCollectableEarnings}
            handleTotalLimitedDeductions={handleTotalLimitedDeductions}
            age={age}
            dependents={dependents}
            collectableEarnings={collectableEarnings}
            totalLimitedDeductions={totalLimitedDeductions}
            readyToSubmit={readyToSubmit}
            handleSubmit={handleSubmit}
          />
        </Box>
        <Footer />
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            backgroundColor: '#666666',
            boxShadow: 'none',
            borderRadius: '1ch',
            WebkitTextFillColor: '#FFFFFF',
          },
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Resultado
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom />

          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MoneyItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Majoração" secondary={`${result.majoration} €`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MoneyItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Limite Global" secondary={`${result.limit} €`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MoneyItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Montante disponível para ser deduzido" secondary={`${result.deductionAmountAvailable} €`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MoneyItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Montante disponível para reforçar PPR" secondary={`${result.pprReinforcement} €`} />
            </ListItem>
          </List>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default App;
