-- Initial schema migration generated for Artist/Tour Booking OS.
-- Apply with Prisma migrate against PostgreSQL.
CREATE TYPE "Role" AS ENUM ('ADMIN', 'AGENT', 'ARTIST');
CREATE TYPE "TourStatus" AS ENUM ('PLANNING', 'ANNOUNCING', 'LIVE', 'COMPLETED');
CREATE TYPE "ShowStatus" AS ENUM ('OFFER', 'APPROVED', 'CONTRACTED', 'ANNOUNCED', 'COMPLETED', 'CANCELED', 'OFF');
CREATE TYPE "AnnouncementReadyStatus" AS ENUM ('READY', 'NOT_READY');
CREATE TYPE "BillingRole" AS ENUM ('HEADLINER', 'SPECIAL_GUEST', 'SUPPORT', 'OPENER', 'LOCAL_SUPPORT');
CREATE TYPE "DealType" AS ENUM ('FLAT', 'PERCENT_NET', 'DOOR_SPLIT', 'BAR', 'TIERED', 'MIXED');
CREATE TYPE "RepRole" AS ENUM ('MANAGER', 'BOOKING_AGENT', 'ARTIST', 'OTHER');
CREATE TYPE "CommissionBasis" AS ENUM ('PERCENT', 'FIXED', 'NONE');
CREATE TYPE "EmailThreadType" AS ENUM ('OFFER', 'OUTREACH');
CREATE TYPE "FileObjectType" AS ENUM ('OFFER', 'CONTRACT', 'RIDER', 'MARKETING', 'OTHER');
CREATE TYPE "OfferStatus" AS ENUM ('NEW', 'NEGOTIATING', 'APPROVED', 'DECLINED', 'CONTRACTED');
CREATE TYPE "MarketingAssetType" AS ENUM ('SOCIAL', 'EMAIL', 'PROMOTER_COPY');
CREATE TYPE "MarketingAssetStatus" AS ENUM ('DRAFT', 'APPROVED', 'SENT');
CREATE TYPE "OnSaleStatus" AS ENUM ('ON_SALE', 'PRESALE', 'COMING_SOON');
-- Full table definitions are represented in prisma/schema.prisma
