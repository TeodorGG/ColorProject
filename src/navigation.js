import {createStackNavigator} from 'react-navigation-stack';
import {createBrowserApp} from '@react-navigation/web';
import StartPage from './page/start_page'
import TestPage from './page/test_page'
import ResultPage from './page/result_page'



const Home = createStackNavigator(
  {
      StartPage: StartPage,
      TestPage: TestPage,
      ResultPage: ResultPage,
  },
  {
    headerMode: 'none',
  }
);

const container = createBrowserApp(Home);


export default container;