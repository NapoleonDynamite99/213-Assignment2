import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


export const homeStyle = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100,
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28
    },
    bannerStyle: {
        width: '100%', height: '30%', margin: 1, borderRadius: 30,
    },
    HeaderStyle: {
        fontSize: 25,
        // alignSelf: 'center',
    },
    tetStyle: {
        fontSize: 15
    },
    HeaderView: {
        justifyContent: 'center', alignContent: 'center',
        backgroundColor: '#F7F7FE', borderRadius: 30, padding: 10, margin: 10, shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    cardView: {
        // justifyContent: 'center', alignContent: 'center',
        backgroundColor: '#F7F7FE', borderRadius: 30, padding: 10, margin: 10, shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        margin: 10,
        flexDirection: 'row'
    }
});

export const detailsStyles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 250,
        // resizeMode: 'stretch',
    },
    items: {
        margin: 20,
        
    },
    itemsText: {
        fontSize: 18
    }
});
export const styles = StyleSheet.create({
    bannerStyle: {
        width: '100%', height: '30%', margin: 1, borderRadius: 30,
    },
    HeaderStyle: {
        fontSize: 25,
        // alignSelf: 'center',
    },
    tetStyle: {
        fontSize: 15
    },
    HeaderView: {
        justifyContent: 'center', alignContent: 'center',
        backgroundColor: '#F7F7FE', borderRadius: 30, padding: 10, margin: 10, shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    cardView: {
        // justifyContent: 'center', alignContent: 'center',
        backgroundColor: '#F7F7FE', borderRadius: 30, padding: 10, margin: 10, shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        margin: 10,
        flexDirection: 'row'
    },

    imageStyle: {
        width: 300,
        height: 300,
        borderRadius: 360
    },
    items: {
        margin: 20
    },
    itemsText: {
        fontSize: 15
    },
    modalContainer: {
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        width: 100,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    redbuttonStyle: {
        backgroundColor: 'red',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        width: 100,
    },

});