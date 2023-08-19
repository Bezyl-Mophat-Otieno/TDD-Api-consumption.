import app from "../server";
import request from 'supertest'


describe('Test Driven Development', () => {
    it('should get a list of todos',async()=>{
        const res =await request(app).get('/');
        expect(res.status).toBe(200)
    })
    it('should return an array of a single todo when we fetch one todo',async()=>{

        const res =await request(app).get('/todos/1');
        expect(res.body.todo).toEqual(
            expect.objectContaining({
                userId: expect.any(Number),
                id: expect.any(Number),
                title: expect.any(String),
                completed: expect.any(Boolean)

            })
        )
    })    
    it('it should error with 404 out if the todo is not found',async()=>{
        const res = await request(app).get('/todos/1rhfs');
        expect(res.status).toBe(404)
        expect(res.body.message).contains('Todo not found')
    })
});
