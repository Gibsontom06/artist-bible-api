export interface StorageProvider { putObject(key: string, body: Buffer, mimeType: string): Promise<void>; getPublicUrl(key: string): string; }

class MockStorageProvider implements StorageProvider {
  async putObject(): Promise<void> {}
  getPublicUrl(key: string) { return `https://storage.local/${key}`; }
}

export const storageProvider: StorageProvider = new MockStorageProvider();

export function buildShowStoragePrefix(artistSlug: string, date: Date, city: string, venue: string) {
  const d = date.toISOString().slice(0, 10);
  const slug = venue.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const citySlug = city.replace(/\s+/g, '_');
  return `Artists/${artistSlug}/Shows/${d}_${citySlug}_${slug}/`;
}
