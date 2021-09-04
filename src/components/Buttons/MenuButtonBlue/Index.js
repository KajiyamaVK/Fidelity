
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

//asdaa
const MenuButtonBlue = withStyles((theme) => ({

    root: {
        fontSize: 20,
        backgroundColor: '#0d47a1',
        color: theme.palette.getContrastText('#0d47a1'),
        '&:hover': {

            backgroundColor: '#244A71',
            color: theme.palette.getContrastText('#244A71'),

        }

    }

}))(Button);

/*
const MenuButtonBlue = ({ children }) => {

    return (
        <>
            <Button variant="contained" color="primary" size="large">{children}</Button>
        </>

    );

};
*/

export default MenuButtonBlue;
