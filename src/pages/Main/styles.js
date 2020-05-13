import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#ffffff', '#e2ebf0', '#DBDBDB', '#EAEAEA'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${50 + getStatusBarHeight(true)}px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.Image``;

export const Text = styled.Text`
  font-size: 18px;
  color: #737380;
`;

export const Span = styled.Text`
  font-weight: bold;
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const Navigation = styled.TouchableOpacity`
  margin-top: 30px;
  padding: 10px;
  background-color: #f4f6f6;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #049ffb;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ContainerList = styled.View`
  padding: 15px;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const TitleDetails = styled.Text`
  font-size: 15px;
  color: #049ffb;
  font-weight: bold;
  margin-right: 2px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InputTextSearch = styled.TextInput.attrs({
  autoCapitalize: 'characters',
  placeholder: 'Buscar site por nome',
  paddingHorizontal: 16,
})`
  border: 1px solid #049ffb;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin-bottom: 15px;
`;
