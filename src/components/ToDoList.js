import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Pressable, Modal } from "native-base";
import ToDoModal from "./ToDoModal";

export default class ToDoList extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }

  render() {
    const list = this.props.list;

    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;

    return (
      <View>
        <Modal
          isOpen={this.state.showListVisible}
          bg="white"
          onClose={() => this.setState({ showListVisible: false })}
          animationPreset="slide"
        >
          <ToDoModal
            list={list}
            closeModal={() => this.toggleListModal()}
            updateList={this.props.updateList}
          />
        </Modal>
        <Pressable
          style={styles.listContainer}
          bg={list.color}
          onPress={() => this.toggleListModal()}
        >
          <Text style={styles.listTitle}>{list.name}</Text>

          <View>
            <View style={{ alignItems: "center", height: 100 }}>
              <Text style={styles.count}>{completedCount}</Text>
              <Text style={styles.subtitle}>Remaining</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.count}>{remainingCount}</Text>
              <Text style={styles.subtitle}>Completed</Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 24,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    paddingVertical: 5,
    marginBottom: 18,
  },
  count: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
});
