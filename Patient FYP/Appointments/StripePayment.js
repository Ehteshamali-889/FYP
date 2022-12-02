import * as React from "react";
import { View, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default class StripePayment extends React.Component {
  render() {
    return Platform.OS === "web" ? (
      <iframe src="http://localhost:3000/" height={'100%'} width={'100%'} />
    ) : (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: "http://localhost:3000/" }}
          style={{marginTop: 22, flex: 1}}
        />
      </View>
    )
  }
}