import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ClockScreen() {
    const[time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().toLocaleTimeString();
            setTime(now);
            console.log("Background Task Running:", now);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Background Service Test</Text>
            <Text style={styles.timeText}>{time}</Text>
            <Text style={styles.subtext}>Check your terminal to see the background logs!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
    header: { color: 'white', fontSize: 20, marginBottom: 10 },
    timeText: {color:'#00ff00', fontSize: 40, fontWeight: 'bold' },
    subtext: { color: 'gray', marginTop: 20, fontSize: 12 }
});