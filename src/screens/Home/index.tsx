import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'


export default function Home() {

  const participants = [
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
    return console.log('Adicionou participante')
  }

  function handleParticipantRemove(name: string) {
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
            onRemove={() => handleParticipantRemove('Aldinei')}
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