import { Address, Slice, toNano, Cell, beginCell } from '@ton/core';
import { FloatingStaking } from '../wrappers/FloatingStakingCollection';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const floatingStaking = provider.open(FloatingStaking.createFromConfig({
		init: true,
		next_item_index: 0,
		lastUpdate_time: 0,
		nft_itemCode: await compile('NftItem'),
		collectionContent: await compile('NftItem'),
		last_tvl: 0n,
		distributedRewards: 0n,
		min_lock_period: 0,
		farming_speed:0n,
		rewards_wallet_address: Address.parse('EQD-O0SjUGSkHPVRdKi45F0AWL72L6WxwR5ntWlT38CLxRy1'),
		rewards_balance: 0n,
		commission_factor: 10000,
		lock_wallet_set: false,
		rewards_wallet_set:true,
		premint_open: false,
		start_time: 1721260800,
		end_time: 1721433600,
		minimum_deposit: 1n,
		lock_wallet_address: Address.parse('0QCm9AQsmHJj21XOy_3gNGoKzo6H3MprInFD8Gtr1RHBAmw1'),
		admin_address: Address.parse('EQCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDjzpL'),
		creator_address: Address.parse('EQCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDjzpL')
    }, await compile('FloatingStakingCollection')));
	// const floatingStaking = provider.open(FloatingStaking.createFromAddress(Address.parse('kQAoKOcNj-pQiskZFIlW6OxbOWZdd0DbZKvDZaOyE2SqxIL2')))
    // let result = await floatingStaking.sendChangeStartTime(provider.sender(),1721260800 );
	await floatingStaking.sendDeploy(provider.sender(),toNano('0.05'));
    await provider.waitForDeploy(floatingStaking.address);
}