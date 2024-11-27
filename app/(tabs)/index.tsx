import React from 'react';
import { Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F1E6D3', dark: '#3B3C36' }}
      headerImage={
        <Image
          source={require('../../assets/images/splash.png')} // Caminho corrigido para a imagem
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo à</ThemedText>
        <ThemedText type="title"> Sabor BR Delivery!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Procure sua marmita..."
          placeholderTextColor="#A1A1A1"
        />
      </View>

      {/* Tipos de Marmita */}
<ThemedView style={styles.stepContainer}>
  <ThemedText type="subtitle">Deliciosas Marmitas!</ThemedText>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.mealItem}>
      <Image
        source={require('../../assets/images/propaganda4.png')} // Substitua pela imagem real da marmita
        style={styles.mealImage}
      />
      <ThemedText type="defaultSemiBold">Marmita de Frango</ThemedText>
      <ThemedText type="default">R$ 25,00</ThemedText>
    </View>
    <View style={styles.mealItem}>
      <Image
        source={require('../../assets/images/propaganda5.jpg')} // Substitua pela imagem real da marmita
        style={styles.mealImage}
      />
      <ThemedText type="defaultSemiBold">Marmita Peixe</ThemedText>
      <ThemedText type="default">R$ 28,00</ThemedText>
    </View>
    <View style={styles.mealItem}>
      <Image
        source={require('../../assets/images/propaganda2.png')} // Substitua pela imagem real da marmita
        style={styles.mealImage}
      />
      <ThemedText type="defaultSemiBold">Marmita de Carne</ThemedText>
      <ThemedText type="default">R$ 30,00</ThemedText>
    </View>
    <View style={styles.mealItem}>
      <Image
        source={require('../../assets/images/propaganda3.png')} // Substitua pela imagem real da marmita
        style={styles.mealImage}
      />
      <ThemedText type="defaultSemiBold">Marmita de Feijoada</ThemedText>
      <ThemedText type="default">R$ 35,00</ThemedText>
    </View>
  </ScrollView>
</ThemedView>


      {/* Passos do processo */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 1: Escolha sua marmita</ThemedText>
        <ThemedText>
          Selecione entre as opções de marmitas frescas e saborosas. Temos pratos variados para todos os gostos!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 2: Faça seu pedido</ThemedText>
        <ThemedText>
          Após escolher, faça seu pedido e aguarde a entrega no conforto da sua casa.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 3: Acompanhe sua entrega</ThemedText>
        <ThemedText>
          Acompanhe o status da sua entrega em tempo real até que sua refeição chegue com você.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 4: Aprecie sua refeição!</ThemedText>
        <ThemedText>
          Saboreie sua refeição fresquinha e feita com todo carinho. Bom apetite!
        </ThemedText>
      </ThemedView>

      {/* Link Escolher Marmita */}
      <ThemedView style={styles.linkContainer}>
        <TouchableOpacity
          onPress={() => {
            // Aqui você pode fazer algo simples como abrir um link ou redirecionar
            // Apenas para simular um link, vou usar uma ação como alert, por exemplo
            alert('Link para escolher marmita! Vá até a pagina "Carrinho".');
          }}
        >
          <ThemedText style={styles.linkText}>Escolher Marmita</ThemedText>
        </TouchableOpacity>
      </ThemedView>
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
  stepContainer: {
    gap: 8,
    marginBottom: 12,
  },
  headerImage: {
    height: 200,
    width: '100%',
    position: 'absolute',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
    color: '#333',
  },
  mealItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  mealImage: {
    width: 180, // Aumentei o tamanho da imagem
    height: 180, // Aumentei a altura da imagem
    borderRadius: 8,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#007BFF', // Cor semelhante a um link
    fontSize: 18,
    textDecorationLine: 'underline', // Simula o comportamento de um link
  },
});
