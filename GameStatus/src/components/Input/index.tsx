import React, { useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface Props extends TextInputProps {}

const Input: React.FC<Props> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? "#9855ee" : "transparent", borderWidth: 2 },
      ]}
    >
      <TextInput
        placeholderTextColor="#c4c4cc"
        style={[styles.input]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardAppearance="dark"
        cursorColor="#9855ee"
        autoCorrect={false}
        {...rest}
      />
    </View>
  );
};

export default Input;
