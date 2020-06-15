import * as functions from 'firebase-functions';
import { Firebase } from '../lib';
// import * as _cors fro;
import * as _cors from 'cors';
import * as Express from 'express';

const writeToFS = async () => {
	try {
		await Firebase.firestore().collection('test_write').doc().set({ 'test-try': 1, name: 'Dan' });
	} catch (e) {
		console.log(e, 'error');
	}
};

// export { writeToFS };

const cors = () => {
	return _cors({
		methods: ['GET', 'POST', 'PUT'],
		allowedHeaders: 'Origin, Accept, Content-Type, Authorization, X-User-Id',
	});
};

const app = Express();
app.use(cors());

app.post('/write', writeToFS);

app.use((error: any, request: Express.Request, response: Express.Response, next: Express.NextFunction) => {
	if (error.name === 'UnauthorizedError') {
		if (request.cookies) {
			response.clearCookie('idToken');
		}

		response.status(401).send('Unauthorized');
	}
});

export const test = functions.https.onRequest(app);
