import {StyleSheet} from 'react-native';

import Theme from '@src/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  displayElement: {
    padding: 4,
  },

  topheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Theme.space.$3,
    backgroundColor: Theme.colors.$primary,
    color: '#ffffff',
  },
  whitetext: {
    color: '#ffffff',
  },
  body: {
    flexDirection: 'column',
    padding: Theme.space.$3,
    // padding: spacing.card.PADDING,
    // borderColor: colors.light.grey200,
    // borderWidth: 1,
  },
  bodytop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pin: {
    borderColor: Theme.colors.$gray300,
    borderWidth: 1,
    padding: Theme.space.$3,
    borderRadius: 8,
  },
});

export {styles};
