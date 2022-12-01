import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, Text, View, TouchableOpacity, ImageBackground, ScrollView, useColorScheme } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '@/theme';
import { styles } from './style';
import { ArchiveIcon, HeartIcon, LeftArrowWhiteIcon, MessageWhiteIcon, RepeatIcon } from '@/utils/icons';
import { Avatar } from '@/components/avatar';
import {useNavigation} from '@react-navigation/core';

export const ArticleDetails = ({ route }) => {
    const colorTheme = useColorScheme();
    const theme = Theme[colorTheme];
    const navigation = useNavigation();

    return (
        <SafeAreaView edges={['left', 'right',]}>
            <ScrollView >
                <View style={{ width: theme.dimentions.width, height: theme.dimentions.height * 0.5, }}>
                    <ImageBackground source={require('@/assets/images/article.png')} resizeMode='cover' style={styles.imageContainer}>
                        <View style={styles.imageButtons}>
                            <TouchableOpacity style={[styles.iconContainer, { backgroundColor: '#FFFFFF33' }]} 
                                onPress={() => navigation.goBack()}
                            >
                                <LeftArrowWhiteIcon />
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity style={[styles.iconContainer, { backgroundColor: '#FFFFFF1A' }]}>
                                    <ArchiveIcon />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.iconContainer, { backgroundColor: '#FFFFFF1A' }]}>
                                    <HeartIcon />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.iconContainer, { backgroundColor: '#FFFFFF1A' }]}>
                                    <MessageWhiteIcon />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.iconContainer, { backgroundColor: '#FFFFFF1A' }]}>
                                    <RepeatIcon />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.title, theme.styles.title]}>Attack On Titan’s Eren Yeager Is Now Anime’s Most Intersting Protagonist</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={[styles.bodyContainer, { height: theme.dimentions.height * 0.6, }]}>
                    <View style={styles.authorContainer}>
                        <View style={styles.author}>
                            <Avatar />
                            <Text style={[styles.autorTitle, theme.styles.subheading]}>by Eren Jaeger</Text>
                        </View>
                        <Text style={[styles.date, theme.styles.regular]}>Wed, Oct 5 2022</Text>
                    </View>
                    <View >
                        <Text style={[styles.subTitle, theme.styles.subheading]}>
                            Why Eren Yeager Is Insane....
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.description, theme.styles.smallreg]}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.description, theme.styles.smallreg]}>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.description, theme.styles.smallreg]}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
