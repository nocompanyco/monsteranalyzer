import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    width: '418px',
    height: '32px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default Styles;
