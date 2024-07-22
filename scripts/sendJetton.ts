import {
    Address,
    beginCell,
    Cell,
    toNano,
} from "@ton/core";
import { JettonWallet } from '../wrappers/JettonWallet';
import { send } from 'process';
import { compile, NetworkProvider } from '@ton/blueprint';

let fwd_fee = 1804014n
let gas_consumption = 14000000n
let min_tons_for_storage = 10000000n
let jwallet_code = new Cell();
let minter_code = new Cell();
let userWallet: any;
let defaultContent: Cell;


export async function run(provider: NetworkProvider) {
    let jettonWallet = provider.open(JettonWallet.createFromAddress(Address.parse('EQD-O0SjUGSkHPVRdKi45F0AWL72L6WxwR5ntWlT38CLxRy1')

    ))
    console.log("****", jettonWallet.address)
    let fowardPayload = beginCell().storeUint(0x1234567890abcdefn, 128).endCell();
    let result = await jettonWallet.sendTransfer(provider.sender(),toNano('0.05'),Address.parse('EQDLJuvLwgWctc1Ay_X2B20bejdw-FrD0x1yPRJZW51TQ722'),toNano('0'),toNano('0'),fowardPayload)
    console.log(result)
    // await jettonWallet.sendDeployNewPool(provider.sender(),Address.parse('EQCckMloBA-uMVzgLi1dXBLO9rrszo86UDrcMPayMJVCnxCd'),Address.parse('EQD-O0SjUGSkHPVRdKi45F0AWL72L6WxwR5ntWlT38CLxRy1'),toNano('10'))
    // console.log(provider.sender())
    // await jettonWallet.sendDeployNewPool(provider.sender(), Address.parse('kQBJ7GLVAss93JS_LUaN3b3Wfde7oIZYM-75AOlBIDqMgIWy'), Address.parse('kQADhWWL0KntmgvtZo4Omf33dkyGdOaz354rEP42z_Kue6RD'), toNano('5'))
}