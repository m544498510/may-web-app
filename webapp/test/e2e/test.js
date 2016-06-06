'use strict';

browser.ignoreSynchronization = true;
describe('e2e login',function(){
    beforeEach(function(){
        browser.get('jeemaa/user/jeemaa_index.do');
    });

    it('no username',function(){
        element(by.className('btn-login')).click().then(function(){
            element(by.id('username')).sendKeys('');
            element(by.id('password')).sendKeys('xxx');
            element(by.tagName('button')).click().then(function(){
                browser.sleep(1000);
                expect(element(by.className('bootbox-body')).getText())
                    .toEqual('邮箱或密码不能为空');
            });
        });
    });

    it('login',function(){
        element(by.className('btn-login')).click().then(function(){
            element(by.id('username')).sendKeys('1030591923@qq.com');
            element(by.id('password')).sendKeys('989410');
            element(by.tagName('button')).click();
            browser.sleep(1000);
            expect(element(by.className('btn-user-name')).getText())
                .toEqual('鱼肠');
        });

    });
});

describe('e2e test', function () {

    describe('test1',function(){
        beforeEach(function(){
            browser.get('jeemaa/task/mytask.do');
        });

        it('url Test',function(){
            browser.sleep(1000);
            element.all(by.className("task-item")).then(function(list){
                expect(list.length).toBe(5);
            });
        });
    });
});
