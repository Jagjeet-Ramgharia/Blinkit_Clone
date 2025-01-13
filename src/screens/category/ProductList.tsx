/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, FlatList, View } from 'react-native';
import React, { FC } from 'react';
import { Colors } from '@utils/Constants';
import ProductItem from './ProductItem';
import CustomText from '@components/ui/CustomText';

const ProductList: FC<{ data: any[] }> = ({ data }) => {
  const renderItem = ({ item, index }: any) => {
    return <ProductItem item={item} index={index} />;
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.type_id}
        renderItem={renderItem}
        style={styles.container}
        contentContainerStyle={styles.content}
        numColumns={2}
        ListEmptyComponent={
          <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <CustomText>No products Available</CustomText>
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.backgroundSecondary,
  },
  content: {
    paddingVertical: 10,
    paddingBottom: 100,
  },
});
export default ProductList;
