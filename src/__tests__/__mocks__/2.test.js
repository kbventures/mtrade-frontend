function sum(x, y) {
    return x + y;
  }
  
  describe('sum', () => {
    it('sums up two values', () => {
      expect(sum(2, 4)).toBe(6);
    });
  });