import Classroom from './0-classroom';

export default function initializeRooms() {
  const arr = [19, 20, 34];
  return arr.map((size) => new Classroom(size));
}
