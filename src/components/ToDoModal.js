import React, { useState } from "react";
import { StyleSheet, Keyboard, Animated } from "react-native";
import {
  Pressable,
  Input,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default class ToDoModal extends React.Component {
  state = {
    newToDo: "",
  };

  toggleToDoCompleted = (index) => {
    let list = this.props.list;
    list.todos[index].completed = !list.todos[index].completed;

    this.props.updateList(list);
  };

  addToDo = () => {
    let list = this.props.list;

    if (!list.todos.some((todo) => todo.title === this.state.newToDo)) {
      list.todos.push({ title: this.state.newToDo, completed: false });

      this.props.updateList(list);
    } else {
      alert("Cannot create To Do with exact name");
    }

    this.setState({ newToDo: "" });

    Keyboard.dismiss();
  };

  deleteToDo = (index) => {
    let list = this.props.list;

    list.todos.splice(index, 1);

    this.props.updateList(list);
  };

  renderToDo = (todo, index) => {
    return (
      <View flexDir="row" alignItems="center" justifyContent="space-between">
        <View paddingY={2} flexDir="row" alignItems="center">
          <Pressable
            marginRight={3}
            onPress={() => this.toggleToDoCompleted(index)}
          >
            <Ionicons
              name={todo.completed ? "ios-square-sharp" : "ios-square-outline"}
              size={24}
              color="gray"
            />
          </Pressable>
          <Text
            style={[
              styles.todo,
              { textDecorationLine: todo.completed ? "line-through" : "none" },
            ]}
            color={todo.completed ? "gray.400" : "black"}
          >
            {todo.title}
          </Text>
        </View>
        <Pressable onPress={() => this.deleteToDo(index)}>
          <Ionicons name="trash" size={24} color="red" />
        </Pressable>
      </View>
    );
  };

  render() {
    const list = this.props.list;

    const taskCount = list.todos.length;
    const completedTask = list.todos.filter((todo) => todo.completed).length;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={[styles.section, styles.header]}
            borderBottomColor={list.color}
          >
            <View>
              <Text style={styles.title} fontWeight={700}>
                {list.name}
              </Text>
              <Text
                style={styles.taskCount}
                marginY={4}
                color="gray.400"
                fontWeight={600}
              >
                {completedTask} of {taskCount} Task Complete
              </Text>
            </View>
          </View>

          <View style={[styles.section, { flex: 3 }]}>
            <FlatList
              data={list.todos}
              renderItem={({ item, index }) => this.renderToDo(item, index)}
              keyExtractor={(item) => item.title}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 30,
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.footer}>
            <Input
              style={styles.input}
              color="black"
              borderColor={list.color}
              width="85%"
              onChangeText={(text) => this.setState({ newToDo: text })}
              value={this.state.newToDo}
            />
            <Pressable
              style={styles.addTodo}
              backgroundColor={list.color}
              onPress={() => this.addToDo()}
            >
              <Ionicons name="ios-add-sharp" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 20,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 20,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 32,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addTodo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  todo: {
    fontSize: 13,
  },
});
