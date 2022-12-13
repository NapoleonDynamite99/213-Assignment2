import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { detailsStyles } from './../style';
export default function Screen(props) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={detailsStyles.imageStyle} source={{ uri: props.route.params._embedded.show.image.medium }} />
                </View>
                <View style={{margin:10,marginTop:70}}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25,fontWeight: "bold" }}>{props.route.params._embedded.show.name}</Text>
                        <Text style={{ fontSize: 17,marginTop:10 }}>{props.route.params._embedded.show.status}</Text>
                        <Text style={{ fontSize: 20,fontWeight: "bold",marginTop:10}}>Summery</Text>
                        <Text>{props.route.params._embedded.show.summary.toString().slice(0, 355)}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};
