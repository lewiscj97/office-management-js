describe('Room', () => {
  describe('Create a new room', () => {
    it('Is created with a name', () => {
      room = new Room('Room One');
      expect(room.name).toBe('Room One');
    });
  });
});
