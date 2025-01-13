/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { FC, useRef } from 'react';
import { screenHeight } from '@utils/Scaling';
import Visuals from './Visuals';
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  useCollapsibleContext,
  withCollapsibleContext,
} from '@r0b0t3d/react-native-collapsible';
import AnimatedHeader from './AnimatedHeader';
import StickSearchBar from './StickSearchBar';
import Content from '@components/dashboard/Content';
import CustomText from '@components/ui/CustomText';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors, Fonts } from '@utils/Constants';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import withCart from '../cart/WithCart';

const ProductDashboard: FC = () => {
  const { scrollY, expand } = useCollapsibleContext();
  const previousScroll = useRef<number>(0);

  const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp =
      scrollY.value < previousScroll.current && scrollY.value > 180;
    const opacity = withTiming(isScrollingUp ? 1 : 0, { duration: 300 });
    const translateY = withTiming(isScrollingUp ? 0 : 10, { duration: 300 });

    previousScroll.current = scrollY.value;

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <View style={styles.container}>
      <Visuals />
      <SafeAreaView />

      <Animated.View style={[styles.backToTopButton, backToTopStyle]}>
        <TouchableOpacity
          onPress={() => {
            scrollY.value = 0;
            expand();
          }}
          style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Icon
            name="arrow-up-circle-outline"
            color="white"
            size={RFValue(12)}
          />
          <CustomText
            variant="h9"
            style={{ color: 'white' }}
            fontFamily={Fonts.SemiBold}>
            Back to top
          </CustomText>
        </TouchableOpacity>
      </Animated.View>

      <CollapsibleContainer style={styles.panelContainer}>
        <CollapsibleHeaderContainer containerStyle={styles.transparent}>
          <AnimatedHeader />
          <StickSearchBar />
        </CollapsibleHeaderContainer>

        <CollapsibleScrollView
          nestedScrollEnabled
          style={styles.panelContainer}
          showsVerticalScrollIndicator={false}>
          <Content />

          <View
            style={{ backgroundColor: '#F8F8F8', padding: 20, marginTop: 60 }}>
            <CustomText
              fontSize={RFValue(22)}
              fontFamily={Fonts.Bold}
              style={{ opacity: 0.2 }}>
              India's last minute app 🥭
            </CustomText>
          </View>
        </CollapsibleScrollView>
      </CollapsibleContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  panelContainer: {
    flex: 1,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  backToTopButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: Platform.OS === 'ios' ? screenHeight * 0.18 : 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 999,
  },
  box: {
    minWidth: 160,
    height: 40,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: [{ translateX: '-50%' }],
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default withCart(withCollapsibleContext(ProductDashboard));
