import { toNano } from 'ton-core';
import { JettonWallet } from '../wrappers/JettonWallet';
import { compile, NetworkProvider } from '@ton/blueprint';
import { Address } from '@ton/core';

export async function run(provider: NetworkProvider) {
    const jettonWallet = provider.open(JettonWallet.createFromConfig(
        {minterAddress:Address.parse('EQC_aVIdL1IufTgaDE-gs5kYJvpN2nVsy-csR7mbt_odndTo')

        }, await compile('JettonWallet')))

    await jettonWallet.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(jettonWallet.address);

    // run methods on `openedContract`
}