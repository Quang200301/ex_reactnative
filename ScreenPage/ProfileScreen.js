import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [fromFetch, setFromFetch] = useState(false);

  useEffect(() => {
    if (!fromFetch) {
      goForFetch();
    }
  }, [fromFetch]);

  const goForFetch = () => {
    setFromFetch(true);
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setTimeout(() => {
          setLoading(false);
          setDataSource(responseJson);
        }, 2000);
      })
      .catch(error => console.log(error));
  }

  return (
    <View>
      <Text>ProfileScreen Page</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {dataSource.map((user, index) => (
            <View>

            <Text key={index}>{user.name}</Text>
            <Text key={index}>{user.username}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default ProfileScreen;
