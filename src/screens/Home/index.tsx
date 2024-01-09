import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { AddParticipants } from "../../components/AddParticipants";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState([]);

  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    if (newParticipant.trim() === "") {
      return Alert.alert("Empty Participant", "Participant name cannot be empty!");
    }

    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Existing Participant",
        "Cannot add a participant with the same name!"
      );
    }

    setParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
    setNewParticipant("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remove",
      `Are you sure you want to remove ${name}`,
      [
        {
          text: "Yes",
          onPress: () => {
            setParticipants((prevParticipants) =>
              prevParticipants.filter((participant) => participant !== name)
            );
            Alert.alert("Removed!");
          },
        },
        {
          text: "No",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Creating Event</Text>
      <Text style={styles.eventDate}>Sunday, December 31, 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor="#867070"
          value={newParticipant}
          onChangeText={(text) => setNewParticipant(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <AddParticipants
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Are there still people missing for the event? Add them by entering
            their names in the field above.
          </Text>
        )}
      />
    </View>
  );
}
