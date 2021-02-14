import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export default function formation({navigation}){
   return (
    <View style={styles.container}>
        <Image source={require('../../assets/icon/formacion.png')}></Image>
    <Text style={styles.title}>Formación</Text>
    <Text style={styles.subTitle}>Valida tu perfil profesional con Linkedin</Text>

    <View style={styles.containerRow}>
    <TextInput style={styles.input} placeholder='Pregrado'/>
    <TextInput style={styles.input} placeholder='CMP'/>
    </View>
    <Text>Añadir especializaciones</Text>
    <View style={styles.containerRow}>
    <TextInput style={styles.input} placeholder='Postgrado' />
    <TextInput style={styles.input} placeholder='Especialidad'/>
    </View>
    <Text>Experiencia laboral</Text>
    <View style={styles.containerRow}>
    <TextInput style={styles.input} placeholder='Empresa'/>
    <TextInput style={styles.input} placeholder='Puesto'/>
    </View>
    <Text>Añadir reconocimiento</Text>
    <TextInput style={styles.inputExtend} placeholder='Reconocimientos'/>
    <TouchableOpacity style={styles.buttonContinuar} onPress = {() => navigation.navigate('billing')}>
        <Text style={styles.textButton}>Continuar</Text>
    </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F6F8FB',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    containerRow:{
        flex:1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    title:{
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#202945',
        marginVertical: 10,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 10,
        fontFamily: 'Roboto',
        color: '#A0A4A8',
        marginVertical: 10,
    },
    input: {
        borderRadius: 2,
        width: 156,
        height: 49,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 5,
        marginVertical: 10,
       fontSize: 12,
    },
    inputExtend: {
        borderRadius: 2,
        width: 356,
        height: 56,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 5,
        marginVertical: 8,
        fontSize: 12,
    },
    buttonContinuar: {
        backgroundColor: '#FAC032',
        width: 170,
        height: 70,
        borderRadius: 98,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#202945',
    },
})