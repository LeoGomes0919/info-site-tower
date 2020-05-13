import styled from 'styled-components/native';

export const MainDetails = styled.View.attrs({
  paddingHorizontal: 16,
})`
  padding: 15px;
  height: 45%;
  border-radius: 8px;
  background: #fff;
  margin: 0 20px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const ContentSiteName = styled.View`
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 5px;
  padding: 5px 10px;
  flex-basis: 50%;
`;

export const LabelName = styled.Text`
  font-size: 16px;
  color: #049ffb;
  font-weight: bold;
`;

export const DataText = styled.Text`
  font-size: 16px;
  color: #666;
  font-weight: bold;
  margin-top: 2px;
`;

export const Actions = styled.View`
  flex-direction: row;
  background: #fff;
  margin: 15px 20px;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;

export const ButtonEdit = styled.TouchableOpacity`
  background: #049ffb;
  padding: 10px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  background: #049ffb;
  padding: 10px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`;

export const TitleButtons = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`;

export const Share = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ShareAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TextShare = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;

export const Span = styled.Text`
  font-weight: bold;
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
