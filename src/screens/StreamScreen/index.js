import React, { Component, useEffect, useState } from 'react'
import { Text, TextInput, View, StyleSheet, FlatList, Image, ImageBackground } from 'react-native'
import { BackGroundView } from '../../components'
import { getRequestListGame } from '../../redux/thunk/gameThunkAction';
import { connect, useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../themes/styles';
import AntIcons from 'react-native-vector-icons/AntDesign'
import { getListGame } from '../../api';
import { mapIP } from '../../utils/common';
import {getListGameSelector} from '../../redux/selector/gameSelector'

const StreamScreen = () => {
    // const [listGame, setListGame] = useState([]);
    const dispatch = useDispatch();
 
    const listGame = useSelector(getListGameSelector)

    // const listGame= useSelector(state => state.gameReducer.listGame)

    useEffect(() =>{
    //     (async () => {
    //     try {
    //         const result = await getListGame();
    //         setListGame(mapIP(result.data));
    //     } catch (err) {
    //         console.log(err)
    //     }
    // })();
    dispatch(getRequestListGame());

    }, [])
    

        return (
            <BackGroundView style={styles.container} edges={['top']}>
                 <View style ={styles.headerContainer}>
                     <Text style={styles.headerText}>Streaming</Text>
                     <View>
                     <TextInput style={styles.search}/>
                     <AntIcons 
                     style = {{position:'absolute', top: 5, right: 10}}
                     name='search1' color={COLORS.white} size={22}></AntIcons>
                     </View>

                 </View>
                 <View style={styles.popularGameContainer}>
                     <Text style={{color:'white'}}>Popular Game</Text>
                     <FlatList
                     style={{flexGrow:0, marginTop:10}}
                     horizontal
                     showsHorizontalScrollIndicator = 'false'
                     ItemSeparatorComponent={()=><View style={{width:20}}></View>}
                     data={listGame}
                     renderItem={({item}) => <Image style={styles.imagePopular} source={{uri: item.icon}}/>}
                     >

                     </FlatList>
                 </View>
                 <View style={styles.liveContainer}>
                     <FlatList
                     
                     ItemSeparatorComponent={()=><View style={{height: 20}}/>}
                     data={listGame}
                     renderItem={({item})=><ImageBackground style={{height: 200}}
                     source={{uri: item.preview[0]}}
                     
                     />}
                     />
                 </View>
            </BackGroundView>

        )
    }

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    popularGameContainer:{
        flex: 1,
    },
    liveContainer: {
        flex: 2,
    },
    headerText:{
        fontSize:24,
        fontWeight: '900',
    },
    search: {
        backgroundColor: '#404040',
        padding: 10,
        borderRadius: 15,
        paddingRight: 40
    },
    imagePopular: {
        height:80,
        width:80,
        borderRadius:15
    },

})

export default StreamScreen;

