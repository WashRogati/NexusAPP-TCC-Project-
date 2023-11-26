import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Animated, Easing } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-paper';

const data = [
    { id: 1, image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, image: 'https://picsum.photos/200/200?random=3' },
];

const Menu = ({ navigation }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const menuAnimation = new Animated.Value(0);
    const overlayAnimation = new Animated.Value(0);

    const toggleMenu = () => {
        if (isMenuOpen) {
            Animated.timing(menuAnimation, {
                toValue: 0,
                duration: 300,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            }).start(() => {
                setMenuOpen(false);
            });
        } else {
            Animated.timing(menuAnimation, {
                toValue: 1,
                duration: 300,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            }).start();
            setMenuOpen(true);
            setOverlayVisible(true);
        }
    };

    const closeOverlay = () => {
        Animated.timing(overlayAnimation, {
            toValue: 0,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start(() => {
            setOverlayVisible(false);
        });
    };

    const overlayStyle = {
        transform: [
            {
                translateX: overlayAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                }),
            },
        ],
    };

    const menuStyle = {
        transform: [
            {
                translateX: menuAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            {isOverlayVisible && (
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={closeOverlay}
                >
                    <Animated.View style={[styles.overlayContent, overlayStyle]}>
                        <Icon name="times" size={30} color="black" />
                        <Text style={styles.menuText}>Overlay Item 1</Text>
                        <Text style={styles.menuText}>Overlay Item 2</Text>
                        <Text style={styles.menuText}>Overlay Item 3</Text>
                    </Animated.View>
                </TouchableOpacity>
            )}
            <Animated.View style={[styles.menu, menuStyle]}>
                <Text style={styles.menuText}>Menu Item 1</Text>
                <Text style={styles.menuText}>Menu Item 2</Text>
                <Text style={styles.menuText}>Menu Item 3</Text>
            </Animated.View>

            <ScrollView>
                <View style={styles.carousel}>
                    {/*  <Carousel
                        layout={'stack'} layoutCardOffset={`18`}
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.carouselItem}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.carouselImage}
                                />
                                <Text style={styles.texto}>{item.text}</Text>
                            </View>
                        )}
                        sliderWidth={300}
                        itemWidth={200}
                    /> */}
                    <Image source={require('../image/atividades.jpg')} style={styles.carouselImage} />
                </View>

                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonRow}>
                                <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('PerfilProfissional')}>
                                    <Text style={styles.texto}>Perfil
                                    </Text>
                                </Button>
                                <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Agenda')} >
                                    <Text style={styles.texto}>Agenda
                                    </Text>                     </Button>
                            </View>
                            <View style={styles.buttonRow}>
                                <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('CadastroTEA')}>
                                    <Text style={styles.texto}>Cadastrar TEA
                                    </Text>
                                </Button>
                                <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('ListaExercicios')}>
                                    <Text style={styles.texto}>Exercícios
                                    </Text>                         </Button>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 2,
    },
    overlayContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 3,
        padding: 20,
    },
    menu: {
        position: 'absolute',
        top: 0,
        left: '-50%',
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 1,
        padding: 20,
    },
    menuText: {
        fontSize: 18,
        marginBottom: 10,
    },
    carousel: {
        height: 200,
        width: '100%',
        backgroundColor: 'white',
    },
    carouselItem: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',

    },
    carouselImage: {
        width: '100%',
        height: 200,
    },
    card: {
        margin: 16,
        borderRadius: 12,
        opacity: 50
    },
    buttonContainer: {
        flexDirection: 'column',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexWrap: 'wrap',
        gap: 10,
    },
    button: {
        width: '48%',
        borderRadius: 12,
        height: 80,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'start'
    },
    texto: {
        color: "black",

    }
});


export default Menu;