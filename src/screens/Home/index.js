import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, Text, View, TouchableOpacity, useColorScheme, FlatList, Image, ImageBackground, ScrollView } from 'react-native';
import { styles } from '@/screens/Home/style';
import { Theme, typography } from '@/theme';
import { BackBar } from '@/components/backbar';
import { ExchangeTabs } from '@/components/exchangeTabs';
import { ArticleCard } from '@/components/articleCard';
import { NAVIGATION } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { BookIcon, ColorArchiveIcon, FilterIcon, MessageBlackIcon, MoreIcon, SearchIcon } from '@/utils/icons';
import { Avatar } from '@/components/avatar';
import { SafeAreaView } from 'react-native-safe-area-context';

const ENTRIES1 = [
  {
    title: 'Attack On Titan’s Eren Yeager Is Now Anime’s Most Intersting Portagonist',
    authorName: 'Eren Jaeger',
    authorId: '@AttackTitan',
    url: require('@/assets/images/article.png'),
  },
  {
    title: 'This is just an example for the file please ignore.',
    authorName: 'Eren Jaeger',
    authorId: '@AttackTitan',
    url: require('@/assets/images/article.png'),
  },
];

export function Home({ route }) {
  const colorTheme = useColorScheme();
  const theme = Theme[colorTheme];
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

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={styles.item}
        key={item.authorId}
      >
        <Image
          source={item.url}
          style={[styles.image,]}
        />
        <TouchableOpacity style={styles.leftIcon}>
          <ColorArchiveIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightIcon}>
          <MoreIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.titleContainer, { height: theme.dimentions.width * 0.45, width: theme.dimentions.width * 0.7 }]}
          onPress={() => handleClick()}
        >
          <Text style={[styles.title, theme.styles.regular]}>
            {item.title}
          </Text>
          <View style={styles.author}>
            <Avatar />
            <Text style={[styles.authorName, theme.styles.minicaps]}>{item.authorName}</Text>
            <Text style={[styles.authorId, theme.styles.minicaps]}>{item.authorId} . 2h</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const handleClick = () => {
    navigation.navigate(NAVIGATION.articleDetails);
  };


  return (
    <SafeAreaView edges={['left', 'right', 'top']}>
      <ScrollView>
        <BackBar
          backRoute={route.params}
          text=""
          Right={() => (
            <View style={styles.backBar}>
              <TouchableOpacity style={styles.backBarIcon}>
                <BookIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.backBarIcon}>
                <MessageBlackIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.backBarIcon}>
                <SearchIcon />
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.headerContainer}>
          <Text style={[styles.header, theme.styles.headline]}>Trending News</Text>
          <TouchableOpacity>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={entries}
            renderItem={renderItem}            
          // style={{ width: theme.dimentions.width, height: theme.dimentions.width }}
          />
        </View>

        <View style={{width: theme.dimentions.width}}>
          <ExchangeTabs tabs={exchanges} setTab={setTab} tab={tab} />
        </View>
        <View style={styles.newsItems}>
          {/* <FlatList renderItem={<ArticleCard/>}/> */}
          <ArticleCard />
          <ArticleCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
