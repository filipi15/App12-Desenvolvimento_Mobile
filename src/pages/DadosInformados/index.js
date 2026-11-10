import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function DadosInformados({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Dados informados:</Text>
      <Text style={styles.dados}>Nome: {route.params?.nome}</Text>
      <Text style={styles.dados}>Idade: {route.params?.idade}</Text>
      <Text style={styles.dados}>Sexo: {route.params?.sexo}</Text>
      <Text style={styles.dados}>Escolaridade: {route.params?.escolaridade}</Text>
      <Text style={styles.dados}>Limite: R$ {route.params?.limite.toFixed(2)}</Text>
      <Text style={styles.dados}>Brasileiro: {route.params?.brasileiro ? 'Sim' : 'Não'}</Text>
    </View>
  );
}
