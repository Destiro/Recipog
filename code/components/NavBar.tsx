import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon1 from "../assets/favicon.png"

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const NavBar = () => {
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
            <BottomNavigationAction label="Ingredients" icon={Icon1} />
            <BottomNavigationAction label="Recipes" icon={Icon1} />
            <BottomNavigationAction label="Liked" icon={Icon1} />
            <BottomNavigationAction label="Groceries" icon={Icon1} />
        </BottomNavigation>
    );
}

export default NavBar
