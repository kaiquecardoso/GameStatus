import { Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121214",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen name="home" options={{ title: "Início" }} />
      <Stack.Screen name="detail" options={{ title: "Detalhe" }} />
    </Stack>
  );
}
