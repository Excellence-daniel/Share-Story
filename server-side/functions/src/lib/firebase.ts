import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp({
	credential: admin.credential.cert({
		projectId: functions.config().service_account.project_id,
		clientEmail: functions.config().service_account.client_email,
		privateKey: functions.config().service_account.private_key,
	}),
	databaseURL: functions.config().service_account.database,
	// storageBucket: `${functions.config().service_account.bucket}.appspot.com`,
});
export default admin;
