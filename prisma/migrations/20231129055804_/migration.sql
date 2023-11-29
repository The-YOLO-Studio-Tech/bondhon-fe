BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[FeatureVideo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [sl] INT NOT NULL,
    [videoId] INT NOT NULL,
    CONSTRAINT [FeatureVideo_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [FeatureVideo_sl_key] UNIQUE NONCLUSTERED ([sl])
);

-- AddForeignKey
ALTER TABLE [dbo].[FeatureVideo] ADD CONSTRAINT [FeatureVideo_videoId_fkey] FOREIGN KEY ([videoId]) REFERENCES [dbo].[Video]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
