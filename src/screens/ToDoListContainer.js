import React from "react";
import { Text, View, Pressable, FlatList, Modal } from "native-base";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ToDoList from "../components/ToDoList";
import AddListModal from "../components/AddListModal";
import Fire from "../../Fire";

export default class ToDoListContainer extends React.Component {
  state = {
    addToDoVisible: false,
    lists: [],
    user: {},
    loading: true,
  };

  componentDidMount() {
    firebase = new Fire((error, user) => {
      if (error) {
        return alert("Uh oh! Something went wrong");
      }

      firebase.getLists((lists) => {
        this.setState({ lists, user }, () => {
          this.setState({ loading: false });
        });
      });

      this.setState({ user });
    });
  }

  componentWillUnmount() {
    firebase.detach();
    return () => {
      firebase.detach();
    };
  }

  toggleAddToDoModal() {
    this.setState({ addToDoVisible: !this.state.addToDoVisible });
  }
  closeAddToDoModal() {
    this.setState({ addToDoVisible: false });
  }

  renderList = (list) => {
    return (
      <ToDoList
        list={list}
        updateList={this.updateList}
        deleteList={this.deleteList}
      />
    );
  };

  addList = (list) => {
    firebase.addList({
      name: list.name,
      color: list.color,
      todos: [],
    });
  };

  updateList = (list) => {
    firebase.updateList(list);
  };

  deleteList = (list) => {
    firebase.deleteList(list);
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    }
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
        {/* <View>
          <Text>User: {this.state.user.uid}</Text>
        </View> */}
        <View style={{ marginBottom: 32 }}>
          <Pressable
            style={styles.addList}
            onPress={() => this.toggleAddToDoModal()}
          >
            <Ionicons name="ios-add-sharp" size={32} color="#2ae0d7" />
          </Pressable>

          <Text style={styles.add}>Add List</Text>
        </View>

        <View style={{ height: 275, paddingLeft: 10 }}>
          {this.state.lists.length > 0 ? (
            <FlatList
              data={this.state.lists}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => this.renderList(item)}
              keyboardShouldPersistTaps="always"
            />
          ) : (
            <View>
              <Text textAlign="center">No To Do Lists.</Text>
              <Text textAlign="center">Click button above to add list.</Text>
            </View>
          )}
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
