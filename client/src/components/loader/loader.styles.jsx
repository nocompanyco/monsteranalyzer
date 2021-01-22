import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  CircularProgress: {
    color: '#3BB7E3',
  },
}));

export default useStyle;
