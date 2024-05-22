import { View } from 'react-native';

interface YesAndNoButtonsProps {
  yesAndNoButtons: JSX.Element;
}

export default function YesAndNoButtons({
  yesAndNoButtons,
}: YesAndNoButtonsProps) {
  return (
    <View className="flex flex-row justify-between">{yesAndNoButtons}</View>
  );
}
