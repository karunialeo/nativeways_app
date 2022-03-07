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

export default function AddListModal({ buttonFunction, closeModal }) {
  const theme = useTheme();
  const backgroundColors = [
    theme.colors.red[400],
    theme.colors.purple[400],
    theme.colors.blue[400],
    theme.colors.yellow[400],
    theme.colors.green[400],
    theme.colors.orange[400],
    theme.colors.gray[400],
    theme.colors.pink[400],
  ];
  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors[0]);

  const [showModal, setShowModal] = useContext(AddListModalContext);

  const createToDo = () => {
    tempDB.push({
      name,
      color,
      todos: [],
    });

    setName("");
    setShowModal(false);
  };

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
            onChangeText={(text) => setName(text)}
          />
          <HStack justifyContent="space-between" marginBottom={5}>
            {backgroundColors.map((color, index) => (
              <Pressable
                key={index}
                onPress={() => setColor(color)}
                bg={color}
                width={7}
                height={7}
                borderWidth={1}
                borderColor="black"
                borderRadius={5}
              />
            ))}
          </HStack>
          <Pressable></Pressable>
          <Pressable
            onPress={createToDo}
            bg={color}
            paddingY={2}
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
