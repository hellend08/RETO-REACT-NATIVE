import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro Médico</Text>
      <Text style={{color: '#52575C'}}>Ingresa con tus redes sociales</Text>
      <TouchableOpacity style={styles.buttonGoogle}>
        <Text>Continúa con Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLinkedin}>
        <Text style={styles.textButton}>Continúa con Linkedin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFacebook}>
        <Text style={styles.textButton}>Continúa con Facebook</Text>
      </TouchableOpacity>
      <Text style={{color: '#52575C', marginVertical: 20}}>Ingresa tus credenciales de acceso</Text>
      <StatusBar style="auto" />
      <TextInput
      style={styles.input} />
      <TextInput
      style={styles.input}/>
      <TouchableOpacity style={styles.buttonRegistry}>
        <Text>REGISTRARME</Text>
      </TouchableOpacity>
    </View>
  );
}
// color='#'
// color=''
// color='#'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FB',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 45,
  },
  title: {
    fontSize: 30,
    color: '#52575C',
    marginVertical: 20,
  },
  buttonGoogle: {
    backgroundColor: '#FFFFFF',
    alignItems: "center",
    height: 36,
    width: 340,
    marginTop: 15,
    borderRadius: 20,
    paddingTop: 5,
    shadowColor: '#000000',
  },

  buttonLinkedin: {
    backgroundColor: '#3567CE',
    alignItems: "center",
    height: 36,
    width: 340,
    marginTop: 15,
    borderRadius: 20,
    paddingTop: 5,
  },
  buttonFacebook: {
    backgroundColor: '#3B5998',
    alignItems: "center",
    height: 36,
    width: 340,
    marginTop: 15,
    borderRadius: 20,
    paddingTop: 5,
  },
  textButton: {
    color: '#FFFFFF',
  },
  input: {
    borderRadius: 2,
    width: 310,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  buttonRegistry: {
    backgroundColor: '#FFD368',
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 45,
  },
});
