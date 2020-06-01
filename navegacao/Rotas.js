import { createStackNavigator } from 'react-navigation-stack';
import PageIndex from '../pages/index';
import PageDetail from '../pages/PageDetail';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Cores from '../colors/colors';

const Rotas = createStackNavigator(
  {
    TelaInicial: PageIndex,
    TelaDetalhes: PageDetail,
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  });

export default createAppContainer(Rotas);