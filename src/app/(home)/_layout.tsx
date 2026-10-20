import { Stack } from "expo-router";

export default function HomeStackLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Dashboard' }} />
            <Stack.Screen name="details" options={{ title: 'My ID Card'}} />
        </Stack>
    )
}