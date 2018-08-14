import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CELL_WIDTH } from "../../utils/constants";

const CellBase = ({ className, children, validMove, ...rest }) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

CellBase.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  validMove: PropTypes.bool
};

CellBase.defaultProps = {
  className: "",
  validMove: false
};

const Cell = styled(CellBase)`
  width: ${CELL_WIDTH}px;
  height: ${CELL_WIDTH}px;
  border: solid 2px ${({ validMove }) => (validMove ? "red" : "transparent")};
`;

export default Cell;
