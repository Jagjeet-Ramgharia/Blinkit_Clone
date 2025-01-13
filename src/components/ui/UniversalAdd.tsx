/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Pressable } from 'react-native';
import React, { FC } from 'react';
import { useCartStore } from '@state/cartStore';
import { Colors, Fonts } from '@utils/Constants';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';

const UniversalAdd: FC<{ item: any }> = ({ item }) => {
  const count = useCartStore(state => state.getItemCount(item.product_id));
  const { addItem, removeItem } = useCartStore();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: count === 0 ? Colors.white : Colors.secondary },
      ]}>
      {count === 0 ? (
        <Pressable onPress={() => addItem(item)} style={styles.add}>
          <CustomText
            variant="h9"
            fontFamily={Fonts.SemiBold}
            style={styles.addText}>
            ADD
          </CustomText>
        </Pressable>
      ) : (
        <View style={styles.counterContainer}>
          <Pressable onPress={() => removeItem(item.product_id)}>
            <Icon name="minus" color="#fff" size={RFValue(13)} />
          </Pressable>
          <CustomText
            fontFamily={Fonts.SemiBold}
            style={styles.text}
            variant="h8">
            {count}
          </CustomText>

          <Pressable onPress={() => addItem(item)}>
            <Icon name="plus" color="#fff" size={RFValue(13)} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    width: 55,
    borderRadius: 8,
  },
  add: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
  },
  addText: {
    color: Colors.secondary,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 3,
    width: 55,
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
  },
});

export default UniversalAdd;
