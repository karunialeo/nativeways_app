import React, { useContext, useState } from "react";
import {
  Text,
  ScrollView,
  Pressable,
  useTheme,
  Center,
  Modal,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { tempDB } from "../../tempData/tempDB";
import AddListModal from "../components/AddListModal";
import ToDoModal from "../components/ToDoModal";

import {
  AddListModalContext,
  ShowListModalContext,
} from "../contexts/ModalContext";

export default function ToDoList() {
  const theme = useTheme();
  const [showModal, setShowModal] = useContext(AddListModalContext);
  const [showListModal, setShowListModal] = useContext(ShowListModalContext);
  const [list, setList] = useState({});

  const toggleShowListModal = () => {
    setShowListModal(!showListModal);
  };

  const handlePress = (id) => {
    toggleShowListModal();
    setList(
      tempDB.find((obj) => {
        return obj.id === id;
      })
    );
  };

  return (
    <>
      <Center backgroundColor="white" height="100%">
        <ScrollView
          maxHeight={72}
          marginX={2}
          marginBottom={12}
          horizontal={true}
        >
          {tempDB.map((temp) => (
            <Pressable
              onPress={() => handlePress(temp.id)}
              height={72}
              borderRadius={10}
              marginRight={5}
              bg={temp.color}
              width={48}
              padding={5}
              key={temp.id}
            >
              <Text
                color="white"
                textAlign="center"
                fontSize="md"
                fontWeight="bold"
                paddingBottom={4}
                numberOfLines={1}
              >
                {temp.name}
              </Text>
              <Text color="white" textAlign="center" paddingBottom={3}>
                Remaining
              </Text>
              <Text
                color="white"
                textAlign="center"
                fontSize="3xl"
                paddingBottom={3}
              >
                {temp.todos.length -
                  temp.todos.filter((todo) => todo.completed).length}
              </Text>
              <Text color="white" textAlign="center" paddingBottom={3}>
                Completed
              </Text>
              <Text
                color="white"
                textAlign="center"
                fontSize="3xl"
                paddingBottom={3}
              >
                {temp.todos.filter((todo) => todo.completed).length}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <Pressable
          onPress={() => setShowModal(true)}
          flexDir="row"
          alignItems="center"
          borderWidth={1}
          borderRadius={5}
          _pressed={{ backgroundColor: theme.colors.gray[50] }}
          paddingX={4}
          paddingY={2}
          borderColor="primary.200"
        >
          <Ionicons
            name="md-add-sharp"
            size={24}
            color={theme.colors.primary[300]}
          />
          <Text marginLeft={2}>Add New List</Text>
        </Pressable>
      </Center>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        animationPreset="slide"
        bg="white"
        opacity={90}
      >
        <AddListModal />
      </Modal>
      <Modal
        isOpen={showListModal}
        onClose={() => setShowListModal(false)}
        animationPreset="slide"
        bg="white"
      >
        <ToDoModal list={list} />
      </Modal>
    </>
  );
}
