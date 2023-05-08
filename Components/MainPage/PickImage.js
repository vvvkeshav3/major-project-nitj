import React, { useState, useEffect } from 'react';
import {
  Button,
  Image,
  Text,
  View,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { PermissionStatus } from 'expo-image-picker';
import { wp,hp } from '../Viewport';
export default function PickImage() {
  const [galleryPermissionInfo, requestGalleryPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const [cameraPermissionInfo, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const [image, setImage] = useState(null);

  const verifyCameraPermission = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permission!',
        'You need to grant camera access to use this feature'
      );
      return false;
    }
    return true;
  };
  const verifyGalleryPermission = async () => {
    if (galleryPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestGalleryPermission();
      return permissionResponse.granted;
    }
    if (galleryPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permission!',
        'You need to grant gallery access to use this feature'
      );
      return false;
    }
    return true;
  };
  const galleryPressHandler = async () => {
    const hasPermission = await verifyGalleryPermission();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!image.canceled) {
      setImage(image.assets[0].uri);
    }
  };
  const cameraPressHandler = async () => {
    const hasPermission = await verifyCameraPermission();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!image.canceled) {
      setImage(image.assets[0].uri);
    }
  };

  let imagePreview = <Text>No image taken yet</Text>;

  if (image) {
    imagePreview = <Image source={{ uri: image }} style={styles.imageStyle} />;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={galleryPressHandler} style={styles.btn}>
        <Text style={styles.btnText}>Pick Image</Text>
      </Pressable>
      <Pressable onPress={cameraPressHandler} style={styles.btn}>
        <Text style={styles.btnText}>Use Camera</Text>
      </Pressable>

      {image && (
        <Image source={{ uri: image }} style={{ height: 40, width: 40 }} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  imageStyle: {},
  container: {
    marginTop: 100,
    margin: 10,
    flexDirection:'column',
    justifyContent:'center',
  
    alignItems:'center'
  },
  btn: {
    borderWidth: 2,
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:20,
    padding:10,
    width:wp(80),
    margin:'auto',
  },
  btnText:{
    fontSize:20,

  }
});
