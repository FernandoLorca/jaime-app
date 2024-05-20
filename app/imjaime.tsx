import { Text, View } from 'react-native';
import { useJaimeNotificationState } from '@/store/JaimeNotificationState';
import ButtonJaime from '@/components/ButtonJaime';

export default function ImJaime() {
  const setJaimeState = useJaimeNotificationState(state => state.setJaimeState);

  return (
    <View className="h-full flex pt-20 bg-slate-200 px-5">
      <Text className="font-bold text-4xl text-slate-950">Hola Jaime 👋</Text>
      <Text className="text-2xl text-slate-950 mb-10">
        Elige una notificaciones 🔔
      </Text>
      <View>
        <ButtonJaime
          label="🚽 Baño"
          isPressed={() => {
            setJaimeState({
              notificationState: true,
              notificationLabel: 'Baño',
              notificationMessage: 'Necesito ir al baño',
            });
          }}
        />
        <ButtonJaime
          label="🥩 Hambre"
          isPressed={() => {
            setJaimeState({
              notificationState: true,
              notificationLabel: 'Hambre',
              notificationMessage: 'Tengo hambre',
            });
          }}
        />
        <ButtonJaime
          label="🥛 Sed"
          isPressed={() => {
            setJaimeState({
              notificationState: true,
              notificationLabel: 'Sed',
              notificationMessage: 'Tengo sed',
            });
          }}
        />
        <View className="flex flex-row justify-between">
          <ButtonJaime label="✔️ Sí" />
          <ButtonJaime label="❌ No" />
        </View>
      </View>
    </View>
  );
}
