import { create } from 'zustand';

interface JaimeNotificationState {
  jaimeState: {
    notificationState: boolean;
    notificationLabel: string;
    notificationMessage: string;
  };
  setJaimeState: (state: Partial<JaimeNotificationState['jaimeState']>) => void;
}

export const useJaimeNotificationState = create<JaimeNotificationState>(
  set => ({
    jaimeState: {
      notificationState: false,
      notificationLabel: '',
      notificationMessage: '',
    },
    setJaimeState: (state: Partial<JaimeNotificationState['jaimeState']>) =>
      set((prevState: JaimeNotificationState) => ({
        jaimeState: { ...prevState.jaimeState, ...state },
      })),
  })
);
