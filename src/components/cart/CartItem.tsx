import { View, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { Colors, Fonts } from '@utils/Constants';
import CustomText from '@components/ui/CustomText';
import { truncateString } from '@utils/misc.helpers';
import { useCartStore } from '@state/cartStore';
import UniversalAdd from '@components/ui/UniversalAdd';

const CartItem: FC<{ item: any }> = ({ item }) => {
  const getItemCount = useCartStore(state => state.getItemCount);
  return (
    <View style={styles.container}>
      <View style={styles.infoConatinert}>
        <Image
          source={{ uri: item.item.image_url }}
          style={styles.imageContainer}
        />
        <View>
          <CustomText fontFamily={Fonts.Medium} fontSize={9}>
            {truncateString(item.item.name, 24)}
          </CustomText>
          <CustomText fontSize={7}>
            {truncateString(item.item.unit, 24)}
          </CustomText>
          <CustomText fontSize={7}>
            {getItemCount(item.item?.product_id)}
          </CustomText>
        </View>
      </View>
      <View>
        <UniversalAdd item={item.item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexDirection: 'row',
  },
  infoConatinert: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CartItem;
