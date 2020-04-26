test('number is even', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(256)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });
  
test('number is odd', () => {
    expect(isEven(255)).toBe(false);
    expect(isEven(-3)).toBe(false);
    expect(isEven(-255)).toBe(false);
});

// Использовал фреймворк Jest.
// Описание функции и реализация отличаются, поэтому тесты проваливаются
  