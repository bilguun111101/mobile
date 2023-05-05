import {View, StyleSheet} from 'react-native';

interface Props {
  body: JSX.Element;
}

export const HeaderContent = ({body}: Props) => {
  return (
    <View className="px-5 py-4 bg-white z-10" style={shadow.header}>
      {body}
    </View>
  );
};

export const shadow = StyleSheet.create({
  header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
