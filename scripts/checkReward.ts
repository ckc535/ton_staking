import { TonClient, Address } from 'ton';
import { beginCell, TupleBuilder } from "@ton/core";



async function main() {
    // Create Client
    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    });

    const result = (await client.callGetMethod(Address.parse('kQBaikJ2z7zkAFssHOmMrdJws4lLl0wAuGD1-yq1oVV704zB'), "get_storage_data")).stack
    console.log(result[18][1]);
}

main();