import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  text?: string;
  txtColor?: string;
}

const Link: React.FC<Props> = ({ text = "", txtColor = "#fff", ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container]} {...rest}>
      <Text style={[styles.text, { color: txtColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;
