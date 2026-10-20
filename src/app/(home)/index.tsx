import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen(){
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Welcome, Student!</Text>

            <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={() => router.push('/(home)/details')}>
                <Text style={styles.buttonText}>View My Digital ID Card</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f0f4f8' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 250 , marginTop: 40, textAlign: 'center'},
    button: { backgroundColor: 'blue', padding: 15, borderRadius: 10, alignItems: 'center'},
    buttonPressed: { opacity: 0.6 },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});