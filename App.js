import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { WebView } from "react-native-webview";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function App() {
  // https://www.web3rtc.com/

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        domStorageEnabled={true}
        cacheEnabled={true}
        originWhitelist={["*"]}
        source={{ uri: "https://www.web3rtc.com/" }}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
      />
    </SafeAreaView>
  );
}
