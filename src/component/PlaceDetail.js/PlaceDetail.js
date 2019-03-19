import React from "react";
import {
  View,
  Modal,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          style={styles.placeImage}
          source={props.selectedPlace ? props.selectedPlace.image : null}
        />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={props.onModalClosed}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={props.onItemDeleted}
          >
            <Icon size={30} name="trash" color="red" />
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 40,
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default PlaceDetail;