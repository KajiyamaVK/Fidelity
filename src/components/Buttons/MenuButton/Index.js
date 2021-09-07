import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/*
============= PROPS AVAILABLE ====================

props.backColor = background-color
props.hoverBackColor = &hover Background-Color
props.mainColor = text color
props.fontSize = font size
props.hoverColor = &hover text color

=================================================
*/



const useStyles = makeStyles((theme) => ({
    margin: {
        borderRadius: '20px',
        padding: '0px 16px',
    },
    outlined: {
        border: '1px solid black',
        backgroundColor: 'transparent'
    }
}));

function createButtonStyle(backColor, hoverBackColor, mainColor, hoverColor, fontSize) {

    const ColorButton = withStyles((theme) => ({
        root: {
            color: mainColor,
            backgroundColor: backColor,
            fontSize: fontSize,
            width: '70vw',
            '&:hover': {
                backgroundColor: hoverBackColor,
                color: hoverColor,
            },
        },
    }))(Button);


    return ColorButton;

}

export default function MenuButton(props) {

    const classes = useStyles();

    const ColorButton = createButtonStyle(props.backColor
        , props.hoverBackColor
        , props.mainColor
        , props.hoverColor
        , props.fontSize);

    let classesValues = `${classes.margin}`

    if (props.outlined) { classesValues += ` ${classes.outlined}` }

    return (

        <ColorButton variant="contained" className={classesValues}>
            {props.text}
        </ColorButton>

    )


}