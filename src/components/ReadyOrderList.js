import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
    {
      id: '58694a0f-3da1-471f-bd96-1e29d72',
      title: '4375',
      name: 'Tara G.',
      time: '7:43pm',
      price: '$60.35',
      courier: 'Rechard',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145572',
      title: '4374',
      name: 'Christy P.',
      time: '8:43pm',
      price: '$36.44',
      courier: 'Rechard',
    },
    {
      id: '58694a0f-3da1-471f-145571e29d72',
      title: '4373',
      name: 'Randy I.',
      time: '1:43pm',
      price: '$12.33',
      courier: 'Rechard',
    },
    {
      id: '58694a0f-3da1-145571e29d72',
      title: '4372',
      name: 'Brittany F.',
      time: '9:43pm',
      price: '$15.98',
      courier: 'Rechard',
    },
    {
      id: '58694a0f-3da1-4f-bd96-145571e29d72',
      title: '4371',
      name: 'Luciana A.',
      time: '3:43pm',
      price: '$41.74',
      courier: 'Rechard',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1451e29d72',
      title: '4370',
      name: 'Bevin W.',
      time: '6:43pm',
      price: '$36.65',
      courier: 'Rechard',
    },
    {
      id: '584a0f-3da1-471f-bd96-145571e29d72',
      title: '4369',
      name: 'Laura R.',
      time: '2:43pm',
      price: '$9.95',
      courier: 'Rechard',
    },
    {
      id: '58694a0f-471f-bd96-145571e29d72',
      title: '4368',
      name: 'Rai S.',
      time: '2:43pm',
      price: '$29.95',
      courier: 'Rechard',
    },
];

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}
  

export default class ReadyOrderList extends React.Component{
  render(){
    return (
        
        <SafeAreaView style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Ready for Pickup</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={()=>{
                  this.props.navigation.navigate('ReadyDetailsPage');
              }}>
                <MaterialCommunityIcons name='circle' size={20} color='#4285f4' style={{marginRight:30}} />
                <Text style={styles.listId}>{item.title}</Text>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listTime}>{item.time}</Text>
                <Text style={styles.listCourier}>{item.courier}</Text>
                <MaterialCommunityIcons name='check-circle' size={24} color='#3cb46e' style={{marginLeft:10}}/>
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
      flex: 4,
      fontWeight: 'bold',
    },
    listPrice: {
      flex: 1,
    },
    listTime:{
      flex: 1,
    },
    listCourier: {
      flex: 2,
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
      fontSize: 20,
      fontWeight: '200',
      color: 'white',
    },
});