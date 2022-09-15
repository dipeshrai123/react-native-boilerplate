import {StyleSheet} from 'react-native';

import Theme from '@src/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: Theme.colors.$gray300,
    backgroundColor: 'white',
    borderWidth: 1,
    width: '100%',
  },
  label: {
    marginBottom: 4,
  },
  inputcontainer: {
    width: '100%',
  },
  input: {
    paddingLeft: 0,
    fontSize: Theme.fontSizes.$2,
    overflow: 'hidden',
    color: Theme.colors.$black,
  },
  rightIcon: {
    position: 'absolute',
    justifyContent: 'center',
    right: 0,
    top: -15,
  },
  errorStyle: {
    borderColor: Theme.colors.$error,
  },
  errorWrapper: {
    marginTop: 4,
  },
  errorText: {
    color: Theme.colors.$error,
  },
});

export {styles};
