import { HttpClient, HttpXhrBackend, XhrFactory, HttpErrorResponse} from '@angular/common/http';
import { XMLHttpRequest} from 'xmlhttprequest';

export class BrowserXhr implements XhrFactory {
  constructor() {}
  build(): any { return <any>(new XMLHttpRequest()); }
}

describe('people-in-space API', () => {

    const http: HttpClient = new HttpClient(new HttpXhrBackend(new BrowserXhr()));

    it('should report success getting a list of people in space', (done) => {
        http.get('http://api.open-notify.org/astros.json').subscribe((response: any) => {
            expect(response.message).toEqual('success');
            done();
        }, (error: HttpErrorResponse) => {
            done.fail(error.message);
        });
    });

});

