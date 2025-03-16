import { updateDataByAny } from "@/services/serviceOperations";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const body = req.body;
            console.log(req.body)
            if (!body) throw new Error("There is an error.");
            if (!body.id) throw new Error("Id is required.");

            const data = await updateDataByAny("Todo", {id: body.id}, {title: body.title, completed: body.completed});

            if (!data || data.error || data === undefined)
                throw new Error(data.error);

            return res.status(200).json({ status: 'success', message: 'API request is successful.' });

        } catch (error) {
            return res.status(500).json({ status: 'error', error: error.message });
        }
    }
}

export default handler;