import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native';
import { Provider } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerNavigator, TabNavigation } from './components/routes';
import Store from './store';

const App = () => {
  const [switchNavi, setSwitchNavi] = useState(false);
  //const pan = useRef(new Animated.ValueXY()).current;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;


  return (
    <Provider store={Store}>
      {switchNavi ? <TabNavigation /> : <DrawerNavigator />}

    
        <TouchableOpacity
          onPressIn={() => setSwitchNavi(!switchNavi)} // Phản hồi nhanh khi nhấn
          style={
            {
              position: 'absolute',
              zIndex: 20,
              bottom: 100,
              right: 30,
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          <MaterialIcons name="swap-horizontal-circle" size={50} color="black" />
        </TouchableOpacity>
    </Provider>
  );
};

export default App;