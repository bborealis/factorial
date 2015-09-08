describe('factorial', function() {
    it('factorial of 1 is 1', function() {
        expect(factorial(1)).to.equal(1);
    });
    it('factorial of 6 is 720', function() {
        expect(factorial(6)).to.equal(720);
    });
    it('factorial of 0 is 1', function() {
        expect(factorial(0)).to.equal(1);
    });
});
