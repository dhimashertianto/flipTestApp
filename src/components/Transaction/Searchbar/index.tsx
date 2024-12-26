import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
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
      <Pressable
        onPress={() => setModalVisible(true)} // Trigger modal visibility
        style={styles.clearButton()}>
        <Text style={styles.clearButtonText()}>Urutkan</Text>
      </Pressable>
    </View>
  ),
);

export default SearchBar;
