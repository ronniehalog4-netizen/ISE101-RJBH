import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './announcement-card';

const initialAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
  { id: 'a3', title: 'Library schedule', category: 'Notice', read: false },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [statusMessage, setStatusMessage] = useState('Checking updates...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatusMessage('Announcements synced');
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleMarkRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(item =>
        item.id === id ? { ...item, read: !item.read } : item
      )
    );
  };

  const unreadCount = announcements.filter(item => !item.read).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>One campus. Connected students.</Text>
      <Text style={styles.counter}>Unread Announcements: {unreadCount}</Text>
      <Text style={styles.status}>{statusMessage}</Text>

      <Text style={styles.heading}>Campus Announcements</Text>

      {announcements.map(item => (
        <AnnouncementCard
          key={item.id}
          title={item.title}
          category={item.category}
          read={item.read}
          onMarkRead={() => handleMarkRead(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#4B5563',
    marginBottom: 24,
  },
  counter: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  status: {
    fontSize: 12,
    color: '#2563EB',
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
});
