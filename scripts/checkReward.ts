import { TonClient, Address,safeSign,Slice } from 'ton';


async function main() {
    // Create Client
    const client = new TonClient({
        endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    });

    // Call get method
    // const result = await client.callGetMethod(Address.parse('EQCx3qcLcDHLLKQKPVsaxA9NoGKI8J0gNfiyQW-AQnxBhKSf'),'get_storage_data')
    // console.log(parseInt(result.stack[10][1],16));
    // console.log('Total:', total);
    const result = await client.callGetMethod(Address.parse('kQDJmQtqINS1Py8ccr3A_hK3flKTfwwCWuzBs01W_rxnTSWe'),'get_creation_fee')
    console.log( (result.stack));
}

main();