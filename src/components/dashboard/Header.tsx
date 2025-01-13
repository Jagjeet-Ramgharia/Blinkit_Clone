/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: FC = () => {
  return (
    <View style={styles.subContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        <CustomText fontFamily={Fonts.Bold} variant="h8" style={styles.text}>
          {/* Delivery in */}
        </CustomText>
        <View style={styles.flexRowGap}>
          <CustomText
            fontFamily={Fonts.SemiBold}
            variant="h3"
            style={styles.text}>
            10 minutes delivery
          </CustomText>
          <TouchableOpacity style={styles.noticeBtn}>
            <CustomText
              fontSize={RFValue(5)}
              fontFamily={Fonts.SemiBold}
              style={{ color: '#3B4886' }}>
              ⛈️ Rain
            </CustomText>
          </TouchableOpacity>
        </View>

        <View style={styles.flexRow}>
          <CustomText
            variant="h8"
            numberOfLines={1}
            fontFamily={Fonts.Medium}
            style={styles.text2}>
            Bengalore Division, Karnataka
          </CustomText>
          <Icon
            name="menu-down"
            color="#fff"
            size={RFValue(12)}
            style={{ bottom: -1 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingTop: 10 }}>
        <Icon name="account-circle-outline" size={RFValue(20)} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  text2: {
    color: '#fff',
    width: '90%',
    textAlign: 'center',
  },
  flexRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
    width: '70%',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? 10 : 22,
    justifyContent: 'space-between',
  },
  flexRowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingTop: 10
  },
  noticeBtn: {
    backgroundColor: '#E8EAF5',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    bottom: -2,
  },
});

export default Header;
