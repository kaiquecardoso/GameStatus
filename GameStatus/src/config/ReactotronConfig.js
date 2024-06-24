import Reactotron from 'reactotron-react-native';

Reactotron.configure({ host: '192.168.1.12' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron; // Torna o Reactotron globalmente acessível como `console.tron`

export default Reactotron;
