import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import {StyleSheet, Dimensions} from 'react-native';

const WINDOWWIDTH = Dimensions.get('window').width;
const WINDOWHEIGHT = Dimensions.get('window').height;

const WHITE = '#FFFFFF';
const BLACK = '#000000';
const RED = '#C80000';
const GREY = '#333333';

export const Theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      white: WHITE,
      black: BLACK,
      red: RED,
      grey: GREY,
    },
    dimentions: {
			width: WINDOWWIDTH,
			height: WINDOWHEIGHT,
		},
    styles: StyleSheet.create({
      headline: {
        fontSize: 24,
        lineHeight: 36,
      },
      title: {
        fontSize: 20,
        lineHeight: 26,
      },
      subheading: {
        fontSize: 16,
        lineHeight: 21,
      },
      regular: {
        fontSize: 14,
        lineHeight: 18,
      },
      smallreg: {
        fontSize: 12,
        lineHeight: 15,
      },
      minicaps: {
        fontSize: 10,
        lineHeight: 15,
      },
    }),
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    },
  },
};
