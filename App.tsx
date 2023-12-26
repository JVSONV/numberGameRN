import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Opponent from "./components/Opponent";
import Guess from "./components/Guess";

export default function App() {
  const [myNumber, setMyNumber] = useState<string>("");

  const onSubmitHandler = (eNum: string) => {
    setMyNumber(eNum);
  };

  const [opponentsGuess, setOpponentsGuess] = useState("");

  const newGuessHandler = (min: number, max: number) => {
    setOpponentsGuess(
      String(Math.floor(Math.random() * (max - min + 1) + min))
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {myNumber.length < 1 && (
        <>
          <View>
            <Text>Guess My Number</Text>
          </View>
          <View>
            <Text>Enter a Number</Text>
            <UserInput
              onSubmit={onSubmitHandler}
              onFirstGuess={newGuessHandler}
            />
          </View>
        </>
      )}
      {myNumber.length >= 1 && (
        <View>
          <View>
            <Text>Opponent's Guess</Text>
          </View>
          <View>
            <Text>{opponentsGuess}</Text>
          </View>
          <Guess onGuessAgain={newGuessHandler} lastGuess={Number(opponentsGuess)}/>
          {opponentsGuess === myNumber && <View><Text>GAME OVER!</Text></View>}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
