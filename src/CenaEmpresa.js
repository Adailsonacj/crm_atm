import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, StatusBar } from 'react-native';

const detalheContato = require('./imgs/detalhe_empresa.png')
export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar
                    //hidden
                    backgroundColor='#EC7148'
                />
                <View style={styles.cabecalho}>
                    <Image source={detalheContato} />
                    <Text style={styles.txtTitulo}>Empresa</Text>
                </View>
                <View style={styles.detalheEmpresa}>
                    <Text style={styles.txtDetalheEmpresa}>A ATM Consultoria está no mercado a mais de 20 anos buscando atender sempre com exelência e dedicação!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txtTitulo: {
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25,
        fontSize: 24
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    detalheEmpresa: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheEmpresa: {
        fontSize: 18
    }
});
