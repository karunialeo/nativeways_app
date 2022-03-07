import React, { useContext, useState } from "react";
import { Text, View, Pressable, FlatList, Modal } from "native-base";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { tempDB } from "../../tempData/tempDB";
import ToDoList from "../components/ToDoList";
import AddListModal from "../components/AddListModal";

export default class ToDoListContainer extends React.Component {
  state = {
    addToDoVisible: false,
    lists: tempDB,
  };

  toggleAddToDoModal() {
    this.setState({ addToDoVisible: !this.state.addToDoVisible });
  }
  closeAddToDoModal() {
    this.setState({ addToDoVisible: false });
  }

  renderList = (list) => {
    return <ToDoList list={list} updateList={this.updateList} />;
  };

  addList = (list) => {
    this.setState({
      lists: [
        ...this.state.lists,
        { ...list, id: this.state.lists.length + 1, todos: [] },
      ],
    });
  };

  updateList = (list) => {
    this.setState({
      lists: this.state.lists.map((item) => {
        return item.id === list.id ? list : item;
      }),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          isOpen={this.state.addToDoVisible}
          bg="white"
          onClose={() => this.closeAddToDoModal()}
          animationPreset="slide"
        >
          <AddListModal
            closeModal={() => this.closeAddToDoModal()}
            addList={this.addList}
          />
        </Modal>
        <View style={{ marginBottom: 32 }}>
          <Pressable
            style={styles.addList}
            onPress={() => this.toggleAddToDoModal()}
          >
            <Ionicons name="ios-add-sharp" size={32} color="#2ae0d7" />
          </Pressable>

          <Text style={styles.add}>Add List</Text>
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: "#2ae0d7",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  addList: {
    borderWidth: 2,
    borderColor: "#2ae0d7",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: "#2ae0d7",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
  },
});
