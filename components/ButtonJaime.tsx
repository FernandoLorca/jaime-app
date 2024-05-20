import { Pressable, Text } from 'react-native';
import { styled } from 'nativewind';

interface ButtonJaimeProps {
  label: string;
  isPressed?: () => void;
}

const CustomButton = styled(Pressable);

export default function ButtonJaime({ label, isPressed }: ButtonJaimeProps) {
  return (
    <CustomButton
      className="bg-blue-950 p-5 rounded-xl border-4 border-blue-900 mb-5"
      onPress={() => isPressed && isPressed()}
    >
      <Text className="text-center text-white text-3xl">{label}</Text>
    </CustomButton>
  );
}
