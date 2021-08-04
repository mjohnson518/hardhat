//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Dalek {
  uint256 public x;

  constructor(uint256 _x) {
    x = _x;
  }

  function changeX(uint256 _x) public {
    x = _x;
  }


}
