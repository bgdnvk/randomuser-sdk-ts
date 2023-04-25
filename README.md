# randomuser-sdk-ts  

## Description  
SDK for [randomuser.me](https://randomuser.me/)

## How to use  
install the package
```
npm i randomuser-sdk-ts
```
then you need to import the SDK, initialize the class object and you can start using it anywhere, see the example below:
```
//import the sdk
import RandomUserSDK from "randomuser-sdk-ts/src/main";
import { ApiUserResponse } from "randomuser-sdk-ts/src/types/ApiUserResponse";

export default async function getUsers(n: number): Promise<ApiUserResponse> {
    try {
        //initiatiate the class
        const sdk = new RandomUserSDK()
        //get the data using the sdk
        const res = await sdk.getRandomUsers(n)
        //return the data or do something with it (you get a JSON back)
        return res
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    } 
}
```

## Motivation  
I've mainly built this so you can get the types in case you are working with TypeScript

## Disclaimer
I'm not associated in any way with randomuser.me