import {StyleSheet} from 'react-native';
import Cores from './colors/colors';
import Medidas from './measures/measures';

export default StyleSheet.create({
  container : {
    flex: 1,
        paddingHorizontal: Medidas.containerPaddingH,
        marginTop: Medidas.containerMarginT,
        backgroundColor: Cores.accent,
  },
  contatoView : {
    padding: Medidas.cardPadding,
    borderRadius: Medidas.cardBorderRadius,
    backgroundColor: Cores.primary,
    marginVertical: Medidas.cardMargin,
    flexDirection: "column",
    justifyContent: "center",
  },
  contatoTextInput: {
    width: Medidas.inputWidth,
    height: Medidas.inputHeight,
    backgroundColor: Cores.primary,
    borderColor: Cores.border,
    borderWidth: Medidas.inputBorderWidth,
    borderRadius: Medidas.inputBorderRadius,
    color: Cores.border,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    marginBottom: Medidas.inputMargin,
    padding: Medidas.inputPadding,

  },
  itemNaLista: {
    marginBottom: Medidas.cardMargin,
    alignItems: 'baseline',
    borderRadius: Medidas.cardBorderRadius,
    backgroundColor: Cores.primary,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listaTitle: {
      fontSize: Medidas.fontText,
      color: Cores.textPrimary,
      fontWeight: 'bold',
      marginLeft: 20,
  },

  listaPhone: {
      marginTop: Medidas.cardTextMargin,
      fontSize: Medidas.fontText,
      color: Cores.textSecondary,
      marginLeft: 20,
  },
  listaImagemContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  listaImagem: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  datailsButton: {
    borderRadius: Medidas.buttonBorderRadius,
    padding: Medidas.buttonPaddingPrimary,
    paddingLeft: Medidas.buttonPaddingSecondary,
    paddingRight: Medidas.buttonPaddingSecondary,
    backgroundColor: Cores.accent,
    alignItems: 'center'
  },
  detailsButtonText: {
    color: Cores.primary,
    fontWeight: 'bold',
    fontSize: Medidas.fontButton,
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Medidas.titleMarginT,
  },
  welcomeTitle: {
    fontSize: Medidas.fontTitle,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Cores.primary,
  },

});