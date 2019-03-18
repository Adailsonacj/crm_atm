import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight, StatusBar } from 'react-native';

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    //hidden
                    backgroundColor='#000'
                />
                <View style={styles.logo}>
                    <Image source={require('./imgs/logo.png')} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.itensMenu}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.6}
                            onPress={() => this.props.navigation.navigate('CenaClientes')}>
                            <Image style={styles.imageMenu} source={require('./imgs/menu_cliente.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.6}
                            onPress={() => this.props.navigation.navigate('CenaContatos')}>
                            <Image style={styles.imageMenu} source={require('./imgs/menu_contato.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.itensMenu}>
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.6}
                            onPress={() => this.props.navigation.navigate('CenaEmpresa')}>
                            <Image style={styles.imageMenu} source={require('./imgs/menu_empresa.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#19D1C8'}
                            activeOpacity={0.6}
                            onPress={() => this.props.navigation.navigate('CenaServico')}>
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