import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.haloEffect}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>宇宙最強の完璧なアプリ</Text>
        <Text style={styles.powerLevel}>戦闘力: 530,000</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0040',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  haloEffect: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(138, 43, 226, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(186, 85, 211, 0.3)',
    shadowColor: '#BA55D3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#E6E6FA',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#9370DB',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 20,
    color: '#DDA0DD',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  powerLevel: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: '#FF8C00',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
