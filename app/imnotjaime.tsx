import { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useJaimeNotificationState } from '@/store/JaimeNotificationState';
import ButtonJaime from '@/components/ButtonJaime';

interface JaimeLabels {
  [key: string]: string;
}

export default function ImNotJaime() {
  const [label, setLabel] = useState<string>('');
  const jaimeState = useJaimeNotificationState(state => state.jaimeState);
  const setJaimeState = useJaimeNotificationState(state => state.setJaimeState);

  const jaimeLabels: JaimeLabels = {
    Baño: '🚽',
    Hambre: '🥩',
    Sed: '🥛',
  };

  useEffect(() => {
    for (const label in jaimeLabels) {
      if (label === jaimeState.notificationLabel) {
        setLabel(jaimeLabels[label]);
      }
    }
  }, []);

  return (
    <View className="h-full flex flex-col items-center pt-20 bg-slate-200 px-5">
      <Text className="font-bold text-4xl text-slate-950">No eres Jaime.</Text>
      <Text className="text-2xl text-slate-950 mb-10">
        Espera las notificaciones 🔔
      </Text>
      {jaimeState.notificationState && (
        <>
          <View className="w-[400px] h-[400px] flex flex-col items-center justify-center bg-blue-950 border-2 border-blue-900 mt-12 rounded-2xl">
            <Text className="text-7xl font-bold pt-5 text-white">👨‍🦳🔔</Text>
            <Text className="text-5xl font-bold mt-5 text-white">Jaime</Text>
            <Text className="text-2xl text-white">Envió notificacion:</Text>
            <Text className="text-3xl pt-10 font-bold text-white">
              {jaimeState.notificationMessage}
            </Text>
            <Text className="text-7xl pt-5">
              {label === '🥩' ? `${label}as` : label}
            </Text>
          </View>
          <View className="mt-5">
            <Button
              title="Limpiar notificación"
              onPress={() => {
                setJaimeState({
                  notificationState: false,
                  notificationLabel: '',
                  notificationMessage: '',
                });
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}
