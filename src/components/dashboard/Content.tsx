/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { adData } from '@utils/dummyData';
import AdCarousal from './AdCarousal';
import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';
import CategoryContainer from './CategoryContainer';
import {
  dairyProducts,
  rollingPaperAndTobacco,
  snacks,
} from '@utils/mockData';
import SingleCategoryContainer from './SingleCategory';
import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '@service/productService';
import { Category } from 'types/categories';

const Content: FC = () => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  return (
    <View style={styles.container}>
      <AdCarousal adData={adData} />
      <View style={{ display: 'flex', gap: 10, position: 'relative' }}>
        <View>
          <CategoryContainer data={categories || []} isLoading={isLoading} />
        </View>
        <View>
          <CustomText variant="h5" fontFamily={Fonts.SemiBold}>
            Dairy, Bread & Eggs
          </CustomText>
          <SingleCategoryContainer data={dairyProducts.slice(0, 8)} />
        </View>
        <View>
          <CustomText variant="h5" fontFamily={Fonts.SemiBold}>
            Rolling paper & tobacco
          </CustomText>
          <SingleCategoryContainer data={rollingPaperAndTobacco.slice(0, 8)} />
        </View>
        <View>
          <CustomText variant="h5" fontFamily={Fonts.SemiBold}>
            Snacks & Munchies
          </CustomText>
          <SingleCategoryContainer data={snacks.slice(0, 8)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    minHeight: 400,
  },
});
export default Content;
