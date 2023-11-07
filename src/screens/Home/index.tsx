import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function Home() {
  function handleParticipantAdd() {
    return console.log('Adicionou participante')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 7 de novembro de 2023</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor={'#555'}
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>

    </View>
  )
}