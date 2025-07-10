import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <AntDesign name="heart" size={24} color="white" />
      <FontAwesome name="bookmark" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "rgba(77, 20, 0, 0.9)", // orange-950/90
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 10,
  },
});

export default Footer;
