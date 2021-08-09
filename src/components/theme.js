import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  
});
export default theme;