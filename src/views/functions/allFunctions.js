// import React, {useState} from 'react';
// import { Button, TextInput, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';




// export default function addExperience() {
    

//     const [title, setTitle] = useState('');

//     function handleSubmit() {
//         console.log(title);
//     }

//     return (
//         <View>
//              <View>
//                 <TextInput onChange={text => setTitle(text)} />
//             </View>
//             <Button onPress={handleSubmit} title={'añadir'}/>
//         </View> 
  
//     );
// };

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

