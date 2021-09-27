import * as React from 'react';
import {
  View
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react/cjs/react.development';


const LoginScreen = (props) => {
  const { containerStyle, buttonContainer, buttonStyle } = styles;
  const [userInfo, setUserInfo] = useState({})

  GoogleSignin.configure({
    webClientId: '236253973910-rvctbr2k01n7ildfsd28cefa0c1n86hh.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });


  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo)
      props.navigation.navigate("Homepage")

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={containerStyle}>

      <View style={buttonContainer}>
        <GoogleSigninButton
          style={buttonStyle}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
        />
      </View>
    </View>
  );
};


const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
    width: 300,
    height: 65,
    marginTop: 100,

  }
};

export default LoginScreen;