/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import CustomText from '@components/ui/CustomText';
import { Colors, Fonts } from '@utils/Constants';
import ScalePress from '@components/ui/ScalePress';
import { truncateString } from '@utils/misc.helpers';
import UniversalAdd from '@components/ui/UniversalAdd';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Category = ({ index, item }: { index: number, item: any }) => {
  return (
    <ScalePress key={index} style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image_url }} style={styles.image} />
        <View style={styles.addToCart}>
          <UniversalAdd item={item} />
        </View>
      </View>
      <View
        style={{
          borderRadius: 4,
          width: 'auto',
          gap: 20,
          flexDirection: 'row',
        }}>
        <CustomText
          style={{
            color: Colors.text,
            fontSize: 7,
            backgroundColor: Colors.backgroundSecondary,
            padding: 2,
          }}
          variant="h9"
          fontFamily={Fonts.Medium}>
          {truncateString(item.unit, 14)}
        </CustomText>
        <CustomText
          style={{
            color: Colors.text,
            fontSize: 7,
            backgroundColor: Colors.backgroundSecondary,
            padding: 2,
          }}
          variant="h9"
          fontFamily={Fonts.Medium}>
          {truncateString(item.type, 14)}
        </CustomText>
      </View>
      {item.name && (
        <CustomText style={styles.text} variant="h9" fontFamily={Fonts.Medium}>
          {truncateString(item.name, 26)}
        </CustomText>
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('@assets/icons/clock.png')}
          style={{ width: 10, height: 10 }}
        />
        <CustomText
          style={[styles.text, { fontSize: 7, alignItems: 'center' }]}
          variant="h9"
          fontFamily={Fonts.Medium}>
          10 mins
        </CustomText>
      </View>

      <CustomText
        style={[
          styles.text,
          {
            fontSize: 6,
            backgroundColor: Colors.secondary_light,
            padding: 1,
            width: '50%',
            borderRadius: 4,
            marginVertical: 3,
          },
        ]}
        variant="h9"
        fontFamily={Fonts.Medium}>
        {item.sbc_offer}
      </CustomText>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name="currency-rupee"
          size={10}
          color="black"
          style={{ marginTop: 1 }}
        />
        <CustomText
          style={[styles.text, { fontSize: 11, alignItems: 'center' }]}
          variant="h9"
          fontFamily={Fonts.Medium}>
          {item.mrp}
        </CustomText>
      </View>
    </ScalePress>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  text: {
    color: Colors.text,
  },
  item: {
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  addToCart: {
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
});

export default Category;
