import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    marginTop: 5,
    fontSize: 18,
    padding: 10,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  botao: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#4a7bd0',
    justifyContent: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
  },
});

export { styles };
