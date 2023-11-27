BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[BlogPageAdvertisement] (
    [id] INT NOT NULL IDENTITY(1,1),
    [sl] INT NOT NULL,
    [advertisementId] INT NOT NULL,
    CONSTRAINT [BlogPageAdvertisement_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[BlogPageAdvertisement] ADD CONSTRAINT [BlogPageAdvertisement_advertisementId_fkey] FOREIGN KEY ([advertisementId]) REFERENCES [dbo].[Advertisement]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
