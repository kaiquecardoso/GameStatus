import React, { useEffect, useRef } from "react";
import { View, Dimensions, Animated, Text } from "react-native";
import { styles } from "./styles";

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

interface Props {
  game: GameProps;
}

const Chart: React.FC<Props> = ({ game }) => {
  const { width } = Dimensions.get("window");

  const completionistWidth = useRef(new Animated.Value(0)).current;
  const mainExtraWidth = useRef(new Animated.Value(0)).current;
  const mainWidth = useRef(new Animated.Value(0)).current;

  const calculateWidth = (type: "completionist" | "mainExtra" | "main") => {
    let completionistValue = width - 32;
    let mainExtraValue =
      (width - 32) * (game?.gameplayMainExtra / game?.gameplayCompletionist);
    let mainValue =
      (width - 32) * (game?.gameplayMain / game?.gameplayCompletionist);
    switch (type) {
      case "completionist":
        return completionistValue;
      case "mainExtra":
        return mainExtraValue;
      case "main":
        return mainValue;
    }
  };

  const generateBackgroundColor = (
    type: "completionist" | "mainExtra" | "main"
  ) => {
    switch (type) {
      case "completionist":
        return "#fc4103";
      case "mainExtra":
        return "#fcf803";
      case "main":
        return "#03fc88";
    }
  };

  useEffect(() => {
    Animated.timing(completionistWidth, {
      toValue: calculateWidth("completionist"),
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(mainExtraWidth, {
      toValue: calculateWidth("mainExtra"),
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(mainWidth, {
      toValue: calculateWidth("main"),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Completicionista</Text>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.slider,
            {
              width: completionistWidth,
              backgroundColor: generateBackgroundColor("completionist"),
            },
          ]}
        />
      </View>
      <Text style={styles.text}>História principal + extras</Text>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.slider,
            {
              width: mainExtraWidth,
              backgroundColor: generateBackgroundColor("mainExtra"),
            },
          ]}
        />
      </View>
      <Text style={styles.text}>História principal</Text>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.slider,
            {
              width: mainWidth,
              backgroundColor: generateBackgroundColor("main"),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Chart;
