import {StyleSheet} from 'react-native';

import Theme from '@src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  login: {
    height: '100%',
    flexDirection: 'column',
    paddingVertical: 20,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  help: {
    backgroundColor: Theme.colors.$primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  helptext: {
    fontWeight: 'bold',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 240,
  },
  logoImage: {
    height: 55,
    resizeMode: 'contain',
  },
  forgetpassowrd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  forgetpassowrdtext: {
    color: Theme.colors.$primary,
  },
  loginbutton: {
    backgroundColor: Theme.colors.$primary,
    fontSize: Theme.fontSizes.$2,
  },
  donthaveaccountcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donthaveaccount: {
    flexDirection: 'row',
  },
  signuptext: {
    color: Theme.colors.$primary,
    marginLeft: 5,
  },
  version: {
    color: Theme.colors.$gray200,
    marginTop: 20,
  },
});

export {styles};
