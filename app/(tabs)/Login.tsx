import React, { useState, useRef } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { HelloWave } from '@/components/HelloWave';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const senhaRef = useRef();

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode implementar lógica de autenticação
    Alert.alert('Login realizado', 'Bem-vindo!');
    navigation.navigate('Home'); // Ajuste a navegação conforme necessário
  };

  const handleLimparDados = () => {
    setEmail('');
    setSenha('');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F1E6D3', dark: '#3B3C36' }}
      headerImage={
        <Image
          source={require('../../assets/images/splash.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login</ThemedText>
        <HelloWave />
      </ThemedView>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              onSubmitEditing={() => senhaRef.current.focus()}
              returnKeyType="next"
              placeholderTextColor="#bbb"
            />
            <TextInput
              ref={senhaRef}
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              onSubmitEditing={handleLogin}
              returnKeyType="done"
              placeholderTextColor="#bbb"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleLimparDados} style={styles.button}>
                <ThemedText style={styles.buttonText}>Limpar</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <ThemedText style={styles.buttonText}>Login</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    height: 60,
    backgroundColor: '#555',
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
    color: 'white',
    marginBottom: 16,
    width: '120%',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28A745', // Botões verdes
    padding: 15,
    borderRadius: 8,
    width: '48%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  headerImage: {
    height: 200,
    width: '100%',
    position: 'absolute',
  },
});
