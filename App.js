/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { connect } from "react-redux";

import ListItem from "./src/component/ListItem/ListItem";
import PlaceInput from "./src/component/PlaceInput/PlaceInput";
import PlaceList from "./src/component/PlaceList/PlaceList";
import PlaceDetail from "./src/component/PlaceDetail.js/PlaceDetail";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";

class App extends Component<Props> {
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
    console.log("Place added");
  };

  placeAddHandler = placeName => {
    if (placeName.trim() === "") return;

    this.props.onAddPlace(placeName);
    console.log("Place added");
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalCloseHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalCloseHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
