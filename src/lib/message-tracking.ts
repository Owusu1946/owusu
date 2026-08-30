const STORAGE_KEYS = {
  MESSAGE_COUNT: 'chat_message_count',
} as const;

export const MESSAGE_LIMIT = 5;

export class MessageTracking {
  static getMessageCount(): number {
    if (typeof window === 'undefined') return 0;
    return parseInt(localStorage.getItem(STORAGE_KEYS.MESSAGE_COUNT) || '0', 10);
  }

  static incrementMessageCount(): number {
    if (typeof window === 'undefined') return 0;
    const currentCount = this.getMessageCount();
    const newCount = currentCount + 1;
    localStorage.setItem(STORAGE_KEYS.MESSAGE_COUNT, newCount.toString());
    return newCount;
  }

  static hasReachedLimit(): boolean {
    if (typeof window === 'undefined') return false;
    return this.getMessageCount() >= MESSAGE_LIMIT;
  }

  static getRemainingMessages(): number {
    return Math.max(0, MESSAGE_LIMIT - this.getMessageCount());
  }

  static resetForTesting(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS.MESSAGE_COUNT);
  }
}
