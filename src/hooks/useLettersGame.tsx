import {useState, useEffect} from 'react';
import dictionaryData from '../assets/dictionary.json';
import boardData from '../assets/test-board-2.json';

export const useLettersGame = () => {
  const [words, setWords] = useState(['']);
  const [board, setBoard] = useState(['']);
  const [palabra, setPalabra] = useState('');
  const [valida, setValida] = useState(false);
  const [indexTem, setIndexTem] = useState<number[]>([]);

  const limpiar = () => {
    setPalabra('');
    setIndexTem([]);
  };

  const armarPalabra = (letraTexto: string, index: number) => {
    // No aceptar 2 veces la misma letra
    if (indexTem.includes(index)) {
      return;
    }
    // Validamos si es la 1era letra
    if (palabra.length === 0) {
      setIndexTem([index]);
      setPalabra(letraTexto);
      //Validamos que sea ficha vecina (arriba, abajo, izquierda o derecha)
    } else {
      const fichaVecina = indexTem.map(
        item =>
          item + 1 === index ||
          item - 1 === index ||
          item + 4 === index ||
          item - 4 === index,
      );
      if (fichaVecina.includes(true)) {
        setIndexTem([...indexTem, index]);
        setPalabra(palabra + letraTexto);
      }
    }
  };

  useEffect(() => {
    setWords(dictionaryData.words);
    setBoard(boardData.board);
  }, []);

  useEffect(() => {
    setValida(words.includes(palabra.toLowerCase()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [palabra]);

  return {
    words,
    board,
    palabra,
    valida,
    indexTem,
    limpiar,
    armarPalabra,
  };
};
