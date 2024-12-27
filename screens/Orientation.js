import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Orientation() {
  const [orientation, setOrientation] = useState("Unknown");

  const startListeningToOrientation = async () => {
    await ScreenOrientation.addOrientationChangeListener(orientationListener);
    console.log(`${Platform.OS} started listening for orientation changes`);
  };

  const unlockOrientation = () => {
    console.log("Unlock orienation");
    ScreenOrientation.unlockAsync();
  };

  const orientationListener = (o) => {
    console.log(
      `🔔 ${Platform.OS} orientation changed to: ${o.orientationInfo.orientation}`
    );
    setOrientation(o.orientationInfo.orientation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Orientation:</Text>
      <Text style={styles.orientation}>{orientation}</Text>
      <TouchableOpacity
        style={styles.touchOpNav}
        onPress={() => unlockOrientation()}
      >
        <Text style={styles.txtTouchOpNav}>Unlock Orientation </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchOpNav}
        onPress={() => startListeningToOrientation()}
      >
        <Text style={styles.txtTouchOpNav}>Listen for Orientation </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  orientation: {
    fontSize: 32,
    marginTop: 20,
    color: "#007AFF",
  },
  touchOpNav: {
    backgroundColor: "black",
    padding: 5,
    width: 250,
    borderRadius: 12,
    marginBottom: 1,
  },
  txtTouchOpNav: {
    color: "gray",
    alignSelf: "center",
    fontSize: 20,
  },
});
