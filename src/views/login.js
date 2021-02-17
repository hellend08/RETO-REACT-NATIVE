import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, CheckBox, ScrollView, Image } from 'react-native';
// import { render } from 'react-dom';

// export default class prueba extends Component {
//   constructor(){
//     super()
//     this.state = {
//       email: '',
//       password: '',
//     }
//   }
//   changeEmail(email){
//     this.setState({email})
//   }
//   changePassword(password){
//     this.setState({password})
//   }
// }



export default function login({navigation}) {

  
  
  // render()
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Registro Médico</Text>
          <Text style={{color: '#52575C'}}>Ingresa con tus redes sociales</Text>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Image style={{marginHorizontal: 15, marginRight: 65,}} source={require('../../assets/icon/search.png')}></Image>
            <Text>Continúa con Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLinkedin}>
          <Image style={{marginHorizontal: 15, marginRight: 60,}} source={require('../../assets/icon/linkedin.png')}></Image>
            <Text style={styles.textButton}>Continúa con Linkedin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFacebook}>
          <Image style={{marginHorizontal: 15, marginRight: 64,}} source={require('../../assets/icon/facebook.png')}></Image>
            <Text style={styles.textButton}>Continúa con Facebook</Text>
          </TouchableOpacity>
          <Text style={{color: '#52575C', marginVertical: 20}}>Ingresa tus credenciales de acceso</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput 
              keyboardType={'email-address'}
              placeholder='Correo electrónico o número telefónico' 
              style={styles.input}/>
            <Image style={{position: 'absolute', left: 295, bottom: 25}} source={require('../../assets/icon/user.png')}></Image>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput 
              secureTextEntry={true} 
              placeholder='Contraseña' 
              style={styles.input}/>
            <TouchableOpacity style={{position: 'absolute', left: 285, paddingTop: 15}} >
              <Image source={require('../../assets/icon/eye.png')}></Image>
            </TouchableOpacity>
          </View>
          <View  style={styles.section}>
            <CheckBox style={styles.checkbox}/>
            <Text
              style={{fontSize:13, color: '#52575C', marginVertical: 10, marginHorizontal: 25}}>
              He leído y acepto los términos y condiciones y la politica de uso de datos
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonRegistry} onPress = {() => navigation.navigate('contact')}>
            <Text>REGISTRARME</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F8FB',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },
    title: {
      fontSize: 30,
      color: '#52575C',
      marginVertical: 10,
    },
    buttonGoogle: {
      fontFamily: 'Roboto',
      fontSize: 13,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      alignItems: "center",
      height: 36,
      width: 340,
      marginTop: 15,
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowRadius: 10,
      shadowOpacity: 0.4,
      elevation: 15,
    },
    buttonLinkedin: {
      fontFamily: 'Roboto',
      fontSize: 13,
      flexDirection: 'row',
      backgroundColor: '#3567CE',
      alignItems: "center",
      height: 36,
      width: 340,
      marginTop: 20,
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowRadius: 10,
      shadowOpacity: 0.4,
      elevation: 15,
    },
    buttonFacebook: {
      fontFamily: 'Roboto',
      fontSize: 13,
      flexDirection: 'row',
      backgroundColor: '#3B5998',
      alignItems: 'center',
      height: 36,
      width: 340,
      marginTop: 20,
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowRadius: 10,
      shadowOpacity: 0.4,
      elevation: 15,
    },
    textButton: {
      color: '#FFFFFF',
    },
    icon: {
      position: 'absolute',
      marginHorizontal: 30,
    },
    input: {
      fontSize: 13,
      fontFamily: 'Roboto',
      lineHeight: 16,
      borderRadius: 2,
      width: 330,
      height: 56,
      backgroundColor: '#FFFFFF',
      borderBottomColor: '#0A29CA',
      borderBottomWidth: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginBottom: 10,
      paddingHorizontal: 10,
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