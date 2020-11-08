import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import QuestionItem from '@material-ui/icons/Book';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Toolbar } from '@material-ui/core';

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

const useStyles = makeStyles({
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
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

function Header() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            color="inherit"
          />
          <Typography variant="title" color="white" className="headerTitle">
            <FontAwesomeIcon icon={faDollarSign} />
            {' '}
            Reforço PPR
          </Typography>

          <section className={classes.rightToolbar}>
            <span className="headerQuestionMarkIcon"><FontAwesomeIcon icon={faQuestionCircle} onClick={handleOpen} /></span>
          </section>
        </Toolbar>
      </header>

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
          Ajuda
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom />

          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <QuestionItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Porque deve reforçar o seu PPR?" secondary="O PPR para além de ser um instrumento financeiro com propósito de geral rentabilidade a longo prazo, permite também ser deduzido no IRS segundo certos limites, podendo, desta forma, ajudar a que receba mais ou que pague menos." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <QuestionItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Quais são os limites de dedução?" secondary="Declarar os reforços do PPR no IRS dá direito a um benefício fiscal de até 20%. O valor máximo varia consoante a idade. Até aos 35 anos pode deduzir até 400 euros. Dos 35 aos 50 anos pode deduzir até 350 euros. E a partir dos 50 anos pode deduzir até 300 euros." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <QuestionItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Compensa sempre?" secondary="Não, depende do limite global que e do total de despesas sjeitas a limite. O objetivo deste pequeno simulador é precisamente ajudar a perceber se na sua situação compensa." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <QuestionItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Onde obter o rendimento coletável?" secondary="Existem duas possibilidades, pode obtê-lo atravé da nota de liquidação do ultimo ano fiscal ou se a sua situação financeira é consideravelmente diferente deve calculá-lo tendo em conta o seu rendimento e as deduções especificas a que o mesmo está sujeito." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <QuestionItem />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Onde obter o total de deuduções sujeitas a limite?" secondary="Existem duas possibilidades, pode obtê-lo através da nota de liquidação do ultimo ano fiscal ou se a sua situação financeira é consideravelmente diferente deve calculá-lo tendo em conta as despesas que lhe são apresentadas no portal e-fatura, fazendo uma projção daquilo que serão estimadamente as suas despesas do corrente ano fiscal." />
            </ListItem>
          </List>
        </DialogContent>

      </Dialog>
    </>
  );
}

export default Header;
