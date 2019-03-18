import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, StatusBar } from 'react-native';

const detalheServico = require('./imgs/detalhe_servico.png')
export default class CenaServicos extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar
                    //hidden
                    backgroundColor='#19D1C8'
                />
                <View style={styles.cabecalho}>
                    <Image source={detalheServico} />
                    <Text style={styles.txtTitulo}>Serviços</Text>
                </View>
                <View style={styles.detalheServico}>
                    <Text style={styles.txtDetalheServico}>. Consultoria</Text>
                    <Text style={styles.txtDetalheServico}>. Processos</Text>
                    <Text style={styles.txtDetalheServico}>. Acompanhamento de Projetos</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txtTitulo: {
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 25,
        fontSize: 24
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    detalheServico: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheServico: {
        fontSize: 18
    }
});
