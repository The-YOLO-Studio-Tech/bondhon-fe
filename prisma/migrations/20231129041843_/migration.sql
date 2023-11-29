BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[LangingPageAdvertisement] (
    [id] INT NOT NULL IDENTITY(1,1),
    [sl] INT NOT NULL,
    [advertisementId] INT NOT NULL,
    CONSTRAINT [LangingPageAdvertisement_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [LangingPageAdvertisement_sl_key] UNIQUE NONCLUSTERED ([sl])
);

-- AddForeignKey
ALTER TABLE [dbo].[LangingPageAdvertisement] ADD CONSTRAINT [LangingPageAdvertisement_advertisementId_fkey] FOREIGN KEY ([advertisementId]) REFERENCES [dbo].[Advertisement]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
