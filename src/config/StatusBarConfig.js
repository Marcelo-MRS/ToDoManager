import { StatusBar, Platform } from 'react-native'

import color from 'color'

StatusBar.setBarStyle('light-content')

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor(color('#009c88').darken(0.2))
}
