import React, { useContext, useState } from "react";
import {
  Center,
  KeyboardAvoidingView,
  Text,
  FormControl,
  Input,
  Pressable,
  useTheme,
  HStack,
} from "native-base";
import { tempDB } from "../../tempData/tempDB";
import { AddListModalContext } from "../contexts/ModalContext";

export default class AddListModal extends React.Component {
  backgroundColors = [
    "red.400",
    "purple.400",
    "blue.400",
    "yellow.400",
    "green.400",
    "orange.400",
    "gray.400",
    "pink.400",
  ];

  state = {
    name: "",
    color: this.backgroundColors[0],
  };

  createToDo = () => {
    const { name, color } = this.state;

    const list = { name, color };

    this.props.addList(list);

    this.setState({ name: "" });
    this.props.closeModal();
  };

  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <Pressable
          onPress={() => this.setState({ color })}
          key={color}
          bg={color}
          width={7}
          height={7}
          borderWidth={1}
          borderColor="black"
          borderRadius={5}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView width="full" paddingX={4}>
        <Center>
          <Text fontSize={20} marginBottom={5}>
            Create To Do List
          </Text>
          <FormControl isRequired>
            <Input
              placeholder="List Name..."
              fontSize={14}
              color="black"
              padding={3}
              marginBottom={5}
              onChangeText={(text) => this.setState({ name: text })}
            />
            <HStack justifyContent="space-between" marginBottom={5}>
              {this.renderColors()}
            </HStack>
            <Pressable></Pressable>
            <Pressable
              paddingY={2}
              bg={this.state.color}
              onPress={this.createToDo}
              borderRadius={5}
            >
              <Text textAlign="center" color="white">
                Create!
              </Text>
            </Pressable>
          </FormControl>
        </Center>
      </KeyboardAvoidingView>
    );
  }
}
