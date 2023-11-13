import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { ParticipantProps } from '../../interface/ParticipantProps'


export default function Home() {

  const participants: ParticipantProps[] = [
    {
      id: 1,
      name: 'Aldinei'
    },
    {
      id: 2,
      name: 'Michele'
    },
    {
      id: 3,
      name: 'Davi'
    },
    {
      id: 4,
      name: 'Nathan'
    },
    {
      id: 5,
      name: 'José'
    },
    {
      id: 6,
      name: 'Matheus'
    },
    {
      id: 7,
      name: 'João'
    },
    {
      id: 8,
      name: 'Jo'
    },
    {
      id: 9,
      name: 'Ester'
    },
    {
      id: 10,
      name: 'José'
    },

  ]


  function handleParticipantAdd() {
    if (participants.some(participant => participant.name === participant.name)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com este nome.")
    }

    return console.log('Adicionou participante')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Tem Certeza?", `Remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado", `Participante ${name} Deletado`)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

    console.log(`Você clicou no participante ${name}`)
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            id={item.id}
            name={item.name}
            onRemove={() => {
              if (item.name) {
                handleParticipantRemove(item.name)
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