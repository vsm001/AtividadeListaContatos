import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import colors from '../colors/colors';
import * as ImagePicker from 'expo-image-picker';
// import { Container } from './styles';

const TirarFoto = forwardRef((props, ref) => {

  const [imagemURI, setImagemURI] = useState(props.imagemURI);

  const tirarFoto = async() => {
    const foto = await ImagePicker.launchImageLibraryAsync(
      {
        allowsEditing: true,
        aspect:[9,16],
        quality: 1
      }
    );
    setImagemURI(foto.uri);
    props.onFotoTirada(foto.uri);
  }

  const resetImage = () => {
    setImagemURI(null);
  }

  useImperativeHandle(ref, () => {
    return {
      resetImage: resetImage
    };
  });

  return (
    <View style={estilos.principal}>
      <View style={estilos.previewDaImagem}>
        {
        !imagemURI ?
        <Text style={estilos.previewText}>Nenhuma foto.</Text>
        :
        <Image 
          style={estilos.imagem} 
          source={{uri: imagemURI}}
        />
        }
      </View>
      <Button 
        title="Escolher foto"
        color={colors.shadow}
        onPress={tirarFoto}
      />
    </View>
  )
});

const estilos = StyleSheet.create({
  principal: {
    alignItems: 'center',
    marginBottom: 15,
    height: 120,
  },
  previewDaImagem: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 50,
  },
  previewText: {
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default TirarFoto;