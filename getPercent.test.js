const getPrecent = require('./getPercent');

test('тест для проверки 20% от 1000', () => {
    expect(getPrecent(1000, 20)).toBe(200);
});

test('тест для проверки 40% от 34567', () => {
    expect(getPrecent(34567, 40)).toBe(13826.8);
});

test('тест для проверки null от 1000', () => {;
    expect(()=>{getPrecent('1000', null)}).toThrow("Невалидные данные");
});
