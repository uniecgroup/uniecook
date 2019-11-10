import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, Dimensions, Platform, Modal, TouchableOpacity } from 'react-native';

import { Ionicons, FontAwesome5, AntDesign } from 'react-native-vector-icons';

//import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PopupModal extends React.Component {

    state = {

        visible: false,

    };

    showModal() {

        this.setState({

            visible: true,

        })

    }

    dismissModal() {

        this.setState({

            visible: false,

        });

    }

    render() {

        //显示Modal

        const { onClose, onSelect } = this.props;

        return (

            <Modal

                animationType={'fade'}

                transparent={true}

                visible={this.state.visible}

                onRequestClose={() => onClose}

            >

                <TouchableOpacity 

                    style={styles.modalContainer}

                    onPress={() => this.dismissModal()}

                >

                    <View style={styles.modalContent}>

                        <AntDesign name={'like2'} size={48} style={styles.modalIcon} />

                        <Text style={styles.modalTitle}>Well Done! Your Earnings</Text>

                        <Text style={styles.modalEarning}>$5.00</Text>

                        <TouchableOpacity

                            style={styles.modalDismiss}

                            onPress={() => this.dismissModal()}

                        >

                            <Text style={styles.modalDismissText}>Dismiss</Text>

                        </TouchableOpacity>

                    </View>

                </TouchableOpacity>

            </Modal>

        )

    }

}



const styles = StyleSheet.create({

    modalContainer: {

        backgroundColor: 'rgba(0,0,0,0.6)',

        flex: 1,

        alignItems: 'center',

        height: 500,

        justifyContent: 'center',

    },

    modalContent: {

        backgroundColor: 'white',

        width: Dimensions.get('window').width * 0.8,

        borderRadius: 10,

        alignItems: 'center',

        justifyContent: 'center',

        shadowColor: 'black',

        shadowOffset: { width: 0, height: 0 },

        shadowOpacity: 0.5,

        shadowRadius: 10,

    },

    modalIcon: {

        marginTop: 20,

        marginBottom: 10,

        color: '#0064d2',

    },

    modalTitle: {

        fontSize: 16,

        fontWeight: 'bold',

        marginBottom: 10,

    },

    modalEarning: {

        fontSize: 30,

        fontWeight: 'bold',

    },

    modalDismiss: {

        padding:20,

    },

    modalDismissText: {

        color: '#004ab0',

    }

})