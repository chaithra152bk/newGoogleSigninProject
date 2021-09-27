import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  GoogleSignin
} from '@react-native-google-signin/google-signin';


const HomePageScreen = (props) => {
  const { containerStyle, welcomeTextStyle, logoutButtonContainer, logoutText } = styles;
  const _signOut = async () => {
    try {
      await GoogleSignin.signOut();
      props.navigation.navigate("Login")

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={containerStyle}>
      <View>
        <Text style={welcomeTextStyle}>Welcome to HomePage</Text>
      </View>
      <TouchableOpacity onPress={_signOut}>
        <View style={logoutButtonContainer}>
          <Text style={logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};


const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  welcomeTextStyle: {
    textAlign: 'center',
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold'

  },
  logoutButtonContainer: {
    justifyContent: 'flex-end',
    marginTop: 150,
    padding: 20,
    backgroundColor: 'red'
  },
  logoutText:{
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
};

export default HomePageScreen;