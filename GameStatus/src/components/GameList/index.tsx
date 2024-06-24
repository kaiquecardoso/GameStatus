import React from "react";
import { Image, View, Dimensions } from "react-native";
import { styles } from "./styles";

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
  return (
    <View style={styles.container}>
      {data.map((game: DataProps) => (
        <Image
          key={game?.id}
          style={[
            styles.image,
            { width: width / 2 - 24, height: width / 2 - 24 * -1.9 },
          ]}
          source={{ uri: game?.imageUrl }}
        />
      ))}
    </View>
  );
};

export default GameList;
