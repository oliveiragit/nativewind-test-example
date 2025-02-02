import { Text, View } from 'react-native';

const BlackViewWhiteText = () => {
  return (
    <View testID="black-view" className="flex-1 items-center justify-center self-stretch bg-black">
      <Text className="text-white">white text</Text>
    </View>
  );
};

export { BlackViewWhiteText };
