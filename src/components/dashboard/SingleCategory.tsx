/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import Category from './Category';

const SingleCategoryContainer: FC<{
  data: any;
}> = ({ data }) => {
  const renderItems = (items: any[]) => {
    return (
      <>
        {items.map((item, index) => {
          return <Category key={index} index={index} item={item} />;
        })}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>{renderItems(data)}</View>
    </View>
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
});
export default SingleCategoryContainer;
