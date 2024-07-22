import {
    Address,
    beginCell,
    toNano,
} from "@ton/core";
import { TonClient } from "@ton/ton"
import { JettonWallet } from '../wrappers/JettonWallet';
import { PoolsAdmin } from '../wrappers/PoolsAdmin';
import { compile, NetworkProvider } from '@ton/blueprint';


export async function run(provider: NetworkProvider) {
    let jettonWallet = provider.open(JettonWallet.createFromAddress(Address.parse('kQADhWWL0KntmgvtZo4Omf33dkyGdOaz354rEP42z_Kue6RD')

    ))
    let fowardPayload = beginCell().storeUint(0x1234567890abcdefn, 128).endCell();
    let poolsAdminAddress = Address.parse('EQB6gLMH5lRzhnuMb5nYw7TNXj68XX5wkD58b0xT4kCw5UAP')
    const poolsAdmin = provider.open(PoolsAdmin.createFromAddress(poolsAdminAddress))



    // await jettonWallet.sendTransfer(provider.sender(),toNano('0.05'),poolsAdminAddress,toNano('0'),toNano('0'),fowardPayload)
    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    });

    const result = await client.runMethod(Address.parse('kQCnLMweaavOuGVImBm0MmxcLjjBLfG9QvLH8w3Z6IvSOg3_'), "get_wallet_address", [{ type: "slice", cell: beginCell().storeAddress(poolsAdminAddress).endCell() }])
    let jvtWalletAddress = result.stack.readAddress();
    // await poolsAdmin.sendChangeJVTWalletAddress(provider.sender(), jvtWalletAddress, toNano('0.02'))
    await jettonWallet.sendDeployNewPool(provider.sender(), poolsAdminAddress, jvtWalletAddress, toNano('20'))
}