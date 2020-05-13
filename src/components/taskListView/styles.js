import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
`;

export const HeaderContainer = styled.View`
  margin: 25px 0px 15px;
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  background-color: silver;
  border-radius: 25px;
`;

export const HeaderTagContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 25px;
  height: 35px;
  width: 35px;
`;

export const HeaderTagText = styled.Text`
  color: white;
  font-size: 22px;
`;

export const HeaderText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
`;

export const ItemContainer = styled.View`
  /* flex: 1; */
  flex-direction: column;
  background-color: #f3f2f0;
  margin-top: 5px;
  padding: 10px;
  height: 75px;
`;

export const ItemTextTitle = styled.Text`
  font-size: 22px;
`;
export const ItemText = styled.Text``;

export const Touchable = styled.TouchableOpacity``;
