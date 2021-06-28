/**
 * This smart contract allows addresses to donate ether to a designated address.
 * The receiving address is changeable, but only the receiving address can
 * choose to accept donations.
*/

pragma solidity ^0.8.6;

contract Donation {
    address payable private receiverAddress;
    string public receiverName;
    uint public totalDonations;
    uint public minimumDonation;

    constructor() public {
        receiverAddress = payable(msg.sender);
        receiverName = "Contract Creator";
        totalDonations = 0;
        minimumDonation = 1;
    }

    function setReceiver(address payable _receiverAddress, string memory _receiverName) public {
        receiverAddress = _receiverAddress;
        receiverName = _receiverName;
    }
    
    function donate() public payable {
        totalDonations += msg.value;
    }
    
    function receiveDonations() public payable {
        payable(receiverAddress).transfer(totalDonations);
    }
}