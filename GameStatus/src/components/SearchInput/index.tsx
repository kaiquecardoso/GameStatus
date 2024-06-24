import React, { useState } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from "./styles";

interface Props extends TextInputProps {
  onHandleSearch: () => void;
}

const SearchInput: React.FC<Props> = ({ onHandleSearch, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            borderColor: isFocused ? "#9855ee" : "transparent",
            borderWidth: 2,
          },
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
      <TouchableOpacity onPress={() => onHandleSearch()} style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
