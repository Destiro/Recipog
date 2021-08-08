import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const navBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Recents" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Nearby" />
        </BottomNavigation>
    );
}

export default navBar
