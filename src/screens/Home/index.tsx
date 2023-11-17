import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com este nome.");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Tem Certeza?", `Remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipants(prevState => prevState.filter((participant) => participant !== name))

      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 7 de novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#555'}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => (item)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            id={item}
            name={item}
            onRemove={() => {
              if (item) {
                handleParticipantRemove(item)
              }
            }}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda?
            Adicione participantes à sua lista de presença
          </Text>
        )}
      />
    </View>
  )
}