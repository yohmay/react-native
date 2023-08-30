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
  const [participants, setParticipants] = useState(["Ana"]);

  function handleParticipantAdd() {
    if (participants.includes('')) {
      return Alert.alert(
        "Participante existente",
        "Não é possível adicionar um participante com o mesmo nome!"
      );
    }
    setParticipants((prevState) => [...prevState, "Maria"]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Tem certeza que deseja remover ${name}`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Removido!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento</Text>
      <Text style={styles.eventDate}>Domingo, 31 de Dezembro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#867070"
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
            Ainda faltam pessoas para o evento? Adicione inserindo no campo
            acima.
          </Text>
        )}
      />
    </View>
  );
}
