import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'


export default function Home() {
  const participants = ['Aldinei', 'Michele', 'Davi']

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

      <View>
        <Participant name='Aldinei' onRemove={() => handleParticipantRemove('Aldinei')} />
        <Participant name='Nathan' />
      </View>
    </View>
  )
}