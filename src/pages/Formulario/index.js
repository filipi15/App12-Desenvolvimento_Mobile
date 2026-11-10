import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Formulario() {
  const navigation = useNavigation();

  let initial_sexos = [
    { id: 1, nome: 'Masculino' },
    { id: 2, nome: 'Feminino' },
    { id: 3, nome: 'Prefiro não informar' },
  ]

  let initial_escolaridades = [
    { id: 1, nome: 'Ensino Fundamental' },
    { id: 2, nome: 'Ensino Médio' },
    { id: 3, nome: 'Ensino Superior' },
    { id: 4, nome: 'Pós-graduação' },
  ]

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState(0)
  const [escolaridade, setEscolaridade] = useState(0)
  const [limite, setLimite] = useState(200)
  const [brasileiro, setBrasileiro] = useState(false)

  const [sexos, setSexos] = useState(initial_sexos)
  const [escolaridades, setEscolaridades] = useState(initial_escolaridades)

  let sexosItem = sexos.map((valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })

  let escolaridadesItem = escolaridades.map((valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })

  function confirmar() {
    if (nome === '' || idade === '') {
      alert('Preencha o nome e a idade!')
      return;
    }

    // Envia os dados para a segunda tela
    navigation.navigate('DadosInformados', {
      nome: nome,
      idade: idade,
      sexo: sexos[sexo].nome,
      escolaridade: escolaridades[escolaridade].nome,
      limite: limite,
      brasileiro: brasileiro,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
        />

        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          onChangeText={setIdade}
        />

        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          {sexosItem}
        </Picker>

        <Text style={styles.label}>Escolaridade:</Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}
        >
          {escolaridadesItem}
        </Picker>

        <Text style={styles.label}>Limite: R$ {limite.toFixed(0)}</Text>
        <Slider
          minimumValue={0}
          maximumValue={5000}
          step={50}
          value={limite}
          onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
          minimumTrackTintColor='blue'
          maximumTrackTintColor='gray'
          thumbTintColor='blue'
        />

        <View style={styles.linha}>
          <Text style={styles.label}>Brasileiro:</Text>
          <Switch
            value={brasileiro}
            onValueChange={(valorSwitch) => setBrasileiro(valorSwitch)}
            thumbColor='blue'
          />
        </View>

        <Pressable style={styles.botao} onPress={confirmar}>
          <Text style={styles.textoBotao}>Confirmar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
