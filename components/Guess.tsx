import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

const Guess = (props: {
  onGuessAgain: (x: number, y: number) => void;
  lastGuess: number;
}) => {
  const [minMax, setMinMax] = useState({ min: 1, max: 100 });

  const onNewGuessHandler = (direction: string) => {
    if (direction === "lower") {
      setMinMax((prev) => {
        return { min: prev.min, max: props.lastGuess };
      });
    } else {
      setMinMax((prev) => {
        return { min: props.lastGuess, max: prev.max };
      });
    }
    props.onGuessAgain(minMax.min, minMax.max);
  };

  return (
    <View>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <Pressable onPress={() => onNewGuessHandler("lower")}>
        <Text>-</Text>
      </Pressable>
      <Pressable onPress={() => onNewGuessHandler("higher")}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default Guess;
