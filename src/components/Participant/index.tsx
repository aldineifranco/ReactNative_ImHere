import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { ParticipantProps } from '../../interface/ParticipantProps'


export function Participant({ name, onRemove }: ParticipantProps) {

  return (
    <View style={styles.container} id='id'>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>

  

  )
}