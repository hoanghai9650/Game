import axios from 'axios';
import React, { Component } from 'react';
import {  View, StyleSheet, Image, FlatList } from 'react-native';
import {BackGroundView, Text} from '../../components';
import { COLORS } from '../../themes/styles';
import { mapIP } from '../../utils/common';
import GameItem from './components/GameItem';
import {getListGame} from '../../api';
import {ScreenName} from '../../utils/constant';
import { connect } from 'react-redux';
import {setListGame} from '../../redux/actions/gameActions'
import {getRequest, getRequestSuccess, getRequestFail} from '../../redux/actions/gameActions'
import { getRequestListGame } from '../../redux/thunk/gameThunkAction';
class HomeScreen extends Component {

    state={
        
        loading: true,
    }


    componentDidMount() {
        this.props.getRequestListGame()
        // this.props.getRequest();
        //  getListGame()
        //  .then(result => {
        //      const listGame = mapIP(result.data);
        //     //  const icon = gameDetail.icon.replace('localhost', '10.0.2.2')
        //     //  const preview = gameDetail.preview.map(item =>
        //     //      item.replace('localhost', '10.0.2.2')
        //     //  );
        //     this.props.setListGame(listGame);
        //     this.props.getRequestSuccess();

        //         })
        //  .catch(err => {
        //      console.error(err);
        //      this.props.getRequestFail();
        //     });
    }

    render() {
        const { loading} = this.state;
        const {listGame} = this.props;
        return (
            <BackGroundView edges={['top']}>
                
            <View style={styles.headerContainer} >
                <View>
                <Text style={styles.headText}>Hello 
                <Text style={styles.fontBold}> Cyber</Text>
                </Text>
                <Text>Best game for today</Text>
                </View>
                <View style ={styles.avatar}/>
            </View>

            {/* <GameItem gameItem={listGame}/> */}
            
            <FlatList
               data={listGame}
               showsVerticalScrollIndicator={false}
               renderItem={({item}) => <GameItem gameItem={item} />}
               ItemSeparatorComponent={() => <View style={{height: 70}} />}
               contentContainerStyle={{paddingBottom: 100}}
            />
                
            </BackGroundView>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 10,
        marginBottom: 15,

    },
    headText: {
        fontSize:30,

    },
    fontBold:{
        fontWeight: 'bold',
    },
    avatar: {
        backgroundColor: COLORS.lightPurple,
        height: 50,
        width: 50,
        borderRadius:25
    },
    
})

const mapDispatchToProps = dispatch => ({

        setListGame: (listGame) => dispatch(setListGame(listGame)),
        getRequest: ()=> dispatch(getRequest()),
        getRequestSuccess: ()=> dispatch(getRequestSuccess()),
        getRequestFail: ()=> dispatch(getRequestFail()),
        getRequestListGame: ()=> dispatch(getRequestListGame())
})

const mapStateToProps = state =>({
    listGame: state.gameReducer.listGame,
    isFetching: state.gameReducer.isFetching,
})

export default connect(mapStateToProps ,mapDispatchToProps)(HomeScreen)

