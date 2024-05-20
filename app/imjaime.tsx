import ButtonJaime from '@/components/ButtonJaime';
import { Text, View } from 'react-native';

export default function ImJaime() {
  return (
    <View className="h-full flex pt-20 bg-slate-200 px-5">
      <Text className="font-bold text-4xl text-slate-950 mb-10">
        Hola Jaime 👋
      </Text>
      <View className="flex flex-col">
        <ButtonJaime label="✔️ Sí" />
        <ButtonJaime label="❌ No" />
        <ButtonJaime label="🚽 Baño" />
        <ButtonJaime label="🥩 Hambre" />
        <ButtonJaime label="🥛 Sed" />
      </View>
      <View className="flex flex-row"></View>
      <View></View>
    </View>
  );
}
