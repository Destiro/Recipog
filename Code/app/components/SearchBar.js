import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from "react-native";

const SearchBar = ({searchHandler}) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => {
        setSearchQuery(query);
        searchHandler(query);
    }

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
        />
    );
};

const styles = StyleSheet.create({
    search: {
        width: '95%',
        height: '45%',
        marginTop: 5,
        borderRadius: 5,
        shadowOpacity: 0,
        borderWidth: 1,
    }
});

export default SearchBar;
