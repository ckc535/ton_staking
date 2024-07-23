import { Address, Slice, toNano, Cell, beginCell } from '@ton/core';
import { PoolsAdmin } from '../wrappers/PoolsAdmin';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const poolsAdmin = provider.open(PoolsAdmin.createFromConfig({
        creationFee: 12000000n,  // 0.12 JVT 100000000n
        changeFee: 120000000n,    // 0.12 JVT
        jvtStakingAddress: Address.parse("0QCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDj9wE"),
        jvtWalletAddress: Address.parse("kQDV4CjYb6WhGWQFDEuD9XXifh8XEfVwCugSag9b59m2n1nB"),

        sharecomsCode: await compile('Sharecoms'),
        stakingPoolCode: await compile("FloatingStakingCollection"),
        nftItemCode: await compile('NftItem'),

        teamAddress: Address.parse("0QCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDj9wE") as Address,
        conversionAddress: Address.parse("0QCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDj9wE") as Address,
        host: "https://jvault.ru",
        jvtNftCode: await compile('NftItem')
    }, await compile('PoolsAdmin')));

    await poolsAdmin.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(poolsAdmin.address);


    // run methods on `poolsAdmin`
}
