import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { DataProvider } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../hook/useData';
import { styles } from '../style';
import Animated from 'react-native-animated-loader';
import { homeStyle } from '../style';

export default function Screen(props) {
    const { getDetails } = useContext(DataContext);
    const navigation = props.navigation;
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(true);
    console.log(props.route.params);

    useEffect(() => {
        async function featchData() {
            let a = await getDetails();
            let b = await a.filter(item => {
                if (item._embedded.show.type == props.route.params[1] && item._embedded.show.language == props.route.params[0] && item._embedded.show.status == props.route.params[2]) {
                    return true;
                } else {
                    return false;
                }
            })
            let c = await b.filter(item => {
                if (item._embedded.show.image !== null) {
                    return true;
                } else {
                    return false;
                }
            })
            if(c.length>20){
                
                setData(c.slice(0, 19));
            }else{
                console.log(c.length);
                setData(c);
            }
            setVisible(!visible);
        }
        featchData();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

            <View style={{ flex: 1 }}>
                {visible ? <Animated
                    visible={visible}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={homeStyle.lottie}
                    speed={1}>
                    <Text style={{ fontSize: 23 }}>Fetching Data...</Text>
                </Animated> : <View>
                    <Text style={{ fontSize: 23, color: 'White', margin: 10 }}>Selected Shows</Text>

                    <FlatList
                        style={{ paddingBottom: 15 }}
                        data={data}
                        renderItem={({ item, index, separators }) => {
                            console.log(item._embedded.show.image);
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Details', item);
                                }}>
                                    <View style={homeStyle.cardView}>
                                        <View >
                                            <Image source={{ uri: item._embedded.show.image.medium }}
                                                style={{ width: 60, height: 60, borderRadius: 30 }} />
                                        </View>
                                        <View style={{ padding: 10 }} >
                                            <Text style={{ fontSize: 17 }}>{item._embedded.show.name}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontSize: 15 }}>type:{item._embedded.show.type}</Text>
                                                <Text style={{ fontSize: 15, marginLeft: 20 }}>status:{item._embedded.show.status}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>}
                {/* <View>
                    <Text style={{ fontSize: 23, color: 'White', margin: 10 }}>Show List</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item, index, separators }) =>{ 
                            return(
                            <TouchableOpacity onPress={() => {  navigation.navigate('Details', item); }}>
                                <View style={styles.cardView}>
                                    <View >
                                        <Image source={{ uri: item._embedded.show.image.medium }}
                                            style={{ width: 60, height: 60, borderRadius: 30 }} />
                                    </View>
                                    <View style={{ padding: 10 }} >
                                        <Text style={{ fontSize: 17 }}>{item._embedded.show.name}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15 }}>type:{item._embedded.show.type}</Text>
                                            <Text style={{ fontSize: 15, marginLeft: 20 }}>status:{item._embedded.show.status}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}}
                        keyExtractor={item => item.id}
                    />
                </View> */}

            </View>
        </View>
    );
}
