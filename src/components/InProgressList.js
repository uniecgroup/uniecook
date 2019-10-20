import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DATA = [
    {
      id: '584a0f-3da1-471f-bd96-145571e29d72',
      title: '4369',
      name: 'Laura R.',
      time: '2:43pm',
      price: '$9.95',
    },
    {
      id: '58694a0f-471f-bd96-145571e29d72',
      title: '4368',
      name: 'Rai S.',
      time: '2:43pm',
      price: '$29.95',
    },
];

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}
  

export default class InProgressList extends React.Component{
  render(){
    return (
        
        <SafeAreaView style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>In Progress</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={()=>{
                  this.props.navigation.navigate('InProgressDetailsPage');
              }}>
                <Text style={styles.listId}>{item.title}</Text>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listPrice}>{item.price}</Text>
                <Text style={styles.listTime}>{item.time}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    item: {
      backgroundColor: '#ffffff',
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
      marginLeft: 80,
      marginRight: 80,
      flex: 1,
      flexDirection: 'row',
    },
    listId:{
      flex: 1,
    },
    listName:{
      flex: 5,
      fontWeight: 'bold',
    },
    listPrice: {
      flex: 1,
    },
    listTime:{
      flex: 1,
      textAlign: 'right',
    },
    title: {
      fontSize: 14,
    },
    heading: {
      paddingBottom: 15,
      marginTop: 10,
      marginLeft: 80,
    },
    headingText: {
      fontSize: 14,
      fontWeight: '200',
      color: 'white',
    },
});