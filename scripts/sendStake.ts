import {
    Address,
    beginCell,
    Cell,
    toNano,
} from "@ton/core";
import { JettonWallet } from '../wrappers/JettonWallet';
import { send } from 'process';
import { compile, NetworkProvider } from '@ton/blueprint';


export async function run(provider: NetworkProvider) {
    let jettonWallet = provider.open(JettonWallet.createFromAddress(Address.parse('kQBL8FwmEFazsAcPy7XhcsZY44Sw-7O6SP8VhvbBb0tOfc2-')

    ))
    let fowardPayload = beginCell().storeUint(0x1234567890abcdefn, 128).endCell();
    let stakingAddress = Address.parse('kQDgDw650c-bV8gYLUmCSwEqYLLVlS4aAVnBffpD8hR9Uuss')
    let result = await jettonWallet.sendStake(provider.sender(), stakingAddress, toNano('4'), 10, false)
    console.log(result)
}