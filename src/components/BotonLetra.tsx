import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  index: number;
  color?: string;
  accion: (letraTexto: string, index: number) => void;
}

const BotonLetra = ({texto, index, color = '#F8B148', accion}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto, index)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
        }}>
        <Text style={styles.botonTexto}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonLetra;
