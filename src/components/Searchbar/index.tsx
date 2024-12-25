import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './SearchBar.style';

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
  setModalVisible: (visible: boolean) => void;
};

const SearchBar = React.memo<SearchBarProps>(
  ({search, setSearch, setModalVisible}) => (
    <View style={styles.searchContainer()}>
      <TextInput
        style={styles.searchInput()}
        placeholder="Search Transactions"
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
      />
      <TouchableOpacity
        onPress={setModalVisible.bind(null, true)}
        style={styles.clearButton()}>
        <Text style={styles.clearButtonText()}>Urutkan</Text>
      </TouchableOpacity>
    </View>
  ),
);

export default SearchBar;
