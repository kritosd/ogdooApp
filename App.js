import React from 'react';
import WebView from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const SiteUrl = 'http://www.ogdoo.gr';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{padding: 30 }}/>
      <StatusBar style="auto" />
      <View style={{ width: '100%', height: '100%' }}>
        <WebView
          ref={(ref) => { this.webviewRef = ref; }}
          source={{ uri: SiteUrl }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
