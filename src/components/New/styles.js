import styled from 'styled-components/native';

export const Form = styled.View.attrs({
  paddingHorizontal: 20,
})`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InputName = styled.TextInput`
  height: 50px;
  width: 100%;
  padding-left: 6px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

export const InputText = styled.TextInput`
  height: 50px;
  width: 50%;
  padding-left: 6px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
`;

export const Button = styled.TouchableOpacity.attrs({
  marginHorizontal: 16,
})`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  background: #049ffb;
  padding: 10px;
  border-radius: 8px;
`;

export const TitleButton = styled.Text`
  color: #fff;
  margin-right: 5px;
  font-size: 20px;
`;

export const Navigation = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: #049ffb;
  font-size: 16px;
  margin-left: 5px;
`;
