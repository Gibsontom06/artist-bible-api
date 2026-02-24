export async function generateMarketingDrafts(context: { artistName: string; venue: string; city: string; ticketLink?: string | null; lineup: string[]; date: string; }) {
  const base = `${context.artistName} at ${context.venue}, ${context.city} on ${context.date}`;
  return {
    social: `🚨 ${base}. ${context.ticketLink ? `Tickets: ${context.ticketLink}` : 'Tickets coming soon.'}`,
    promoter: `Promoter copy: ${base}. Lineup: ${context.lineup.join(', ') || 'TBA'}.`,
    email: `Fan email: We're headed to ${context.city}! ${context.ticketLink ? `Grab tickets: ${context.ticketLink}` : 'On-sale timing soon.'}`
  };
}
