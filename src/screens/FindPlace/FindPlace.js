import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import PlaceList from "../../component/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
