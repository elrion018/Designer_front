import React, {useEffect} from 'react';
import {AppNavigator} from './src/system';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';

function App() {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
}

export default App;
