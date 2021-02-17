import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class formation extends Component{
    render() {
   return (
    <ScrollView>
        <View style={styles.container}>
            <Image source={require('../../assets/icon/formacion.png')}></Image>
            <Text style={styles.title}>Formación</Text>
            <TouchableOpacity>
                <Image source={require('../../assets/icon/b-linkedin.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.subTitle}>Valida tu perfil profesional con Linkedin</Text>
            <View style={styles.containerRow}>
                <TextInput multiline={true} style={styles.input} placeholder='Pregrado'/>
                <TextInput multiline={true} style={styles.input} placeholder='CMP'/>
            </View>
            <Text style={styles.textH2}>Añadir especializaciones</Text>
            <View style={styles.containerRow}>
                <TextInput multiline={true} style={styles.input} placeholder='Postgrado' />
                <TextInput multiline={true} style={styles.input} placeholder='Especialidad'/>
            </View>
            <Text style={styles.textH2}>Experiencia laboral</Text>
            <View style={styles.containerRow}>
                <TextInput multiline={true} style={styles.input} placeholder='Empresa'/>
                <TextInput multiline={true} style={styles.input} placeholder='Puesto'/>
                <TouchableOpacity>
                    <Image style={styles.vector} source={require('../../assets/icon/vector.png')}></Image>
                </TouchableOpacity>
                <TextInput multiline={true} style={styles.input, {display: 'none'}} placeholder='Puesto'/>
            </View>
            <Text style={styles.textH2}>Añadir reconocimiento</Text>
            <View style={styles.containerRow}>
                <TextInput multiline={true} style={styles.inputExtend} placeholder='Reconocimientos'/>
                <TouchableOpacity>
                    <Image style={styles.vector} source={require('../../assets/icon/vector.png')}></Image>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContinuar} onPress = {() => this.props.navigation.navigate('billing')}>
                <Text style={styles.textButton}>Continuar</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
}
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F6F8FB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerRow:{
        flex:1,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
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
    textH2:{
        fontSize: 14,
        color: '#52575C',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        lineHeight: 20,
        letterSpacing: 0.1,
        marginRight: 'auto',
        marginHorizontal: 20,
    },
    vector:{
        marginTop: 25,
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
        paddingHorizontal: 10,
    },
    inputExtend: {
        borderRadius: 2,
        width: 280,
        height: 56,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 10,
        marginVertical: 8,
        marginRight: 35,
        fontSize: 12,
        paddingHorizontal: 10,

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