import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import BotonLetra from '../components/BotonLetra';
import Icon from 'react-native-vector-icons/Ionicons';
import {useLettersGame} from '../hooks/useLettersGame';

const HomeScreen = () => {
  const {board, palabra, valida, indexTem, limpiar, armarPalabra} =
    useLettersGame();

  return (
    <>
      {palabra.length > 0 && (
        <Text style={styles.clearWord} onPress={() => limpiar()}>
          clear word{' '}
          <Icon name="close-circle-outline" size={30} color="#D8D8D8" />
        </Text>
      )}
      <View style={styles.homeContainer}>
        {board.length > 0 && (
          <>
            {/* Fila de botones */}
            <View style={styles.fila}>
              <BotonLetra
                index={0}
                texto={board[0]}
                color={indexTem.includes(0) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={1}
                texto={board[1]}
                color={indexTem.includes(1) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={2}
                texto={board[2]}
                color={indexTem.includes(2) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={3}
                texto={board[3]}
                color={indexTem.includes(3) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
              <BotonLetra
                index={4}
                texto={board[4]}
                color={indexTem.includes(4) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={5}
                texto={board[5]}
                color={indexTem.includes(5) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={6}
                texto={board[6]}
                color={indexTem.includes(6) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={7}
                texto={board[7]}
                color={indexTem.includes(7) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
              <BotonLetra
                index={8}
                texto={board[8]}
                color={indexTem.includes(8) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={9}
                texto={board[9]}
                color={indexTem.includes(9) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={10}
                texto={board[10]}
                color={indexTem.includes(10) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={11}
                texto={board[11]}
                color={indexTem.includes(11) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
              <BotonLetra
                index={12}
                texto={board[12]}
                color={indexTem.includes(12) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={13}
                texto={board[13]}
                color={indexTem.includes(13) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={14}
                texto={board[14]}
                color={indexTem.includes(14) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
              <BotonLetra
                index={15}
                texto={board[15]}
                color={indexTem.includes(15) ? '#62AB2D' : '#F8B148'}
                accion={armarPalabra}
              />
            </View>
          </>
        )}

        <View style={styles.resultadoBox}>
          <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
            {palabra}{' '}
          </Text>
          <>
            {palabra !== '' && (
              <Text
                style={valida ? styles.valid : styles.invalid}
                numberOfLines={1}
                adjustsFontSizeToFit>{`${valida ? 'valid' : 'invalid'}`}</Text>
            )}
          </>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
