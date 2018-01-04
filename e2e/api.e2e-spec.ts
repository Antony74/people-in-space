import * as superagent from 'superagent';

describe('people-in-space API', () => {

    it('should report success getting a list of people in space', (done) => {
        superagent.get('http://api.open-notify.org/astros.json').then((response: superagent.Response) => {
            expect(response.body.message).toEqual('success');
            done();
        }).catch(done.fail);
    });

});
