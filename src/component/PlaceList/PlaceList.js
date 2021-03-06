import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => {
        return (
          <ListItem
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPressed={() => props.onItemSelected(info.item.key)}
          />
        );
      }}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
