import { useTheme } from '@react-navigation/native';
import React, {useRef, useState, useEffect} from 'react';
import { Dimensions, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { strings } from '@/localization';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/style';
import { typography } from '@/theme';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';


const {width: screenWidth} = Dimensions.get('window');
const {height: screenHeight} = Dimensions.get('window');

export const ArticleDetails = ({route}) => {
  const { colors } = useTheme();
    
  return (
    <SafeAreaView edges={['left', 'right']} style={{flex: 1}}>
        <ScrollView>
        <View style={{height: screenHeight * 0.5, width: screenWidth, backgroundColor: 'red'}}>
            <ImageBackground source={{url: 'https://i.imgur.com/UPrs1EWl.jpg'}} resizeMode='cover' style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 60,}}>
                    <View><Text>tet</Text></View>
                    <View>
                        <Text>ere</Text>
                        <Text>ere</Text>
                        <Text>werwe</Text>
                    </View>
                </View>
                <View>
                    <Text>tertewerewr</Text>
                </View>
            </ImageBackground>
        </View>
        <View style={{backgroundColor: 'white', height: screenHeight *0.6, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30}}>
            <Text>tertet</Text>
        </View>   
        </ScrollView>
    </SafeAreaView>
  );
}
