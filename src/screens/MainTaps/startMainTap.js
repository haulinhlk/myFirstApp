import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("map", 30),
    Icon.getImageSource("share", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: "awesome-places.FindPlaceScreen",
                      passProps: {
                        text: "This is tab 1"
                      },
                      options: {
                        topBar: {
                          title: {
                            text: "Find Place"
                          }
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Tab 1",
                    testID: "FIRST_TAB_BAR_BUTTON",
                    icon: sources[0]
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: "awesome-places.SharePlaceScreen",
                      passProps: {
                        text: "This is tab 1"
                      },
                      options: {
                        topBar: {
                          title: {
                            text: "Share Place"
                          }
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: "Tab 2",
                    testID: "SECONDS_TAB_BAR_BUTTON",
                    icon: sources[1]
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};

export default startTabs;
