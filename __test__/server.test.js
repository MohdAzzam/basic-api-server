'use strict';
//for testing ci/cd
const server = require('../src/server');
const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('Testing Server Moudle', () => {
    it('Handel not Found Route',
        async () => {
            let response = await serverRequest.get('/not-found-route');
            expect(response.status).toEqual(404);
        });

    it('Handels Home Route', async () => {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Welcom to Our Home Page');
    });

    //book 

    it('return 201 if the book add', async () => {
        let response = await serverRequest.post('/book');
        console.log(response.body);
        expect(response.status).toEqual(201);
    });
    it('return 200 if all books return', async () => {
        let response = await serverRequest.get('/book');
        console.log(response.body, 'get all ');
        expect(response.status).toEqual(200);
    });
    it('return 200 if the book return ', async () => {
        let response = await serverRequest.get('/book/1');
        console.log(response.body, 'get one ');
        expect(response.status).toEqual(200);
    });
    it('return 204 if the book updated', async () => {
        let response = await serverRequest.put('/book/1');
        expect(response.status).toEqual(204);
    });
    it('return 202 if the book deleted', async () => {
        let response = await serverRequest.delete('/book/1');
        expect(response.status).toEqual(202);
    });

    it('return 204 if the book not found', async () => {
        let response = await serverRequest.delete('/book/1');
        expect(response.status).toEqual(204);
    });

    // actor
    it('return 201 if the actor add', async () => {
        let response = await serverRequest.post('/actor');
        expect(response.status).toEqual(201);
    });
    it('return 200 if all actors return', async () => {
        let response = await serverRequest.get('/actor');
        expect(response.status).toEqual(200);
    });
    it('return 200 if the actor return ', async () => {
        let response = await serverRequest.get('/actor/1');
        expect(response.status).toEqual(200);
    });


    it('return 204 if the actor updated', async () => {
        let response = await serverRequest.put('/actor/1');
        expect(response.status).toEqual(204);
    });
    it('return 202 if the actor deleted', async () => {
        let response = await serverRequest.delete('/actor/1');
        expect(response.status).toEqual(202);
    });

    it('return 204 if the actor not found', async () => {
        let response = await serverRequest.delete('/actor/1');
        expect(response.status).toEqual(204);
    });
});
