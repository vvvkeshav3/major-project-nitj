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
import axios from 'axios';
import { PermissionStatus } from 'expo-image-picker';
import { wp, hp } from '../Viewport';
export default function PickImage(props) {
  const [galleryPermissionInfo, requestGalleryPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const [cameraPermissionInfo, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  // const [image, setImage] = useState(null);
  // const [dataLoadedImage, setDataLoadedImage] = useState(null);
  // // const [isVisible, setIsVisible] = useState(true);

  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState('');
  // const [dataLoaded, setDataLoaded] = useState(false);

  // const uploadImageHandler = async () => {
  //   console.log('Sending Image to Server');
  //   console.log(image);
  //   try {
  //     setIsLoading(true);
  //     let data = new FormData();
  //     data.append('file', {
  //       uri: image.uri,
  //       name: `photo.jpg`,
  //       type: image.type,
  //     });
  //     // data.append('Content-Type','image/jpg')
  //     const url = 'http://192.168.0.3:5000/segmentImage';
  //     let res = await axios.post(url, data, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log(res);
  //     setData(res.data.res);
  //     setImage(null);
  //     // const bckend_data = await axios.post(url, data, {
  //     //   headers: {
  //     //     'Content-Type': 'multipart/form-data',
  //     //   },
  //     // });
  //     // console.log(bckend_data);
  //     // setData(bckend_data.data.result);
  //     setDataLoaded(true);
  //     setIsLoading(false);
  //     // console.log(bckend_data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setIsLoading(false);
  // };

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
      props.onChange(image.assets[0]);
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
      props.onChange(image.assets[0]);
    }
  };

  // let imagePreview = <Text>No image taken yet</Text>;

  // if (image) {
  //   imagePreview = <Image source={{ uri: image }} style={styles.imageStyle} />;
  // }
  // let imagePath =
  //   dataLoaded && !isLoading ? require(`../../assets/output/photo.jpg`) : '';
  return (
    <View style={styles.container}>
      <Pressable onPress={galleryPressHandler} style={styles.btn}>
        <Text style={styles.btnText}>Pick Image</Text>
      </Pressable>
      <Pressable onPress={cameraPressHandler} style={styles.btn}>
        <Text style={styles.btnText}>Use Camera</Text>
      </Pressable>
      {/* {image && (
        <Pressable onPress={uploadImageHandler} style={styles.btn}>
          <Text style={styles.btnText}>Upload Image</Text>
        </Pressable>
      )}
      {image && <Image source={{ uri: image.uri }} style={styles.imageStyle} />}
      {dataLoaded && !isLoading && (
        <Image source={imagePath} style={styles.imageStyle} />
      )} */}
    </View>
  );
}
const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
  },
  container: {
    // marginTop: 100,
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
  },
  btn: {
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    width: wp(80),
    margin: 'auto',
  },
  btnText: {
    fontSize: 20,
  },
});
