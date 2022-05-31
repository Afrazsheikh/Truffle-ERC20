// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


 contract afz is ERC20 { 
    
   constructor(uint256 _supply) ERC20("afz", "AZ")  {
        _mint(msg.sender, _supply * ( 10 ** decimals()));
}
 }

 