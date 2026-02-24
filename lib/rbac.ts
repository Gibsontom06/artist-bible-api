import { Role } from '@prisma/client';

export const canViewArtist = (role: Role, userArtistId: string | null, artistId: string) =>
  role === 'ADMIN' || role === 'AGENT' || (role === 'ARTIST' && userArtistId === artistId);

export const assertAdmin = (role: Role) => {
  if (role !== 'ADMIN') throw new Error('Admin only');
};
