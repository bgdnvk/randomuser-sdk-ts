import { ApiUserResponse } from './types/ApiUserResponse'

export default class RandomUserSDK {

    //@param {number} n - Number of users you want to return
    //currently some users have an ID of null
    //if it's a success you get JSON data back if not it throws an error
    //the error also shows on console before the throw
    async getRandomUsers(n: number): Promise<ApiUserResponse> {

        const numberUsers = n.toString()
        try {
            const res = await fetch(`https://randomuser.me/api/?results=${numberUsers}`);
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        } 
        
    }
    
    //@param {string} query - Call the randomuser.me API with your own query, don't forget '?' at the start
    //https://randomuser.me/documentation
    async getRandomUsersQuery(query: string): Promise<ApiUserResponse> {
        
        try {
            const res = await fetch(`https://randomuser.me/api/${query}`);
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        } 
    }
    
    //TODO: check data and implement random IDs when the API fails
}
