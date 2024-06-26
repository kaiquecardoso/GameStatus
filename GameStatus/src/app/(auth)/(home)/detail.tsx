import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./styles/detail.styles";
import { useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import Chart from "@/components/Chart";

interface GameProps {
  id: string;
  name: string;
  description: string;
  platforms: string[];
  imageUrl: string;
  timeLabels: string[][];
  gameplayMain: number;
  gameplayMainExtra: number;
  gameplayCompletionist: number;
  similarity: number;
  searchTerm: string;
  playableOn: string[];
}

interface ParamsProps {
  game?: string; // We expect a JSON string
}

export default function Detail() {
  const { game: gameString } = useLocalSearchParams<any>();
  const game: GameProps = gameString ? JSON.parse(gameString) : undefined;

  if (!game) {
    return (
      <View style={styles.container}>
        <Text>No game data found.</Text>
      </View>
    );
  }

  const encodedImageUrl = encodeURI(game.imageUrl);

  return (
    <View style={styles.container}>
      <View style={{ width: 300, height: 250 }}>
        <Image
          source={{ uri: encodedImageUrl }}
          style={{ width: 500, height: 250, backgroundColor: "red" }}
        />
        <BlurView
          intensity={90}
          style={{ width: 500, height: 400, marginTop: -400 }}
        />
      </View>
      <View style={styles.cover}>
        <Image
          source={{ uri: encodedImageUrl }}
          style={{
            width: 180,
            height: 250,
            borderRadius: 16,
          }}
        />
      </View>
      <Chart game={game} />
    </View>
  );
}
