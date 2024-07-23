import { Address, Slice, toNano, Cell, beginCell } from '@ton/core';
import { FloatingStaking } from '../wrappers/FloatingStakingCollection';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const floatingStaking = provider.open(FloatingStaking.createFromAddress(Address.parse('kQDMu8HfnC_hhB7CggYfZIUvY13kJKeXPY6Ah0DQW9oMH0BT')))

    await floatingStaking.sendSetWalletAddress(provider.sender(),Address.parse('kQDMu8HfnC_hhB7CggYfZIUvY13kJKeXPY6Ah0DQW9oMH0BT'))

    // run methods on `poolsAdmin`
}
