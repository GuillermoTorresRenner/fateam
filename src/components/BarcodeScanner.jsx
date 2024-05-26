import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraOpen, setCameraOpen] = useState(true); // Nuevo estado para controlar si la cámara está abierta

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // Función para manejar el escaneo de códigos de barras
  function handleBarcodeScanned(read) {
    console.log("Type: ", read.type, " Data: ", read.data);
    setCameraOpen(false); // Cierra la cámara después de escanear un código de barras
  }

  return (
    <View style={styles.container}>
      {cameraOpen && ( // Solo muestra la cámara si cameraOpen es true
        <CameraView
          style={styles.camera}
          facing={facing}
          onBarcodeScanned={handleBarcodeScanned}
          barcodeScannerSettings={{ barcodeTypes: ["qr", "aztec", "codabar"] }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>
                {facing === "back" ? "Cámara Delantera" : "Cámara Trasera"}
              </Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
};

// ... el resto del código ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default Login;
