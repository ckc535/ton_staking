import { Address, Slice, toNano, Cell, beginCell } from '@ton/core';
import { PoolsAdmin } from '../wrappers/PoolsAdmin';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const poolsAdmin = provider.open(PoolsAdmin.createFromAddress(Address.parse('EQA0ZZX6yVMQMjYZC4SR4-H_FwxWuNan9hTsj2RbbSMaFkWE')))

    await poolsAdmin.sendChangeJVTWalletAddress(provider.sender(),Address.parse('kQDMkUW6ipjNJtQLFVnwmKOjBVEG1gsYDdjLUK9HDmmn_z1M'), toNano('0.02'))

    // run methods on `poolsAdmin`
}
