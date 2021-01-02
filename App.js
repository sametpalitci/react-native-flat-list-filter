import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput
} from 'react-native';

const DATA = [
  {
    "id": "1",
    "name": "John",
    "corpation": "corpation"
  },
  {
    "id": "2",
    "name": "David",
    "corpation": "atasun"
  },
];


const App = (props) => {
  const [getValue, setValue] = useState("");
  const [getData, setData] = useState(DATA);
  const listHeaderCMPNT = () => {
    return (
      <TextInput
        style={{ width: 200, height: 100, backgroundColor: 'red' }}
        value={getValue}
        onChangeText={textChange => {
          setValue(textChange);
          searchFilter(textChange);
        }}
      />
    );
  }
  const searchFilter = (text) => {
    const newData = DATA.filter((item) => {
      const listItem = `${item.name.toLowerCase()} ${item.corpation.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });
    setData(newData);
  }
  return (
    <>
      <View>
        <FlatList
          ListHeaderComponent={listHeaderCMPNT()}
          data={getData}
          renderItem={({ item }) => {
            return <Text>{item.name}</Text>
          }}
          keyExtractor={item => item.id}

        />
      </View>
    </>
  );
};


export default App;
