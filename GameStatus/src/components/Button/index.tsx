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
  bgColor?: string;
  txtColor?: string;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  text = "",
  txtColor = "#fff",
  bgColor = "#9855ee",
  loading = false,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { backgroundColor: bgColor }]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={txtColor} />
      ) : (
        <Text style={[styles.text, { color: txtColor }]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
