import React, { useState } from "react";
import { Pressable, TextInput, Text, View, StyleSheet } from "react-native";

const UserInput = (props: {
  onSubmit: (arg: string) => void;
  onFirstGuess: (x: number, y: number) => void;
}) => {
  const [userInput, setUserInput] = useState<string>("");
  const [invalidInput, setInvalidInput] = useState(false);

  const onConfirmHandler = () => {
    if (Number(userInput) > 1 && Number(userInput) < 100) {
      props.onSubmit(userInput);
      props.onFirstGuess(1, 100);
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };

  const onChangeHandler = (inputText) => {
    setUserInput(inputText);
    if (Number(inputText) > 1 && Number(inputText) < 100) {
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };

  return (
    <View>
      <TextInput
        inputMode="numeric"
        maxLength={3}
        onChangeText={onChangeHandler}
        value={userInput}
        placeholder="between 1-100"
        style={invalidInput ? styles.invalid : styles.correct}
      />
      <View>
        <Pressable>
          <Text>Reset</Text>
        </Pressable>
        <Pressable onPress={onConfirmHandler}>
          <Text>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  invalid: {
    borderWidth: 2,
    borderColor: "red",
  },
  correct: {
    borderColor: "black",
  },
});

export default UserInput;
