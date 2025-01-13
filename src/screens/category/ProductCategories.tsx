/* eslint-disable react-hooks/exhaustive-deps */
import { View, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import React, { FC } from 'react';
import CustomHeader from '@components/ui/CustomHeader';
import { Colors } from '@utils/Constants';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import withCart from '../../screens/cart/WithCart';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllCategories, getProductsByCategory } from '@service/productService';
import { Product } from 'types/product';

const ProductCategories: FC = ({ route }: any) => {
  const { category } = route.params;
  const { data: categoriesList, isLoading: categoriesLoading } = useQuery<any>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  const useFetchProducts = useMutation<Product[], Error, string>({
    mutationFn: (categoryId: string) => getProductsByCategory(categoryId),
  });

  React.useLayoutEffect(() => {
    if (category) {
      useFetchProducts.mutate(category?.id);
    }
  }, [category]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader title={'Categories'} search />
      <View style={styles.subContainer}>
        {categoriesLoading ? (
          <View style={styles.loaderStyles}>
            <ActivityIndicator size="small" color={Colors.border} />
          </View>
        ) : (
          <Sidebar
            defaultCategory={category}
            categories={categoriesList}
            onCategoryPress={(selectedCategory: any) => {
              useFetchProducts.mutate(selectedCategory?.id);
            }}
          />
        )}
        {useFetchProducts.isPending ? (
          <ActivityIndicator
            size="large"
            color={Colors.border}
            style={styles.center}
          />
        ) : (
          <ProductList data={(useFetchProducts.data as []) || []} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  loaderStyles: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withCart(ProductCategories);
