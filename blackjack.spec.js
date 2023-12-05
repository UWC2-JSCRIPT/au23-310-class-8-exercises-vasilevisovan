describe('dealerShouldDraw function', () => {
    let dealer;
  
    beforeEach(() => {
      dealer = new CardPlayer('Dealer');
    });
  
    it('should return false for 10, 9', () => {
      dealer.hand = [
        { suit: 'hearts', val: 10, displayVal: '10' },
        { suit: 'spades', val: 9, displayVal: '9' },
      ];
      expect(dealerShouldDraw(dealer.hand)).toBe(false);
    });
  
    it('should return true for Ace, 6', () => {
      dealer.hand = [
        { suit: 'hearts', val: 11, displayVal: 'Ace' },
        { suit: 'spades', val: 6, displayVal: '6' },
      ];
      expect(dealerShouldDraw(dealer.hand)).toBe(true);
    });
  
    it('should return false for 10, 6, Ace', () => {
      dealer.hand = [
        { suit: 'hearts', val: 10, displayVal: '10' },
        { suit: 'spades', val: 6, displayVal: '6' },
        { suit: 'diamonds', val: 11, displayVal: 'Ace' },
      ];
      expect(dealerShouldDraw(dealer.hand)).toBe(false);
    });
  
    it('should return true for 2, 4, 2, 5', () => {
      dealer.hand = [
        { suit: 'hearts', val: 2, displayVal: '2' },
        { suit: 'spades', val: 4, displayVal: '4' },
        { suit: 'diamonds', val: 2, displayVal: '2' },
        { suit: 'clubs', val: 5, displayVal: '5' },
      ];
      expect(dealerShouldDraw(dealer.hand)).toBe(true);
    });
  });