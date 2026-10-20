import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
            <Text style={styles.time}>{time}</Text>

        </View>
    );
}