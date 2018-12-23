const drawerWidth = 240;

export default theme => ({
    button: {
        margin: theme.spacing.unit,
        width: '10vh',
        height: '6vh',
    },
    input: {
        display: 'none',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        width: '155vh',
        height: '6vh',
    },
    'my-message': {
        'text-align': 'right',
        'background-color': 'skyblue',
    },
    'other-message': {
        'text-align': 'left',
        'background-color': 'grey',
    },
    message: {
        margin: '5px',
        'border-radius': '10px',
        padding: '5px',
        bottom: '0',
    },
});