describe('Room', () => {
  describe('Create a new room', () => {
    beforeEach(() => {
      room = new Room('Room One');
    });

    it('Is created with a name', () => {
      expect(room.name).toBe('Room One');
    });

    it('Is available by default', () => {
      expect(room.available).toBe(true);
    });
  });
});
