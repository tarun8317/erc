// SPDX-License-Identifier: unlicensed

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HREToken is ERC20, Ownable {
    constructor() ERC20("HRE Token", "HRE") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function burn(uint256 amount) public onlyOwner {
        _burn(msg.sender, amount);
    }
}
