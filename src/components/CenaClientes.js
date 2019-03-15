import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png')
const detalheCliente = require('../imgs/detalhe_cliente.png')
const cliente1 = require('../imgs/cliente1.png')
const cliente2 = require('../imgs/cliente2.png')

export default class CenaClientes extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    //hidden
                    backgroundColor='#CCC'
                />

                <BarraNavegacao />

                <View style={styles.cabecalho}>
                    <Image source={detalheCliente} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>
                <View style={styles.detalheCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
                </View>
                <View style={styles.detalheCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txtTitulo: {
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25,
        fontSize: 24
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});
