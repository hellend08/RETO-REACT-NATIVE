import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, CheckBox} from 'react-native';

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
      <TextInput placeholder='Correo electrónico o número telefónico' style={styles.input}/>
      <TextInput placeholder='Contraseña'style={styles.input}/>
      <View  style={styles.section}>
      <CheckBox style={styles.checkbox}/>
      <Text
      style={{fontSize:13, color: '#52575C', marginVertical: 10, marginHorizontal: 25}}>
      He leído y acepto los términos y condiciones y la politica de uso de datos
      </Text>
      </View>
      <TouchableOpacity style={styles.buttonRegistry}>
        <Text>REGISTRARME</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
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
    borderBottomColor: '#0A29CA',
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  buttonRegistry: {
    backgroundColor: '#FFD368',
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 45,
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  checkbox: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  }
});
