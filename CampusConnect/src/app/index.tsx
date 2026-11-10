import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
  {
    id: 'a3',
    title: 'Library schedule',
    category: 'Notice',
    read: false,
  },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text style={styles.subtitle}>
        One campus. Connected students.
      </Text>

      <Text style={styles.count}>
        Unread Announcements: {unread.length}
      </Text>

      <Text style={styles.heading}>
        Campus Announcements
      </Text>

      {sampleAnnouncements.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.announcementTitle}>
            {item.title}
          </Text>

          <Text>{item.category}</Text>

          <Text>
            Status: {item.read ? 'Read' : 'Unread'}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    marginBottom: 24,
  },

  count: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },

  announcementTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
});