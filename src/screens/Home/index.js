import { useTheme } from '@react-navigation/native';
import React, {useRef, useState, useEffect} from 'react';
import { Dimensions, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { strings } from '@/localization';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/style';
import { typography } from '@/theme';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
const {width: screenWidth} = Dimensions.get('window');
import {BackBar} from '@/components/backbar';
import {ExchangeTabs} from '@/components/exchangeTabs';
import {ArticleCard} from '@/components/articleCard';
import { NAVIGATION } from '@/constants';
import { useNavigation } from '@react-navigation/native';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

export function Home({route}) {
  const { colors } = useTheme();
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const exchanges = ['Popular', 'Anime', 'Manga', 'Games', 'Recent'];
  const [tab, setTab] = useState('Popular');
  const navigation = useNavigation();

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity
				onPress={() => handleClick()}
			>
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.1}
          {...parallaxProps}
        />
        <View style={styles.itemIcons}>
          <Text>ereewr</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.subtitle}
        </Text> */}
      </View>
      </TouchableOpacity>
    );
  };
  
  const handleClick = () => {		
		navigation.navigate(NAVIGATION.articleDetails);
	};


  return (
    <SafeAreaView>
      <BackBar 
        backRoute={route.params} 
        text="home"
        Right={() => (
          <View>
            <Text>terte</Text>
          </View>
        )}
        />
      <Carousel 
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth * 0.7}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
      <View>
        <ExchangeTabs tabs={exchanges} setTab={setTab} tab={tab} />
      </View>
      <View>
        <ArticleCard />
      </View>
    </SafeAreaView>
  );
}
