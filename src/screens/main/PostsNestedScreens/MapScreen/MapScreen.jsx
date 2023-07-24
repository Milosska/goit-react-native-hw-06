import MapView, { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import styles from "./MapScreen.styles";

const MapScreen = ({ route: { params } }) => {
  const { decoded, latitude, longitude } = params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
    </View>
  );
};

export default MapScreen;
