import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';


export default function billing(){
    return (
        <ScrollView>
        <View style={styles.container}>
       <Image source={require('../../assets/icon/facturaccion.png')}></Image>
    <Text style={styles.title}>Facturación</Text>
    <Text>Tiempo de consulta</Text>
   
    <View style={styles.containerRow}>
        <TextInput style={styles.input} placeholder='Precio de consulta'/>
        <TextInput style={styles.input} placeholder='Precio de segundo control'/>    
    </View>
    
    <Text>DNI Lado A</Text>
    <TouchableOpacity style={styles.buttonDNIA} >
        <Text style={styles.textA}>Tomar foto</Text>
    </TouchableOpacity>
    <Text>DNI Lado B</Text>
    <TouchableOpacity style={styles.buttonDNIB}>
        <Text style={styles.textB}>Arrasta aquí la imagen o selecciona para buscar en tu ordenador</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonContinuar}>
        <Text style={styles.textButton}>Continuar</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F6F8FB',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 10,
    },
    containerRow:{
        flex:1,
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    title:{
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#202945',
        marginBottom: 50,
    },
    input: {
        borderRadius: 2,
        width: 154,
        height: 62,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 16,
        letterSpacing: 0.1,
        padding: 10,
    },
    buttonDNIA: {
        alignItems: "center",
        height: 40,
        width: 290,
        marginTop: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        paddingTop: 5,
      },
    textA: {
        color: '#63636A',
        backgroundColor: '#34EEAE',
        paddingHorizontal: 29,
        borderRadius: 8,
    },
    buttonDNIB: {
        alignItems: "center",
        height: 73,
        width: 290,
        marginTop: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        paddingTop: 10,
        paddingHorizontal: 10,
        // textDecorationColor: '#E8E8E8',
        
      },
    textB: {
        color: '#63636A',
        fontSize: 13,
        textAlign: 'center',
        letterSpacing: 0.1,
        lineHeight: 16,
    },
    buttonContinuar: {
        backgroundColor: '#FAC032',
        width: 170,
        height: 70,
        borderRadius: 98,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#202945',
    },
})