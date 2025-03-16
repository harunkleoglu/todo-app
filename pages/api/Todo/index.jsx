import { getAllData, createNewData } from "@/services/serviceOperations";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const data = await getAllData("Todo");

            if (!data || data.error || data === undefined)
                throw new Error("Error on fetching data.");

            return res.status(200).json({ status: 'success', data: data });
        } catch (error) {
            return res.status(500).json({ status: 'error', error: error.mesaage, data: null });
        }
    }

    if (req.method === 'POST') {
        try {
            const body = await req.body;
            if(!body) throw new Error("There is an error.");
            if(!body.title) throw new Error("Title is required.");
                
            const data = await createNewData("Todo", body);
    
            if(!data || data.error || data === undefined)
                throw new Error(data.error);
    
            return res.status(200).json({ status: 'success', message: 'API request is successful.' });
            
        } catch (error) {
            return res.status(500).json({ status: 'error', error: error.message});
        }
    }
}
export default handler;