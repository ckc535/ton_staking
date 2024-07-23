import { TonClient, Address } from '@ton/ton';
import { beginCell, TupleBuilder } from "@ton/core";



async function main() {
    // Create Client
    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    });

    const result = (await client.runMethod(Address.parse('kQDMu8HfnC_hhB7CggYfZIUvY13kJKeXPY6Ah0DQW9oMH0BT'), "get_storage_data")).stack
    console.log(result)
}

main();