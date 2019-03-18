import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <View style={styles.logo}>
                    <Image source={require('./imgs/logo.png')} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.itensMenu}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('CenaClientes')}>
                            <Image style={styles.imageMenu} source={require('./imgs/menu_cliente.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('CenaClientes')}>
                            <Image style={styles.imageMenu} source={require('./imgs/menu_contato.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.itensMenu}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('CenaClientes')}>
                            <Image style={styles.imageMenu} source={require('./imgs/menu_empresa.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('CenaClientes')}>
                            <Image style={styles.imageMenu} source={require('./imgs/menu_servico.png')} />
                        </TouchableHighlight>
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
        marginTop: 50
    },
    itensMenu: {
        flexDirection: 'row'
    },
    imageMenu: {
        margin: 15
    }
});