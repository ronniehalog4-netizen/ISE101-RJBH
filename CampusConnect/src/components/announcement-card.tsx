import { StyleSheet, Text, View } from 'react-native';

import ActionButton from './action-button';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, read ? styles.badgeRead : styles.badgeUnread]}>
          <Text style={[styles.badgeText, read && styles.badgeTextRead]}>
            {read ? 'Read' : 'Unread'}
          </Text>
        </View>
      </View>

      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Reviewed' : 'Needs attention'}</Text>

      <ActionButton
        accessibilityLabel={read ? `Mark ${title} as unread` : `Mark ${title} as read`}
        label={read ? 'Mark as unread' : 'Mark as read'}
        onPress={onMarkRead}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#1C2541',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  badgeUnread: {
    backgroundColor: '#E0F2FE',
  },
  badgeRead: {
    backgroundColor: '#DCFCE7',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0369A1',
  },
  badgeTextRead: {
    color: '#166534',
  },
  category: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 4,
  },
  status: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 14,
  },
});
