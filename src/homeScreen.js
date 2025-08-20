import React from "react";
import { View, Text, Button } from "react-native"; // sem espaço + adiciona Button
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCam = () => {
    navigation.navigate("Cam");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Abrir Camera" onPress={handleCam} color="blue" />
    </View>
  );
};

export default HomeScreen;
