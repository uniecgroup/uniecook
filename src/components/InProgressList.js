import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeout from 'react-native-swipeout';

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


export default class InProgressList extends React.Component{
  render(){   
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) =>{
      },
      onOpen: (secId, rowId, direction) => {
      },
      right: [
        {
          onPress: () => {

          },
          text: 'Ready?',
          type: 'delete',
          backgroundColor: '#ff9c00',
        }
      ],
      rowId: this.props.index,
      sectionId: 1
    }
    return (
        
        <SafeAreaView style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>In Progress</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item, index }) => (
              <Swipeout {...swipeSettings} style={styles.swipe}>
                <View style={styles.item}>
                    <Text style={styles.listId}>{item.title}</Text>
                    <Text style={styles.listName}>{item.name}</Text>
                    <Text style={styles.listTime}>{item.time}</Text>
                    <MaterialCommunityIcons name='check-circle' size={24} color='#ccc' style={{marginLeft:10}}/>
                </View>
              </Swipeout>
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
    swipe: {
      flex: 1,
      marginLeft: 80,
      marginRight: 80,
      backgroundColor: 'white',
      marginBottom: 10,
    },
    item: {
      backgroundColor: '#fff',
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,
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
    },
    listCheck: {
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
      fontSize: 20,
      fontWeight: '200',
      color: 'white',
    },
});