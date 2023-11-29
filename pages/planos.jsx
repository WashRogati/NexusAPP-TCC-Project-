import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Footer } from '../components/footer';
import { useStateContext } from '../context/ProfissionalContext';



const Planos = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../image/nexus.png')}
                    style={styles.logo}
                />
                <Text style={styles.welcomeText}>Planos</Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.titulo}>Plano Básico:</Text>
                    <Text style={styles.preco}>
                        Preço: Gratuito
                    </Text>
                    <Text>
                        Vantagens:
                        Acesso limitado a 1 profissional inscrito no aplicativo. (Não recomendado para empresas).
                        Possibilidade de procurar e entrar em contato com responsáveis disponíveis, limite de 8.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.titulo}>Plano Intermediário:</Text>
                    <Text style={styles.preco}>
                        Preço: R$ 49,99/mês
                    </Text>
                    <Text>
                        Vantagens:
                        Acesso limitado a 1 profissional inscrito no aplicativo. (Não recomendado para empresas).
                        Acesso ilimitado a todos os responsáveis cadastrados.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.titulo}>Plano Avançado:</Text>
                    <Text style={styles.preco}>
                        Preço: R$ 99,99/mês
                    </Text>
                    <Text>
                        Vantagens:
                        Todos o Benefícios do Plano Intermediário.
                        Acesso limitado a 4 profissionais inscritos no aplicativo. (Não recomendado para empresas grandes).
                        Descontos exclusivos em eventos e parcerias com outras organizações.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.titulo}>Plano Empresarial:</Text>
                    <Text style={styles.preco}>
                        Preço: Sob consulta
                    </Text>
                    <Text>
                        Vantagens:
                        Todos os benefícios do Plano Avançado.
                        Acesso ilimitado a profissionais inscritos no aplicativo. (Bom para grandes empresas).
                        Possibilidade de cadastro de múltiplos profissionais para a mesma pessoa com TEA.
                        Descontos especiais para empresas e organizações que usam o serviço em larga escala.
                        Suporte dedicado e personalizado para atender às necessidades da empresa.</Text>
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
        gap: 20,
        backgroundColor: "#ADD7F6",
        marginBottom: '12%'
    },
    logo: {
        width: 150, // Largura da logo em pixels
        height: 150, // Altura da logo em pixels
    },
    welcomeText: {
        fontSize: 15, // Tamanho da fonte para o texto de boas-vindas
    },
    titulo: {
        fontWeight: 'bold'
    },
    buttonContainer: {
        width: '70%', // Largura dos botões (70% da largura da tela)
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
    },
    button: {
        width: '100%', // Botões ocupam toda a largura do contêiner
        height: 60,    // Altura dos botões em pixels
        backgroundColor: '#001845', // Cor de fundo do botão
        borderRadius: 10, // Borda arredondada
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, // Espaçamento vertical entre os botões
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
})

export default Planos;
