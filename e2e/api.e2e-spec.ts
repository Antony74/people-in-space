import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';

describe('people-in-space API', () => {

    let http: HttpClient = null;

    beforeAll(() => {

        http = TestBed.get(HttpClient, Injector.NULL);

        if (http === null) {

            TestBed.configureTestingModule({
                imports: [
                    HttpClientModule
                ]
            });

            http = TestBed.get(HttpClient, Injector.THROW_IF_NOT_FOUND);
        }
    });

    it('should report success getting a list of people in space', (done) => {
        http.get('http://api.open-notify.org/astros.json').subscribe((response: HttpResponse<any>) => {
            expect(response.body.message).toEqual('success');
            done();
        }, done.fail);
    });

});

