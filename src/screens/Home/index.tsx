import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = ["Ana", "Maria", "Vitoria", "Geovana"];

  function handleParticipantAdd() {
    console.log("Adicionando...");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Removendo Participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento</Text>

      <Text style={styles.eventDate}>Quinta, 29 de Junho de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#867070"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {
      participants.map((participants) => (
        <Participant 
          key={participants}
          name={participants} 
          onRemove={() => handleParticipantRemove} />
      ))
      }

      <Participant name="Ana" onRemove={() => handleParticipantRemove} />
    </View>
  );
}
