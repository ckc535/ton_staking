import { Address, Slice, toNano, Cell, beginCell } from '@ton/core';
import { PoolsAdmin } from '../wrappers/PoolsAdmin';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const poolsAdmin = provider.open(PoolsAdmin.createFromAddress(Address.parse('kQBJ7GLVAss93JS_LUaN3b3Wfde7oIZYM-75AOlBIDqMgIWy')))

    await poolsAdmin.sendChangeJVTWalletAddress(provider.sender(), toNano('0.02'))

    // run methods on `poolsAdmin`
}
