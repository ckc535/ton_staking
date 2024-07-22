import { TonClient, Address } from '@ton/ton';
import {beginCell, TupleBuilder} from "@ton/core";



async function main() {
    // Create Client
    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    });

    const result = await client.runMethod(Address.parse('EQB6gLMH5lRzhnuMb5nYw7TNXj68XX5wkD58b0xT4kCw5UAP'),"get_wallet_address",[{type: "slice",cell: beginCell().storeAddress(Address.parse('0QCnLLH_GM4mG9H8e08hh0uKc0-OdplImdq0ETgNstXDj9wE')).endCell() }])
    console.log( (result.stack.readAddress()));
}

main();