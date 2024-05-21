import { useState } from 'react';
import { Text, View } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native';
import { Audio } from 'expo-av';
import { useJaimeNotificationState } from '@/store/JaimeNotificationState';
import ButtonJaime from '@/components/ButtonJaime';

export default function ImJaime() {
  const setJaimeState = useJaimeNotificationState(state => state.setJaimeState);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const showNotification = () => {
    Toast.success('Notificación enviada');
  };

  const playYesSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio/yes.mp3')
      );
      setSound(sound);

      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const playNoSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio/no.mp3')
      );
      setSound(sound);

      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="h-full flex pt-20 bg-slate-200 px-5">
      <ToastManager />
      <Text className="font-bold text-4xl text-slate-950">Hola Jaime 👋</Text>
      <Text className="text-2xl text-slate-950 mb-10">
        Envia una notificación 🔔
      </Text>
      <View>
        <Text className="pb-2 text-lg">Notificaciones:</Text>
        <ButtonJaime
          label="🚽 Baño"
          isPressed={() => {
            setJaimeState({
              notificationState: true,
              notificationLabel: 'Baño',
              notificationMessage: 'Necesito ir al baño',
            });
            showNotification();
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
            showNotification();
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
            showNotification();
          }}
        />
        <Text className="pb-2 text-lg">Respuesta:</Text>
        <View className="flex flex-row justify-between">
          <ButtonJaime
            label="✔️ Sí"
            isPressed={() => {
              playYesSound();
            }}
          />
          <ButtonJaime
            label="❌ No"
            isPressed={() => {
              playNoSound();
            }}
          />
        </View>
      </View>
    </View>
  );
}
