import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { screenHeight, screenWidth } from '@utils/Scaling';
import { Colors, Fonts } from '@utils/Constants';
import CustomText from '@components/ui/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

interface CartSummaryProps {
  cartCount: number;
  cartImage: string;
  totalPrice?: number;
}

const CartSummary: FC<CartSummaryProps> = ({ cartCount, cartImage, totalPrice }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.flexRowGap}>
        <Image
          source={
            cartImage === null
              ? require('@assets/icons/bucket.png')
              : { uri: cartImage }
          }
          style={styles.image}
        />
        <View>
          <CustomText fontFamily={Fonts.SemiBold}>
            {cartCount} ITEM{cartCount > 1 ? 'S' : ''}
          </CustomText>
          <CustomText style={styles.price} fontSize={10} fontFamily={Fonts.SemiBold}>
            ₹{totalPrice}
          </CustomText>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ViewCart')}>
        <CustomText style={styles.btnText} fontFamily={Fonts.Medium}>
          Next
        </CustomText>
        <Icon name="arrow-right" color="#fff" size={RFValue(25)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: screenWidth * 0.05,
    paddingBottom: screenHeight * 0.03,
    paddingTop: screenHeight * 0.014,
  },
  flexRowGap: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: screenWidth * 0.03,
  },
  image: {
    width: screenWidth * 0.1,
    height: screenWidth * 0.1,
    borderRadius: screenWidth * 0.025,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: screenHeight * 0.01,
    borderRadius: screenWidth * 0.025,
    backgroundColor: Colors.secondary,
    paddingHorizontal: screenWidth * 0.1,
  },
  btnText: {
    marginLeft: screenWidth * 0.02,
    color: '#fff',
  },
  price: {
    color: Colors.text,
  },
});
export default CartSummary;
