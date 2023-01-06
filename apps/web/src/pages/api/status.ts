import {NextApiRequest, NextApiResponse} from "next";

const handler = (request: NextApiRequest, response: NextApiResponse) => {
	return response.send({
		status: "ok",
	});
};

export default handler;