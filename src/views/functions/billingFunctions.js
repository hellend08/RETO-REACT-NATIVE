import * as ImagePicker from 'expo-image-picker';

export const loadCameraPicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(permissionResult.granted === false) {
        alert('Permission to access camera is required');
        return;
    }
    const pickerResult = await ImagePicker.launchCameraAsync()
    console.log(pickerResult);
 };

export const loadImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(permissionResult.granted === false) {
        alert('Permission to access camera is required');
        return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    console.log(pickerResult);
 };
