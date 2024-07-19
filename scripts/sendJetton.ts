import {
    Address,
    beginCell,
    Cell,
    Contract,
    contractAddress,
    ContractProvider,
    Sender,
    SendMode,
    StateInit,
    toNano,
} from "@ton/core";
import { JettonWallet } from '../wrappers/JettonWallet';
import { JettonMinter } from '../wrappers/JettonMinter';
import { send } from 'process';
import { compile, NetworkProvider } from '@ton/blueprint';

let fwd_fee = 1804014n
let gas_consumption = 14000000n
let min_tons_for_storage = 10000000n
let jwallet_code = new Cell();
let minter_code = new Cell();
let userWallet:any;
let defaultContent:Cell;


export async function run(provider: NetworkProvider) {
	let jettonWallet = provider.open(JettonWallet.createFromAddress(Address.parse('EQD-O0SjUGSkHPVRdKi45F0AWL72L6WxwR5ntWlT38CLxRy1')
	
))
	console.log("****", jettonWallet.address)
	let fowardPayload = beginCell().storeUint(0x1234567890abcdefn,128).endCell();
	// await jettonWallet.sendTransfer(provider.sender(),toNano('0.05'),Address.parse('0QCm9AQsmHJj21XOy_3gNGoKzo6H3MprInFD8Gtr1RHBAmw1'),toNano('0'),toNano('17'),fowardPayload)
    // await jettonWallet.sendDeployNewPool(provider.sender(),Address.parse('EQCckMloBA-uMVzgLi1dXBLO9rrszo86UDrcMPayMJVCnxCd'),Address.parse('EQD-O0SjUGSkHPVRdKi45F0AWL72L6WxwR5ntWlT38CLxRy1'),toNano('10'))
    console.log(provider.sender())
    await jettonWallet.sendDeployNewPool(provider.sender(),Address.parse('EQBv91obguvyr14VlROlBrHOp3azkqxs_xbFO6qv2c9x5qWB'),Address.parse('EQD-O0SjUGSkHPVRdKi45F0AWL72L6WxwR5ntWlT38CLxRy1'),toNano('10'))
}