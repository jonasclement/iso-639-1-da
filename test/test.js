const assert = require('assert');
const ISO6391 = require('../build/index');

describe('getName()', function() {
  it('en', function() {
    assert.equal(ISO6391.getName('en'), 'Engelsk');
  });
  it('zh', function() {
    assert.equal(ISO6391.getName('zh'), 'Kinesisk');
  });
  it('xx', function() {
    assert.equal(ISO6391.getName('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getName('toString'), '');
  });
});

describe('getNativeName()', function() {
  it('en', function() {
    assert.equal(ISO6391.getNativeName('en'), 'English');
  });
  it('zh', function() {
    assert.equal(ISO6391.getNativeName('zh'), '中文');
  });
  it('xx', function() {
    assert.equal(ISO6391.getNativeName('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getNativeName('toString'), '');
  });
});

describe('getCode()', function() {
  it('English', function() {
    assert.equal(ISO6391.getCode('Engelsk'), 'en');
  });
  it('Chinese', function() {
    assert.equal(ISO6391.getCode('Kinesisk'), 'zh');
  });
  it('中文', function() {
    assert.equal(ISO6391.getCode('中文'), 'zh');
  });
  it('xx', function() {
    assert.equal(ISO6391.getCode('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getCode('toString'), '');
  });
});

describe('validate()', function() {
  it('en', function() {
    assert.equal(ISO6391.validate('en'), true);
  });
  it('zh', function() {
    assert.equal(ISO6391.validate('zh'), true);
  });
  it('xx', function() {
    assert.equal(ISO6391.validate('xx'), false);
  });
  it('toString', function() {
    assert.equal(ISO6391.validate('toString'), false);
  });
});

describe('getLanguages()', function() {
  it('[en, zh, xx, toString]', function() {
    assert.deepEqual(ISO6391.getLanguages(['en', 'zh', 'xx', 'toString']), [
      {
        code: 'en',
        name: 'Engelsk',
        nativeName: 'English',
      },
      {
        code: 'zh',
        name: 'Kinesisk',
        nativeName: '中文',
      },
      {
        code: 'xx',
        name: '',
        nativeName: '',
      },
      {
        code: 'toString',
        name: '',
        nativeName: '',
      },
    ]);
  });
});
