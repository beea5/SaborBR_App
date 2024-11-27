import React, { useState } from 'react';
import { View, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const marmitas = [
  { 
    id: '0', 
    name: 'Marmita de Frango', 
    description: 'Marmita deliciosa com peito de frango grelhado, arroz branco, feijão carioca e salada de alface e tomate.', 
    price: 25.0, 
    image: require('../../assets/images/propaganda4.png') 
  },
  { 
    id: '1', 
    name: 'Marmita Peixe', 
    description: 'Marmita com filé de peixe grelhado, purê de batata, arroz e brócolis a dor.', 
    price: 28.0, 
    image: require('../../assets/images/propaganda5.jpg') 
  },
  { 
    id: '2', 
    name: 'Marmita de Churrasco', 
    description: 'Marmita com churrasco, arroz, feijão preto, farofa e salada de couve.', 
    price: 30.0, 
    image: require('../../assets/images/propaganda2.png') 
  },
  { 
    id: '3', 
    name: 'Marmita de Feijoada', 
    description: 'Marmita com feijoada, arroz e farofa.', 
    price: 35.0, 
    image: require('../../assets/images/propaganda3.png') 
  },
];

export default function ProductListScreen() {
  const [search, setSearch] = useState('');
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState(0);
  const [quantities, setQuantities] = useState(marmitas.map(() => 0));

  const handleNumericInput = (value, setter) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setter(numericValue);
  };

  const calcularFrete = () => {
    if (!cep || cep.length < 8) {
      Alert.alert('Erro', 'Por favor, insira um CEP válido.');
      return;
    }

    const valorFrete = Math.random() * (20 - 5) + 5; // Simulação de frete entre 5 e 20
    setFrete(parseFloat(valorFrete.toFixed(2)));
    Alert.alert('Frete Calculado', `O frete para o CEP ${cep} é R$ ${valorFrete.toFixed(2)}`);
  };

  const calcularTotal = () => {
    const subtotal = marmitas.reduce(
      (total, marmita, index) => total + marmita.price * quantities[index],
      0
    );
    return (subtotal + frete).toFixed(2);
  };

  const handleLimparCarrinho = () => {
    setQuantities(marmitas.map(() => 0));
    setFrete(0);
    setCep('');
    Alert.alert('Carrinho Limpo', 'Todos os itens foram removidos.');
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F1E6D3', dark: '#3B3C36' }}
      headerImage={
        <Image
          source={require('../../assets/images/splash.png')}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Escolha sua Marmita</ThemedText>
      </ThemedView>

      <ScrollView style={styles.container}>
        {marmitas
          .filter((marmita) => marmita.name.toLowerCase().includes(search.toLowerCase()))
          .map((marmita, index) => (
            <View key={marmita.id} style={styles.mealItem}>
              <Image source={marmita.image} style={styles.mealImage} />
              <ThemedText type="defaultSemiBold">{marmita.name}</ThemedText>
              <ThemedText type="default">{marmita.description}</ThemedText>
              <ThemedText type="default">R$ {marmita.price.toFixed(2)}</ThemedText>

              <QuantitySelector
                quantity={quantities[index]}
                onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
              />
            </View>
          ))}
      </ScrollView>

      <View style={styles.summaryContainer}>
        <View style={styles.cepContainer}>
          <TextInput
            style={styles.cepInput}
            placeholder="Digite seu CEP"
            value={cep}
            onChangeText={(text) => handleNumericInput(text, setCep)}
            keyboardType="numeric"
            maxLength={9}
            placeholderTextColor="#bbb"
          />
          <TouchableOpacity onPress={calcularFrete} style={styles.greenButton}>
            <ThemedText style={styles.greenButtonText}>Calcular Frete</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.shippingContainer}>
          {/* Alteração para a cor preta no valor do frete */}
          <ThemedText type="default" style={styles.shippingText}>Frete: R$ {frete.toFixed(2)}</ThemedText>
          {/* Alteração para a cor preta no valor total */}
          <ThemedText type="default" style={styles.shippingText}>Total: R$ {calcularTotal()}</ThemedText>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLimparCarrinho} style={styles.clearButton}>
            <ThemedText style={styles.clearButtonText}>Limpar Carrinho</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Compra Finalizada')} style={styles.finalButton}>
            <ThemedText style={styles.finalButtonText}>Finalizar Compra</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const increment = () => {
    onQuantityChange(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <ThemedText type="default">-</ThemedText>
      </TouchableOpacity>
      <TextInput
        style={styles.quantityInput}
        keyboardType="numeric"
        value={String(quantity)}
        onChangeText={(text) => onQuantityChange(Number(text))}
      />
      <TouchableOpacity style={styles.button} onPress={increment}>
        <ThemedText type="default">+</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  mealItem: {
    marginBottom: 16,
    alignItems: 'center',
  },
  mealImage: {
    width: 180,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityInput: {
    height: 35,
    width: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 8,
    color: 'white',
    backgroundColor: '#333',
  },
  button: {
    width: 35,
    height: 35,
    backgroundColor: '#28a745',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  greenButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  greenButtonText: {
    color: 'white',
    fontSize: 16,
  },
  cepContainer: {
    marginBottom: 10,
  },
  cepInput: {
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  shippingContainer: {
    marginTop: 10,
    padding: 10,
  },
  shippingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Cor branca para o valor do frete e total
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#333', // Fundo preto
    padding: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  clearButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '48%',
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
  },
  finalButton: {
    backgroundColor: '#28a745',
    paddingVertical: 18,  // Aumento da altura
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '50%', // Maior largura
  },
  finalButtonText: {
    color: 'white',
    fontSize: 18, // Texto maior
  },
});
