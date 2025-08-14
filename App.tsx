import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Animated, Linking, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const [isLottieFinished, setIsLottieFinished] = useState(false);

  useEffect(() => {
    if (isLottieFinished) {
      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
        ]).start();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLottieFinished, fadeAnim, slideAnim]);

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/manaY-monoX/expo-mobile-playground');
  };

  return (
    <View style={styles.container}>
      {!isLottieFinished && (
        <View style={styles.animationContainer}>
          <LottieView
            source={require('./assets/lottiefiles/hello-apple.lottie')}
            style={styles.animation}
            autoPlay
            loop={false}
            onAnimationFinish={() => setIsLottieFinished(true)}
          />
        </View>
      )}
      
      {isLottieFinished && (
        <Animated.View
          style={[
            styles.mainContentContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.descriptionText}>
            このアプリはExpo + React Nativeの実機テスト用アプリです。
          </Text>
          
          <TouchableOpacity style={styles.githubButton} onPress={handleGitHubPress}>
            <Text style={styles.githubButtonText}>GitHub Repository</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 300,
    aspectRatio: 1,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  mainContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 30,
  },
  githubButton: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: '#FAFAFA',
  },
  githubButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
});
