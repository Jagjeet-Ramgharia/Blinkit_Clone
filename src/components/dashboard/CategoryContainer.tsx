/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import ScalePress from '@components/ui/ScalePress';
import { Colors, Fonts } from '@utils/Constants';
import { useNavigation } from '@react-navigation/native';
import CustomText from '@components/ui/CustomText';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { screenWidth } from '@utils/Scaling';

const SkeletonLoader = () => {
  const cardWidth = (screenWidth - 80) / 4;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 12,
        },
      ]}>
      {[...Array(12)].map((_, index) => (
        <ContentLoader
          key={index}
          speed={1.5}
          width={cardWidth}
          height={120}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.border,
          }}>
          <Rect width={cardWidth} height={'100%'} />
        </ContentLoader>
      ))}
    </View>
  );
};

const CategoryContainer: FC<{ data: any; isLoading: boolean }> = ({
  data,
  isLoading,
}) => {
  const navigation = useNavigation<any>();
  const renderItems = (items: any[]) => {
    return (
      <>
        {items.map((item, index) => {
          return (
            <ScalePress
              key={index}
              style={styles.item}
              onPress={() =>
                navigation.navigate('ProductCategories', { category: item })
              }>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.image || item.image_url }}
                  style={styles.image}
                />
              </View>
              {item.name && (
                <CustomText
                  style={styles.text}
                  variant="h9"
                  fontFamily={Fonts.Medium}>
                  {item.name}
                </CustomText>
              )}
            </ScalePress>
          );
        })}
      </>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <View style={styles.row}>{renderItems(data)}</View>
      )}
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
  text: {
    textAlign: 'center',
    color: Colors.text,
  },
  item: {
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  imageContainer: {
    width: '100%',
    height: 116,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});
export default CategoryContainer;
