import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import IngredientsIcon from '@material-ui/icons/Kitchen';
import RecipeIcon from '@material-ui/icons/ImportContacts';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GroceryIcon from '@material-ui/icons/ListAlt';

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
            <BottomNavigationAction label="Ingredients" icon={<IngredientsIcon />} />
            <BottomNavigationAction label="Recipes" icon={<RecipeIcon />} />
            <BottomNavigationAction label="Liked" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Groceries" icon={<GroceryIcon />} />
        </BottomNavigation>
    );
}

export default NavBar
