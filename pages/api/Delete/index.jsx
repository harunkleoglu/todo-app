import { deleteDataByAny } from "@/services/serviceOperations";

deleteDataByAny
const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const body = await req.body;
            if (!body) throw new Error("There is an error.");
            if (!body.id) throw new Error("Id is required.");

            const data = await deleteDataByAny("Todo", body);

            if (!data || data.error || data === undefined)
                throw new Error(data.error);

            return res.status(200).json({ status: 'success', message: 'API request is successful.' });

        } catch (error) {
            return res.status(500).json({ status: 'error', error: error.message });
        }
    }
}

export default handler;