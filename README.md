# Office Management - JavaScript
## Plan

1. Test drive `Room` and `Office` classes
2. Ensure that the classes work in the browser console
3. Build a static website for creating a new office, adding rooms, entering rooms, etc.

## Object model

Very basic model for the different classes and the different attributes and methods they require.

### `Room`

- name
- available

### `Office`

- `addMeetingRoom()`
- `allMeetingRooms()` (lists all rooms)
- `checkAvailability(room)` (returns true or false)
- `enterRoom(room)` (makes room unavailable)
- `leaveRoom(room)` (makes room available)
- `allAvailableRooms()`

### `Meeting` (stretch)

- teamName
- meetingName

### Notes

- Test drive `Room` class first, then the `Office` and test in browser (MVP)
- Test drive `Meeting` class and integrate with the MVP, test in browser
- Build website and make functional with the classes