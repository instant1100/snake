import styled from 'styled-components';

export const CellStyles = styled.div`
  width: 20px;
  height: 20px;
  margin: 1px;
  background: #757575;
`;

export const SnakeCellStyles = styled(CellStyles)`
  background: #000000;
`;

export const AppleCellStyles = styled(CellStyles)`
  background: #00a40f;
`;

export const RowStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldStyles = styled.div`
  display: flex;
  flex-direction: row;
`;
