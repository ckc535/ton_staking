import { Address, Slice, toNano, Cell, beginCell } from '@ton/core';
import { Blockchain, SandboxContract, TreasuryContract, Verbosity, internal } from '@ton/sandbox';
import { JettonWallet } from '../wrappers/JettonWallet';
import { JettonMinter } from '../wrappers/JettonMinter';
import { compile, NetworkProvider } from '@ton/blueprint';

let fwd_fee = 1804014n
let gas_consumption = 14000000n
let min_tons_for_storage = 10000000n
let jwallet_code = new Cell();
let minter_code = new Cell();
let userWallet: any;
let defaultContent: Cell;


export async function run(provider: NetworkProvider) {
  jwallet_code = await compile('JettonWallet');
  minter_code = await compile('JettonMinter');
  let deployer = Address.parse('EQCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDjzpL')
  let jettonMinterAddress = Address.parse('kQC_aVIdL1IufTgaDE-gs5kYJvpN2nVsy-csR7mbt_odnW9i')
  defaultContent = beginCell().endCell();
  let jettonMinter = provider.open(JettonMinter.createFromConfig(
    {
      admin: deployer,
      content: defaultContent,
      wallet_code: jwallet_code,
    },
    minter_code)
  )
  userWallet = async (address: Address) =>
    JettonWallet.createFromAddress(jettonMinterAddress)
  let initialJettonBalance = toNano('1000');
  const mintResult = await jettonMinter.sendMint(provider.sender(), deployer, initialJettonBalance, toNano('0.2'), toNano('1'));
  // let forwardAmount = toNano('0.3');
  // let minimalFee = 2n * fwd_fee + 2n * gas_consumption + min_tons_for_storage 
  // let sentAmount = forwardAmount + minimalFee
  // let JettonAddress = Address.parse('EQADhWWL0KntmgvtZo4Omf33dkyGdOaz354rEP42z_Kuex_J')

  // const result = jettonWallet.sendTransfer(provider.sender(),sentAmount,
  // sentAmount,JettonAddress);

  // run methods on `openedContract`
}