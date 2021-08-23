import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultadoBox: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: Platform.OS === 'ios' ? 20 : 0,
    borderWidth: 4,
    borderColor: '#B1B1B1',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  resultado: {
    color: '#B1B1B1',
    fontSize: 60,
    textAlign: 'left',
    fontWeight: 'bold',
    letterSpacing: 10,
  },
  valid: {
    color: '#D4E1C6',
    fontSize: 30,
    fontWeight: 'bold',
  },
  invalid: {
    color: '#F7D8DC',
    fontSize: 30,
    fontWeight: 'bold',
  },
  clearWord: {
    color: '#D8D8D8',
    fontSize: 30,
    textAlign: 'right',
    paddingVertical: 20,
    marginHorizontal: Platform.OS === 'ios' ? 20 : 0,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  boton: {
    height: 80,
    width: 80,
    borderColor: '#f67460',
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
  },
});
