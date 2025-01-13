import { View, StyleSheet, Image, StatusBar } from 'react-native';
import React, { FC } from 'react';
import { Colors } from '@utils/Constants';
import { screenHeight, screenWidth } from '@utils/Scaling';
import { NavigationProp, useNavigation } from '@react-navigation/native';

StatusBar.setBackgroundColor(Colors.primary, true);

type RootStackParamList = {
  ProductDashboard: undefined;
};

const SplashScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate({ name: 'ProductDashboard' });
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.backgroundSecondary} />
      <Image source={require('../../assets/images/splash_logo.jpeg')} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
