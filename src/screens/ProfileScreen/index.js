import React, { Component, useEffect } from 'react'
import { Image, Text, View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BackgroundView from '../../components/BackGroundView'
import { getListGameSelector } from '../../redux/selector/gameSelector'
import { getRequestListGame } from '../../redux/thunk/gameThunkAction'
import { COLORS } from '../../themes/styles'
import ListProfile from './component/ListProfile'

  const  ProfileScreen = () => {


    const dispatch = useDispatch();
    const listGame = useSelector(getListGameSelector)
    

    useEffect(() =>{
      
        dispatch(getRequestListGame());
    
        }, [])

        return (
            <BackgroundView edges={['top']} style={{padding: 20}}>
                <View style={styles.headerContainer}>
                    <View style={styles.avatar}/>
                    <Text style={{color: 'white', fontSize:20, fontWeight: '700'}}>Hello</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.pro}>
                        <View style={styles.gamer}>
                        <Text style={{color:'white'}}>Pro Gamer</Text>
                        </View>
                        <View style={styles.coder}>
                        <Text >Pro Coder</Text>
                        </View>
                        
                    </View>
                    <View style={styles.moreInfo}>
                        <View style={styles.games}>
                        <Text style={styles.number}>250 </Text>
                        <Text style={{color:'white'}}>Games</Text>
                        </View>
                        <View style={styles.pro}>
                        <Text style={styles.number}>4 </Text>
                        <Text style={{color:'white'}}>Purchased</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.purchase}>
                    <View style={styles.textPurchase}>
                    <Text style={{color:'white'}}>Purchased Games</Text>
                    </View>
                    <FlatList
                    data={listGame}
                    renderItem={({item})=> <ListProfile item={item}/>
               
                    }
                    />
                    
                </View>

                
            </BackgroundView>
        )
    
}

const styles = StyleSheet.create({
    headerContainer :{
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        marginTop: 50,

    },
    imagePopular: {
        height:80,
        width:80,
        borderRadius:15
    },
    avatar :{
            backgroundColor: COLORS.lightPurple,
            height: 100,
            width: 100,
            borderRadius:50,
            marginBottom: 20    
    },
    info:{
        flex:1,
        marginTop:10
        
    },
    purchase:{
        flex: 2,
        marginTop: -50

    },
    pro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gamer:{
        borderRadius:10,
        backgroundColor: COLORS.lightPurple,
        marginRight:20,
        padding: 7,
    },
    coder:{
        borderRadius:10,
        backgroundColor: 'yellow',
        padding: 7,
    },
    games:{
        flexDirection: 'row',
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    moreInfo:{
        flexDirection: 'row',
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number:{
        fontWeight: '500',
        fontSize:25,
        color: 'white'
    },
    textPurchase:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    

})

export default ProfileScreen;