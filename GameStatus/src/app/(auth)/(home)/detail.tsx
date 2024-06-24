import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles/profile.styles";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { game } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View />
    </View>
  );
}
