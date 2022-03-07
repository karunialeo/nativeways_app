import React, { useState } from "react";
import { Pressable, Input, Text, View, FlatList } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import {} from "react-native";

export default function ToDoModal(props) {
  const [list, setList] = useState({
    name: props.list.name,
    color: props.list.color,
    todos: props.list.todos,
  });

  const [todos, setTodos] = useState([list.todos]);

  const taskCount = list.todos.length;
  const completedCount = list.todos.filter((todo) => todo.completed).length;

  function handlePress(id) {
    const todo = props.list.todos.find((obj) => {
      return obj.id === id;
    });
    alert(todo);
  }

  return (
    <>
      <View width="full" height="full">
        <Text
          marginBottom={1}
          marginTop={4}
          marginX={4}
          fontSize={20}
          fontWeight="bold"
          color={list.color}
          numberOfLines={1}
        >
          {list.name}
        </Text>
        <Text marginBottom={4} marginX={4}>
          {completedCount} of {taskCount} completed
        </Text>
        <FlatList
          marginBottom={16}
          data={list.todos}
          renderItem={({ item }) => (
            <View
              key={item.id}
              marginBottom={3}
              borderWidth={1}
              borderRadius={5}
              paddingY={3}
              paddingX={3}
              marginX={4}
              borderColor={list.color}
              flexDir="row"
            >
              <Pressable
                width={5}
                height={5}
                bg={item.completed ? list.color : "white"}
                borderWidth={1}
                borderColor={list.color}
                borderRadius={2}
                justifyContent="center"
                alignItems="center"
                onPress={handlePress(item.id)}
              >
                <Ionicons name="checkmark-sharp" size={16} color="white" />
              </Pressable>
              <Text fontSize={12} width="70%" marginLeft={3}>
                {item.title}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View
          position="absolute"
          bottom={0}
          paddingX={4}
          paddingY={2}
          bg="white"
          opacity={60}
          width="100%"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Input width="80%" />
          <Pressable
            width={8}
            height={8}
            borderColor={list.color}
            borderWidth={1}
            borderRadius={3}
            justifyContent="center"
            alignItems="center"
          >
            <Ionicons name="md-add-sharp" size={24} color="gray" />
          </Pressable>
        </View>
      </View>
    </>
  );
}
