import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo-pra-fazer.png')}/>
      <StatusBar style="auto" />
      <TextInput style={styles.formInput}
      placeholder='Email'
      keyboardType='email-address'
      autoCapitalize='nome'
      autoComplete='email'
      />
      <TextInput style={styles.formInput} placeholder='Senha'/> 
      <Pressable style={styles.formbutton}>
      <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <View>
        <Pressable>
          <Text style={styles.subTextButton}>Criar usuario</Text>
        </Pressable>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#FF6600',
      margin: 10,
  },
  formInput: {
    placeholderTextColor: '#666',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: '1em',
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formbutton: {
    backgroundColor: '#070A52',
    width: '80%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  SubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
 SubButton: {
    padding: 10,
  },
  subTextButton: {
    color: '#fff',
  },
});
