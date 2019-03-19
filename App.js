import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import configureStore from "./src/store/configureStore";

const store = configureStore();

//Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => props => (
    <Provider store={store}>
      <AuthScreen {...props} />
    </Provider>
  ),
  () => AuthScreen
);

Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => props => (
    <Provider store={store}>
      <FindPlaceScreen {...props} />
    </Provider>
  ),
  () => FindPlaceScreen
);

Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => props => (
    <Provider store={store}>
      <SharePlaceScreen {...props} />
    </Provider>
  ),
  () => SharePlaceScreen
);

// Start App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "awesome-places.AuthScreen",
              passProps: {
                text: "stack with one child"
              },
              topBar: {
                title: {
                  text: "Login"
                }
              }
            }
          }
        ]
      }
    }
  });
});
