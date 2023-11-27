/*
  Warnings:

  - A unique constraint covering the columns `[sl]` on the table `BlogPageAdvertisement` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[BlogPageAdvertisement] ADD CONSTRAINT [BlogPageAdvertisement_sl_key] UNIQUE NONCLUSTERED ([sl]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
