describe('Room', () => {
  describe('Create a new room with a name, available by default', () => {
    room = new Room('Room One');

    expect(room.name).toBe('Room One');
    expect(room.available).toBe(true);
  });
});
