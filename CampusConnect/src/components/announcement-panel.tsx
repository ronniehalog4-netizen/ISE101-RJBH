import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './announcement-card';
import SectionHeading from './section-heading';

const initialAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
  { id: 'a3', title: 'Library schedule', category: 'Notice', read: false },
  { id: 'a4', title: 'Career fair registration', category: 'Events', read: false },
  { id: 'a5', title: 'Wellness center hours', category: 'Notice', read: true },
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

  const renderAnnouncement = ({ item }: { item: Announcement }) => (
    <AnnouncementCard
      key={item.id}
      title={item.title}
      category={item.category}
      read={item.read}
      onMarkRead={() => handleMarkRead(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={announcements}
        keyExtractor={item => item.id}
        renderItem={renderAnnouncement}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Campus Connect</Text>
            <Text style={styles.subtitle}>One campus. Connected students.</Text>
            <Text style={styles.counter}>Unread announcements: {unreadCount}</Text>
            <Text style={styles.status}>{statusMessage}</Text>
            <SectionHeading
              title="Campus Announcements"
              subtitle="Stay up to date with the latest campus news and reminders."
            />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 12,
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
    marginBottom: 18,
  },
  counter: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  status: {
    fontSize: 12,
    color: '#2563EB',
    marginBottom: 20,
  },
});
