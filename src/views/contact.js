import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';


export default class contact extends Component {
    render() {
   return (
    <ScrollView>
        <View style={styles.container}>
            <Image source={require('../../assets/icon/contact.png')}></Image>
            <Text style={styles.title}>Contacto</Text>
            <View style={styles.containerRow}>
                <TextInput style={styles.input} placeholder='Tipo de documento'/>
                <TouchableOpacity style={{position: 'absolute', left: 145, top: 30 }} >
                    <Image source={require('../../assets/icon/polygon.png')}></Image>
                </TouchableOpacity>
                <TextInput maxLength={8} keyboardType={'numeric'} style={styles.input} placeholder='N° Documento'/>    
            </View>
            <View style={styles.containerRow}>
                <TextInput maxLength={10} keyboardType={'numeric'} style={styles.input} placeholder='Fecha de nacimiento' />
                <TouchableOpacity style={{position: 'absolute', left: 145, top: 22 }} >
                <Image source={require('../../assets/icon/calendary.png')}></Image>
                </TouchableOpacity>
                <TextInput maxLength={11} keyboardType={'numeric'} style={styles.input} placeholder='N° RUC'/>
            </View>
            <View style={{flexDirection: 'row'}}>
            <TextInput keyboardType={'email-address'} style={styles.inputExtend} placeholder='Correo electrónico'/>
                <Image style={{position: 'absolute', left: 300, top: 30 }} source={require('../../assets/icon/email.png')}></Image>
                </View>
            <View style={styles.containerRow}>
                <Text>Género</Text>
                <TouchableOpacity style={styles.select}>
                    <Image source={require('../../assets/icon/deselected.png')}></Image>    
                </TouchableOpacity>
                <Text>Femenino</Text>
                <TouchableOpacity style={styles.select}>
                    <Image source={require('../../assets/icon/deselected.png')}></Image>
                </TouchableOpacity>
                <Text>Masculino</Text>
            </View>
            <TouchableOpacity style={styles.buttonContinuar} onPress = {() => this.props.navigation.navigate('formation')}>
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
        paddingVertical: 10,
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
        width: 160,
        height: 56,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        fontSize: 12,
        paddingHorizontal: 10,

    },
    inputExtend: {
        borderRadius: 2,
        width: 330,
        height: 56,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 5,
        marginVertical: 8,
        fontSize: 12,
        paddingHorizontal: 10,

    },
    select:{
        flexDirection: 'row',
        marginLeft: 15,
    },
    buttonContinuar: {
        backgroundColor: '#FAC032',
        width: 170,
        height: 70,
        borderRadius: 98,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#202945',
    },
})