'use strict';

const DataCollector = require('../../../lib/collector/data-collector');

describe('collector/data-collector', () => {
    it('should has static factory creation method', () => {
        assert.instanceOf(DataCollector.create(), DataCollector);
    });

    describe('should append a test to data collector', () => {
        it('with empty id', () => {
            const dataCollector = DataCollector.create({});

            dataCollector.append({foo: 'bar'});

            assert.deepEqual(dataCollector.getData(), {
                '': {foo: 'bar'}
            });
        });

        it('with an id value "fullName"', () => {
            const dataCollector = DataCollector.create({});

            dataCollector.append({fullName: 'name'});

            assert.deepEqual(dataCollector.getData(), {
                'name': {fullName: 'name'}
            });
        });

        it('with an id value "browserId"', () => {
            const dataCollector = DataCollector.create({});

            dataCollector.append({browserId: 'bro'});

            assert.deepEqual(dataCollector.getData(), {
                'bro': {browserId: 'bro'}
            });
        });

        it('with an id value "fullName.browserId"', () => {
            const dataCollector = DataCollector.create({});

            dataCollector.append({fullName: 'name', browserId: 'bro'});

            assert.deepEqual(dataCollector.getData(), {
                'name.bro': {fullName: 'name', browserId: 'bro'}
            });
        });
    });

    it('should replace the existing test in data collector', () => {
        const dataCollector = DataCollector.create({});

        dataCollector.append({foo: 'bar'});
        dataCollector.append({foo: 'baz'});

        assert.deepEqual(dataCollector.getData(), {
            '': {foo: 'baz'}
        });
    });
});
