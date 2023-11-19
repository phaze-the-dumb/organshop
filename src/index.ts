import * as Realm from 'realm-web';

import homepage from './home.page';

export interface Env {
	MONGODB_KEY: string;
	MONGODB_ID: string;
}

let links: any;

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if(!links){
			let app = new Realm.App({ id: env.MONGODB_ID });
			let user = await app.logIn(Realm.Credentials.apiKey(env.MONGODB_KEY));

			let mongo = user.mongoClient('mongodb-atlas');
			links = mongo.db('Links').collection('Links');
		}

		let url = new URL(req.url);

		switch(req.method){
			case 'GET':
				if(url.pathname === '/')
					return new Response(homepage, { headers: { 'Content-Type': 'text/html' } });

				let link = await links.findOne({ url: url.pathname });
				if(!link)
					return new Response(homepage, { status: 404, headers: { 'Content-Type': 'text/html' } });

				if(link.client)
					return new Response('<script>window.location = \'' + link.redirect.replace('\'', '"') + '\'</script>', { headers: { 'Content-Type': 'text/html' }});
				else
					return new Response(null, { status: 307, headers: { location: link.redirect } });
			case 'PUT':
				if(url.pathname === '/api/v1/link'){
					let isClient = req.headers.get('client') === 'yes';
					let link = await links.findOne({ redirect: req.headers.get('url'), client: isClient });

					if(link)
						return new Response(JSON.stringify({ ok: true, url: link.url }));

					let linkID = Math.random().toString(36).replace('0.', '');

					link = {
						_id: linkID,
						url: '/itm/'+linkID,
						redirect: req.headers.get('url'),
						client: req.headers.get('client') === 'yes'
					}

					await links.insertOne(link);
					return new Response(JSON.stringify({ ok: true, url: link.url }));
				}
			default:
				return new Response(homepage, { status: 404, headers: { 'Content-Type': 'text/html' } });
		}
	},
};
