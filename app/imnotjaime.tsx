import { Text, View } from 'react-native';

export default function ImNotJaime() {
  return (
    <View className="h-full flex pt-20 bg-slate-200 px-5">
      <Text className="font-bold text-4xl text-slate-950">No eres Jaime.</Text>
      <Text className="text-2xl text-slate-950 mb-10">
        Espera las notificaciones 🔔
      </Text>
    </View>
  );
}
