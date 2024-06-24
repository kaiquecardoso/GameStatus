import React, { useState, forwardRef } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props extends TextInputProps {}

const SecurityInput = forwardRef<TextInput, Props>(({ ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecurity, setIsSecurity] = useState(true);

  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? "#9855ee" : "transparent", borderWidth: 2 },
      ]}
    >
      <TextInput
        ref={ref}
        placeholderTextColor="#c4c4cc"
        style={[styles.input]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardAppearance="dark"
        secureTextEntry={isSecurity}
        {...rest}
      />
      <TouchableOpacity
        onPress={() => setIsSecurity(!isSecurity)}
        hitSlop={{ left: 4, right: 4, top: 2, bottom: 2 }}
      >
        <Ionicons
          size={22}
          name={isSecurity ? "eye-off" : "eye"}
          color="#c4c4cc"
        />
      </TouchableOpacity>
    </View>
  );
});

export default SecurityInput;
