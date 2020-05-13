import styled from 'styled-components/native';

import Plus from '~/assets/plus.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Icon = styled.Image.attrs({source: Plus})`
  width: 26px;
  height: 26px;
`;

export const Img = styled.Image.attrs({source: Plus})`
  width: 50px;
  height: 50px;
`;
export const FloatButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
