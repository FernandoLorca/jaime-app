import { StatusBar, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="h-full flex justify-center items-center">
      <Text className="text-3xl">Jaime app</Text>
      <StatusBar />
      <Link
        href="/profile"
        className="text-blue-500"
      >
        Go to profile
      </Link>
    </View>
  );
}
