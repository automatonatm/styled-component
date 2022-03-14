import styled, {css} from 'styled-components'

import PropTypes from  'prop-types'


const LargeStyle = ({large}) => {
  if(large) {
   return  css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5rem;
    `
  }else {
   return  css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1rem;
    `
  }
}

const Button = styled.button`
  color: white;
  background: ${(props) => props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;
  ${LargeStyle};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  margin: 8px 0;
  
  &:disabled {
    background: #eee;
    color: #666;
  }
  
`;

Button.propTypes = {
    large: PropTypes.bool,
    secondary: PropTypes.bool
}

export {Button};