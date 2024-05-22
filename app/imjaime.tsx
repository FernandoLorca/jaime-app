import { useState } from 'react';
import { Text, View } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native';
import { Audio } from 'expo-av';
import { useJaimeNotificationState } from '@/store/JaimeNotificationState';
import ButtonJaime from '@/components/ButtonJaime';
import YesAndNoButtons from '@/components/YesAndNoButtons';

export default function ImJaime() {
  const setJaimeState = useJaimeNotificationState(state => state.setJaimeState);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  function showNotification() {
    Toast.success('Notificación enviada');
  }

  async function playYesSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio/yes.mp3')
      );
      setSound(sound);

      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }

  async function playNoSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio/no.mp3')
      );
      setSound(sound);

      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }

  async function pushNotification(
    titleNotification: string,
    messageNotification: string
  ) {
    try {
      await fetch('https://app.nativenotify.com/api/notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appId: 21410,
          appToken: 'SX5pafAHTD6VviI8CUf71C',
          title: titleNotification,
          body: messageNotification,
          dateSent: new Date(),
        }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function isPressedHandler(label: string, message: string) {
    setJaimeState({
      notificationState: true,
      notificationLabel: label,
      notificationMessage: message,
    });
    await pushNotification(label, message);
    showNotification();
  }

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
          isPressed={async () => {
            await isPressedHandler('Baño', 'Necesito ir al baño');
          }}
        />
        <ButtonJaime
          label="🥩 Hambre"
          isPressed={async () => {
            await isPressedHandler('Hambre', 'Tengo hambre');
          }}
        />
        <ButtonJaime
          label="🥛 Sed"
          isPressed={async () => {
            await isPressedHandler('Sed', 'Tengo sed');
          }}
        />
        <Text className="pb-2 text-lg">Respuesta:</Text>
        <YesAndNoButtons
          yesAndNoButtons={
            <>
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
            </>
          }
        />
      </View>
    </View>
  );
}
