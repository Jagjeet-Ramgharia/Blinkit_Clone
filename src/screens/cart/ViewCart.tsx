/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import CustomHeader from '@components/ui/CustomHeader';
import { Colors, Fonts } from '@utils/Constants';
import { useCartStore } from '@state/cartStore';
import CartItem from '@components/cart/CartItem';
import CustomText from '@components/ui/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { snacks } from '@utils/mockData';
import SingleCategoryContainer from '@components/dashboard/SingleCategory';
import { useNavigation } from '@react-navigation/native';

const ViewCart = () => {
  const navigation = useNavigation<any>();
  const handlingCharge = 5;
  const deliveryCharge = 30;
  const Cart = useCartStore(state => state.cart);
  const totalAmount = useCartStore(state => state.getTotalPrice());

  const getGrandTotal = () => {
    return totalAmount + handlingCharge + deliveryCharge;
  };

  React.useEffect(() => {
    if (Cart.length === 0) {
      navigation.goBack();
    }
  }, [Cart, navigation]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <CustomHeader title={`Cart (${Cart.length})`} />
      <View style={styles.contentBody}>
        <View style={styles.contentCard}>
          {Cart.map((item: any) => {
            return (
              <View style={{}} key={item.product_id}>
                <CartItem item={item} />
              </View>
            );
          })}
        </View>
        <View style={[styles.contentCard, { marginTop: 10 }]}>
          <CustomText fontSize={12} fontFamily={Fonts.Medium}>
            Add More
          </CustomText>
          <SingleCategoryContainer data={snacks.slice(0, 8)} />
        </View>
        <View style={[styles.contentCard, { marginTop: 10 }]}>
          <CustomText fontSize={12} fontFamily={Fonts.Medium}>
            Billing Details
          </CustomText>
          <BilingDetails text="Items total" icon="info" value={totalAmount} />
          <BilingDetails
            text="Handling charge"
            icon="shopping-bag"
            value={handlingCharge}
          />
          <BilingDetails
            text="Delivery charge"
            icon="delivery-dining"
            value={deliveryCharge}
          />
          <View
            style={{
              height: 1,
              backgroundColor: Colors.backgroundSecondary,
              marginTop: 10,
            }}
          />
          <BilingDetails text="Grand total" value={getGrandTotal()} />
        </View>
      </View>
    </ScrollView>
  );
};

const BilingDetails = ({
  text,
  icon,
  value,
}: {
  text: string;
  icon?: string;
  value: any;
}) => {
  return (
    <View style={styles.billingDetails}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        {icon && (
          <Icon
            name={icon}
            size={RFValue(12)}
            color={Colors.text}
            style={{ marginTop: 2 }}
          />
        )}
        <CustomText fontSize={10} fontFamily={Fonts.Medium}>
          {text}
        </CustomText>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <Icon
          name="currency-rupee"
          size={12}
          color="black"
          style={{ marginTop: 1 }}
        />
        <CustomText fontSize={10} fontFamily={Fonts.Medium}>
          {value}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    backgroundColor: Colors.white,
  },
  contentBody: {
    padding: 8,
    backgroundColor: Colors.backgroundSecondary,
    height: '100%',
  },
  contentCard: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 8,
    height: 'auto',
  },
  billingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ViewCart;
