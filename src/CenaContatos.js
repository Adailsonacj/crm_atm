import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, StatusBar } from 'react-native';

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar
                    //hidden
                    backgroundColor='#61BD8C'
                />
                <View style={styles.cabecalho}>
                    <Image source={require('./imgs/detalhe_contato.png')} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>
                <View style={styles.detalheContato}>
                    <Text style={styles.txtDetalheContato}>TEL: (63) 91231-1232</Text>
                    <Text style={styles.txtDetalheContato}>TEL: (63) 91231-1232</Text>
                    <Text style={styles.txtDetalheContato}>adailsonacj@live.com</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txtTitulo: {
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25,
        fontSize: 24
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    detalheContato: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheContato: {
        fontSize: 18
    }
});
