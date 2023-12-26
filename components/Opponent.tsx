import React, { useState } from "react";
import { View, Text } from "react-native";
import Guess from "./Guess";

const Opponent = () => {
  const [opponentsGuess, setOpponentsGuess] = useState("");

  const newGuessHandler = (min: number, max: number) => {
    setOpponentsGuess(
      String(Math.floor(Math.random() * (max - min + 1) + min))
    );
  };

  return (
    <View>
      <View>
        <Text>Opponent's Guess</Text>
      </View>
      <View>{opponentsGuess}</View>
      <Guess
        onGuessAgain={newGuessHandler}
        lastGuess={Number(opponentsGuess)}
      />
    </View>
  );
};

export default Opponent;
