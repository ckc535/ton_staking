import { Address, Slice, toNano, Cell, beginCell } from '@ton/core';
import { PoolsAdmin } from '../wrappers/PoolsAdmin';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const poolsAdmin = provider.open(PoolsAdmin.createFromConfig({
        creationFee: 100000000n,  // 0.1 JVT
        changeFee: 100000000n,    // 0.1 JVT
        jvtStakingAddress: Address.parse("0QCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDj9wE"),
        jvtWalletAddress: Address.parse("kQADhWWL0KntmgvtZo4Omf33dkyGdOaz354rEP42z_Kue6RD"),

        sharecomsCode: await compile('Sharecoms'),
        stakingPoolCode: await compile("FloatingStakingCollection"),
        nftItemCode: await compile('NftItem'),

        teamAddress: Address.parse("kQDz4k69TAH2Kx8AEXBHmcK_RLXS3Mxvc9JNQE2fmaX0rUQ4") as Address,
        conversionAddress: Address.parse("kQDz4k69TAH2Kx8AEXBHmcK_RLXS3Mxvc9JNQE2fmaX0rUQ4") as Address,
        host: "https://jvault.ru",
        jvtNftCode: await compile('NftItem')
    }, await compile('PoolsAdmin')));

    await poolsAdmin.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(poolsAdmin.address);

    // run methods on `poolsAdmin`
}
