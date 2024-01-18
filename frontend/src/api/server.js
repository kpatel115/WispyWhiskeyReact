const token = 'f6d5050a3ee2a77dd8912cf1cd1eff71d10e7e61d6d6a545';
export const server_calls = {
    get: async () => {
        // will need to update this to a backend server like render.io after development
        const response = await fetch('http://127.0.0.1:5000/api/whiskeys', 
        {
            method: 'GET',
            mode: "cors",
            header: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`,
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from backend server')
        }
        return await response.json()

        //Method Calls - Post Update Delete and Get specific 
    }
}