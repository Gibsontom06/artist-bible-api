import { AnnouncementReadyStatus, MarketingRequirements } from '@prisma/client';

export function computeReadiness(req: MarketingRequirements | null): AnnouncementReadyStatus {
  if (!req?.ticketLink || !req.onSaleStatus || !req.promoContactEmail) return 'NOT_READY';
  return 'READY';
}

export function missingReadinessFields(req: MarketingRequirements | null): string[] {
  const missing: string[] = [];
  if (!req?.ticketLink) missing.push('Ticket link');
  if (!req?.onSaleStatus) missing.push('On sale status + timing');
  if (!req?.promoContactEmail) missing.push('Promo contact email');
  return missing;
}
