import AppStore from '../../store'

module.exports = (nock, container) => {
    describe(`GET / ${container}`, () => {

        it('return 200 HTTP status code with action Mobx getMessage', async (done) => {

            let mockRequest = nock.getMessage()

            const store = AppStore
            const result = await store.getMessage()

            expect(mockRequest.isDone()).toEqual(true)

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result.data).toHaveProperty('message', 'hello world test')

            done()
        })

        it('return 200 HTTP status code with action Mobx getAnotherMessage', async (done) => {

            let mockRequest = nock.getAnotherMessage()

            const store = AppStore
            const result = await store.getAnotherMessage()

            expect(mockRequest.isDone()).toEqual(true)

            expect(result).not.toBeNull()
            expect(result).toHaveProperty('status', 200)
            expect(result.data).toHaveProperty('message', 'get the request 2 http request test')

            done()
        })

        it('return 200 HTTP status code with action Mobx getBranchesPCP', async(done) => {
            let mockRequest = nock.getBranchesPCP()

            const store = AppStore
            const result = await store.getBranchesPCP()

            expect(mockRequest.isDone()).toEqual(true)
            expect(result.data).not.toBeNull()
            expect(result.data).toHaveProperty('meta')
            expect(result.data.meta).toHaveProperty('recordCount', 3)

           done() 
        })
    })
}