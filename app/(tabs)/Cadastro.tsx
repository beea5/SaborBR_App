import React, { useState, useRef } from 'react';
import { Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, View, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [complemento, setComplemento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const telefoneRef = useRef();
  const cepRef = useRef();
  const complementoRef = useRef();
  const emailRef = useRef();
  const senhaRef = useRef();
  const confirmarSenhaRef = useRef();

  const handleNumericInput = (value, setter) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setter(numericValue);
  };

  const handleAlphaInput = (value, setter) => {
    const alphaValue = value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setter(alphaValue);
  };

  const handleCadastrar = async () => {
    if (!nome || !endereco || !telefone || !cep || !senha || !confirmarSenha || !email) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
  
    // Dados do formulário
    const dadosCadastro = {
      name: nome,          // 'name' no lugar de 'nome'
      end: endereco,       // 'end' no lugar de 'endereco'
      fone: telefone,      // 'fone' no lugar de 'telefone'
      cep: cep,            // 'cep' permanece 'cep'
      complement: complemento, // 'complement' no lugar de 'complemento'
      email: email,        // 'email' permanece 'email'
      senha: senha         // 'senha' permanece 'senha'
    };
  
    try {
      // Enviar dados para o servidor via POST
      const response = await fetch('http://192.168.0.10:3333/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosCadastro),
      });
  
      // Verificar se a requisição foi bem-sucedida
      if (response.ok) {
        const data = await response.json();
        Alert.alert('Cadastro realizado', 'Seu cadastro foi realizado com sucesso!');
        console.log('Dados recebidos:', data);
        navigation.navigate('Cadastro');
      } else {
        throw new Error('Falha ao cadastrar');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      
    }
  };

  const handleLimparDados = () => {
    setNome('');
    setEndereco('');
    setTelefone('');
    setCep('');
    setComplemento('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F1E6D3', dark: '#3B3C36' }}
      headerImage={
        <Image
          source={require('../../assets/images/splash.png')}
          style={styles.headerImage}
          resizeMode="cover" // Adicionando o resizeMode
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cadastro</ThemedText>
        <ThemedText type="title"></ThemedText>
        <HelloWave />
      </ThemedView>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ padding: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              value={nome}
              onChangeText={(value) => handleAlphaInput(value, setNome)}
              onSubmitEditing={() => telefoneRef.current.focus()}
              returnKeyType="next"
              placeholderTextColor="#bbb"
            />

            <TextInput
              style={styles.input}
              placeholder="Seu endereço"
              value={endereco}
              onChangeText={setEndereco}
              onSubmitEditing={() => telefoneRef.current.focus()}
              returnKeyType="next"
              placeholderTextColor="#bbb"
            />

            <TextInput
              ref={telefoneRef}
              style={styles.input}
              placeholder="Seu telefone"
              value={telefone}
              onChangeText={(value) => handleNumericInput(value, setTelefone)}
              keyboardType="numeric"
              maxLength={11}
              onSubmitEditing={() => cepRef.current.focus()}
              returnKeyType="next"
              placeholderTextColor="#bbb"
            />

            <TextInput
              ref={cepRef}
              style={styles.input}
              placeholder="Seu CEP"
              value={cep}
              onChangeText={(value) => handleNumericInput(value, setCep)}
              maxLength={9}
              keyboardType="numeric"
              onSubmitEditing={() => complementoRef.current.focus()}
              returnKeyType="next"
              placeholderTextColor="#bbb"
            />

            <TextInput
              ref={complementoRef}
              style={styles.input}
              placeholder="Complemento (opcional)"
              value={complemento}
              onChangeText={setComplemento}
              onSubmitEditing={() => emailRef.current.focus()}
              returnKeyType="next"
              placeholderTextColor="#bbb"
            />

            <TextInput
              ref={emailRef}
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
              onSubmitEditing={() => confirmarSenhaRef.current.focus()}
              returnKeyType="next"
              placeholderTextColor="#bbb"
            />

            <TextInput
              ref={confirmarSenhaRef}
              style={styles.input}
              placeholder="Repita a Senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
              onSubmitEditing={handleCadastrar}
              returnKeyType="done"
              placeholderTextColor="#bbb"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleLimparDados} style={styles.button}>
                <ThemedText style={styles.buttonText}>Limpar</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCadastrar} style={styles.button}>
                <ThemedText style={styles.buttonText}>Cadastrar</ThemedText>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  input: {
    height: 40,
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
    backgroundColor: '#28A745',
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
