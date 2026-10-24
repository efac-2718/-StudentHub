import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} />
        }}
      />

      <Tabs.Screen
        name="clock"
        options={{
          title: 'Live Clock',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clock" color={color} size={24} />
        }}
      />
    </Tabs>
  );
}

