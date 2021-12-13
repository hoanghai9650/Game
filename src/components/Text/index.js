import React, { Component } from 'react'
import { Text as RNText, View, StyleSheet } from 'react-native'
import { COLORS } from '../../themes/styles';

export default class Text extends Component {
    render() {
        const {color = COLORS.white, children, style} = this.props;
        return (
            <RNText style={[style, {color}]}>{children}</RNText>
        )
    }
}



