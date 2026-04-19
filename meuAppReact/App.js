import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { useState } from 'react';

const App = () => {
    const [isFocused, setIsFocused] = useState(null);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 'auto' }}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Dados do Aluno</Text>

                <View style={styles.section}>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Nome</Text>
                            <Text style={styles.exigencia}>*digite seu nome completo</Text>
                        </View>
                        <TextInput
                            style={[styles.formulario, isFocused === 'nome' && styles.isFocused]}
                            onFocus={() => setIsFocused('nome')}
                            onBlur={() => setIsFocused(null)}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#FFFFFF"></TextInput>
                    </View>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Email</Text>
                        </View>
                        <TextInput
                            style={[styles.formulario, isFocused === 'email' && styles.isFocused]}
                            onFocus={() => setIsFocused('email')}
                            onBlur={() => setIsFocused(null)}
                            placeholder="Digite seu email (exemplo: aluno@gmail.com)..."
                            keyboardType="email-address"
                            placeholderTextColor="#FFFFFF"></TextInput>
                    </View>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Matrícula</Text>
                            <Text style={styles.exigencia}>*apenas números</Text>
                        </View>
                        <TextInput
                            style={[
                                styles.formulario,
                                isFocused === 'matricula' && styles.isFocused,
                            ]}
                            onFocus={() => setIsFocused('matricula')}
                            onBlur={() => setIsFocused(null)}
                            placeholder="Digite o número de matrícula..."
                            keyboardType="number-pad"
                            placeholderTextColor="#FFFFFF"></TextInput>
                    </View>
                    <View style={styles.div}>
                        <View style={styles.campo}>
                            <Text style={styles.cracha}>Senha de acesso</Text>
                        </View>
                        <TextInput
                            style={[styles.formulario, isFocused === 'senha' && styles.isFocused]}
                            onFocus={() => setIsFocused('senha')}
                            onBlur={() => setIsFocused(null)}
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
                                <View>
                                    <Text style={styles.tituloInfo}>Nome:</Text>
                                    <Text style={styles.textInfo}>João Marcos da Silva</Text>
                                </View>
                                <View>
                                    <Text style={styles.tituloInfo}>Email:</Text>
                                    <Text style={styles.textInfo}>joao.ms@aluno.senai,edu.br</Text>
                                </View>
                                <View>
                                    <Text style={styles.tituloInfo}>Matrícula:</Text>
                                    <Text style={styles.textInfo}>123456789</Text>
                                </View>
                            </View>
                            <Image
                                source={require('./assets/qrcode.png')}
                                style={{ width: 100, height: 100, alignSelf: 'center' }}></Image>
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

                <Image
                    source={require('./assets/image 3.png')}
                    style={{ width: 200, height: 50, alignSelf: 'center', marginTop: 30 }}></Image>
            </View>
        </ScrollView>
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    titulo: {
        color: '#000000',
        fontFamily: 'Gloock-Regular',
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        marginTop: '10%',
        margin: 'auto',
        marginBottom: '10%',
    },
    section: {
        alignSelf: 'center',
        width: '80%',
        height: 'auto',
        borderWidth: 1.5,
        borderColor: '#597E8B',
        borderRadius: 10,
        padding: 15,
        gap: 20,
    },
    div: {
        width: 'auto',
        height: 'auto',
    },
    campo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        alignItems: 'baseline',
    },
    cracha: {
        color: '#414141',
        fontSize: 18,
    },
    exigencia: {
        color: '#6F9F9E',
        fontSize: 11,
        textAlign: 'right',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    formulario: {
        backgroundColor: '#6F9F9E',
        width: 'auto',
        height: 40,
        borderRadius: 10,
        borderColor: 'transparent',
        paddingHorizontal: 10, //Espaço nas laterais
        color: '#FFFFFF',
        outlineStyle: 'none',
        fontWeight: 'bold',
    },
    isFocused: {
        borderColor: '#597E8B',
        borderWidth: 3,
    },
    botaoSection: {
        alignItems: 'center',
        marginTop: 30,
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
        alignItems: 'center',
    },
    sectionCracha: {
        marginTop: 30,
        width: '80%',
        height: 'auto',
        backgroundColor: '#6F9F9E',
        borderRadius: 10,
        padding: 15,
        gap: 10,
    },
    conteinerCracha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
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
        fontWeight: 'bold',
    },
    tituloInfo: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    textInfo: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    info: {
        gap: 10,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    botaoDiv: {
        width: '80%',
        marginTop: 10,
    },
});
