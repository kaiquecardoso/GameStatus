import React from "react";
import { Image, View, Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

interface DataProps {
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

interface Props {
  data: DataProps[];
}

const GameList: React.FC<Props> = ({ data }) => {
  const { width } = Dimensions.get("screen");
  const handlePress = (game: DataProps) => {
    router.navigate(`detail?game=${encodeURIComponent(JSON.stringify(game))}`);
  };
  return (
    <View style={styles.container}>
      {data.map((game: DataProps) => (
        <TouchableOpacity key={game?.id} onPress={() => handlePress(game)}>
          <Image
            style={[
              styles.image,
              { width: width / 2 - 24, height: width / 2 - 24 * -1.9 },
            ]}
            source={{ uri: game?.imageUrl }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GameList;
