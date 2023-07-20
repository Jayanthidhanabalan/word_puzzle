import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './styles';

const Button = (props) => {

    const {title, buttonStyle, onPress} = props;

    return(
        <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={onPress}>
        <Text style={styles.buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    )

}

export default Button;