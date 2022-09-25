import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [key, setKey] = useState("");
    const [text, setText] = useState("");
    const [encrypted, setEncrypted] = useState("");
    var CryptoJS = require("crypto-js");

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Key:
            </Text>
            <TextInput
                style={{borderWidth: 1, borderColor: "black", width: 200, height: 40}}
                onChangeText={(e) => setKey(e)}
                value={key}
            />


            <Text>
                Message:
            </Text>
            <TextInput
                multiline={true}
                style={{borderWidth: 1, borderColor: "black", width: "95%", height: "30%"}}
                onChangeText={(e) => {
                    setText(e)
                    setEncrypted(CryptoJS.AES.encrypt(e, key).toString())
                }}
                value={text}
            />

            <Text>
                converted:
            </Text>
            <TextInput
                multiline={true}
                style={{borderWidth: 1, borderColor: "black", width: "95%", height: "30%"}}
                onChangeText={(e) => console.log("hi")}
                value={encrypted}
            />
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
);
