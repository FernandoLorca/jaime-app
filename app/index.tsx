import { Button, StatusBar, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="h-full flex pt-40 bg-slate-200 px-5">
      <Text className="text-4xl text-slate-950 mb-5">Bienvenido a</Text>
      <Text className="text-6xl font-robotoBold text-slate-950">
        Jaime app 👋
      </Text>
      <View className="flex flex-row gap-5 pt-20">
        <Link
          href="/imjaime"
          className="text-center bg-blue-950 text-white text-3xl p-12 mt-5 rounded-xl border-4 border-blue-900"
        >
          Soy Jaime
        </Link>
        <Link
          href="/imnotjaime"
          className="text-center bg-blue-950 text-white text-3xl p-12 mt-5 rounded-xl border-4 border-blue-900"
        >
          No soy Jaime
        </Link>
      </View>
      <StatusBar />
    </View>
  );
}
