import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { COLORS } from '../../../themes/styles';

export default class ListProfile extends Component {
    render() {
        const {item} = this.props;
        return (
            <View style={styles.topInfoContent}>
            <Image source={{uri: item.icon}} style={styles.iconGame} />
            <View style={styles.topInfoTextContent}>
              <Text style={{color: 'white', fontWeight:'700'}}>{item.title}</Text>
              <Text style={{color: 'white'}}>100 Sales</Text>
            </View>
            <View >
              <Text style={{color: COLORS.lightPurple}}>$50</Text>
              </View>
              </View>
        )
    }
}
const styles = StyleSheet.create({
    topInfoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
      },
      
      topInfoTextContent: {
        width: '60%',
      },
      iconGame: {
        height: 80,
        width: 80,
        borderRadius: 8,
        shadowColor: COLORS.white,
        // shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

