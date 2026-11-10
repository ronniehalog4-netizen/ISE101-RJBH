import type { Announcement } from '../types/announcement';

export function getUnreadAnnouncements(
  items: Announcement[]
): Announcement[] {
  return items.filter(item => !item.read);
}