import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "./styles/home.styles";
import { StatusBar } from "expo-status-bar";
import SearchInput from "@/components/SearchInput";
import { HowLongToBeatService, HowLongToBeatEntry } from "howlongtobeat";
import { useEffect, useState } from "react";
import GameList from "@/components/GameList";

export default function Home() {
  let hltbService = new HowLongToBeatService();
  const [search, setSearch] = useState<string>("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames(search);
  }, []);

  const getGames = async (game: string) => {
    try {
      const response: any = await hltbService.search(game);
      setGames(response);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <SearchInput
        value={search}
        onChangeText={(val: string) => setSearch(val)}
        onHandleSearch={() => getGames(search)}
        placeholder="Buscar jogo..."
      />
      <ScrollView>
        <GameList data={games} />
      </ScrollView>
    </View>
  );
}
