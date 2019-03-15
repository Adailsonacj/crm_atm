import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png')
const menuCliente = require('../imgs/menu_cliente.png')
const menuContato = require('../imgs/menu_contato.png')
const menuServico = require('../imgs/menu_servico.png')
const menuEmpresa = require('../imgs/menu_empresa.png')

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    //hidden
                    backgroundColor='#CCC'
                />

                <BarraNavegacao />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.itensMenu}>
                        <Image style={styles.imageMenu} source={menuCliente} />
                        <Image style={styles.imageMenu} source={menuContato} />
                    </View>
                    <View style={styles.itensMenu}>
                        <Image style={styles.imageMenu} source={menuServico} />
                        <Image style={styles.imageMenu} source={menuEmpresa} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center',
        marginTop:50
    },
    itensMenu: {
        flexDirection: 'row'
    },
    imageMenu: {
        margin: 15
    }
});