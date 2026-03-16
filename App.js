import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import React from 'react';

const App = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}>Dados do Aluno</Text>

                <View style={styles.section}>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Nome</Text>
                            <Text style={styles.exigencia}>*digite seu nome completo</Text>
                        </View>
                        <TextInput
                            style={styles.formulario}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#FFFFFF"></TextInput>
                    </View>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Email</Text>
                        </View>
                        <TextInput
                            style={styles.formulario}
                            placeholder="Digite seu email (exemplo: aluno@gmail.com)..."
                            keyboardType="email-address"
                            placeholderTextColor="#FFFFFF"></TextInput>
                    </View>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Número de matrícula</Text>
                            <Text style={styles.exigencia}>*apenas números</Text>
                        </View>
                        <TextInput
                            style={styles.formulario}
                            placeholder="Digite sua matrícula..."
                            keyboardType="num"
                            placeholderTextColor="#FFFFFF"></TextInput>
                    </View>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Senha de acesso</Text>
                        </View>
                        <TextInput
                            style={styles.formulario}
                            placeholder="Digite sua senha..."
                            keyboardType="visible-password"
                            placeholderTextColor="#FFFFFF"></TextInput>
                    </View>
                </View>
                <View style={styles.botaoSection}>
                    <TouchableOpacity>
                        <View style={styles.botao}>
                            <Text style={styles.textoBotao}>Gerar crachá</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.crachaEBotao}>
                    <View style={styles.sectionCracha}>
                        <Text style={styles.subtitulo}>Crachá Digital</Text>
                        <View style={styles.conteinerCracha}>
                            <View style={styles.info}>
                                <View style={styles.textosInfo}>
                                    <Text style={styles.tituloInfo}>Nome:</Text>
                                    <Text style={styles.textInfo}>João Marcos da Silva</Text>
                                </View>
                                <View style={styles.textosInfo}>
                                    <Text style={styles.tituloInfo}>Email:</Text>
                                    <Text style={styles.textInfo}>joao.ms@aluno.senai,edu.br</Text>
                                </View>
                                <View style={styles.textosInfo}>
                                    <Text style={styles.tituloInfo}>Matrícula:</Text>
                                    <Text style={styles.textInfo}>123456789</Text>
                                </View>
                            </View>
                            <Image
                                source={require('./assets/qrcode.png')}
                                style={{ width: 65, height: 65, alignSelf: 'center' }}></Image>
                        </View>
                    </View>
                    <View style={styles.botaoDiv}>
                        <TouchableOpacity>
                            <View style={styles.botao}>
                                <Text style={styles.textoBotao}>Baixar crachá</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image></Image>
            </View>
        </ScrollView>
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        color: '#000000',
        fontFamily: 'Gloock-Regular',
        fontSize: 43,
        margin: 50,
    },
    section: {
        width: 380,
        height: 'auto',
        borderWidth: 1.9,
        borderColor: '#597E8B',
        borderRadius: 10,
        padding: 15,
        gap: 10,
    },
    div: {
        width: 'auto',
        height: 'auto',
    },
    campo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    cracha: {
        color: '#414141',
        fontSize: 18,
    },
    exigencia: {
        color: '#6F9F9E',
        fontSize: 10,
    },
    formulario: {
        backgroundColor: '#6F9F9E',
        width: 'auto',
        height: 35,
        borderRadius: 10,
        padding: 6,
    },
    botaoSection: {
        alignItems: 'center',
        marginTop: 30
    },
    botao: {
        width: 120,
        height: 30,
        backgroundColor: '#E3D9A6',
        borderRadius: 10,
        justifyContent: 'center',
    },
    textoBotao: {
        color: '#414141',
        alignSelf: 'center',
        fontSize: 14,
    },
    crachaEBotao: {
        margin: 30,
    },
    sectionCracha: {
        width: 300,
        height: 'auto',
        backgroundColor: '#6F9F9E',
        borderRadius: 10,
        padding: 15,
        gap: 10,
    },
    conteinerCracha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        height: 'auto',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    subtitulo: {
        color: '#ffffff',
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'Gloock-Regular',
    },
    textosInfo: {
        color: '#ffffff',
    },
    info: {
        gap: 10,
        color: '#FFFFFF',
    },
    botaoDiv: {
        alignSelf: 'flex-start',
        marginTop: 30
    },
});
