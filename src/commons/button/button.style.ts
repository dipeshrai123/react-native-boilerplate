import {StyleSheet} from 'react-native';

import Theme from '@src/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.$black,
    paddingVertical: 16,
    paddingHorizontal: 10,
    height: 48,
    borderRadius: Theme.radius.$default,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 5.62,

    elevation: 2,
  },
  text: {
    fontSize: Theme.fontSizes.$3,
    color: Theme.colors.$black,
    textAlign: 'center',
  },
});

export {styles};
