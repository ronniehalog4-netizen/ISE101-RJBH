import { Pressable, StyleSheet, Text, View } from 'react-native';

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
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>

      <Pressable style={styles.button} onPress={onMarkRead}>
        <Text style={styles.buttonText}>
          {read ? 'Mark as unread' : 'Mark as read'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1C2541',
  },
  category: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 4,
  },
  status: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
