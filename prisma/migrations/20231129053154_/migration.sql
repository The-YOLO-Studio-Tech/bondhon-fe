BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[LandingPageCategory] (
    [id] INT NOT NULL IDENTITY(1,1),
    [sl] INT NOT NULL,
    [blogCategoryId] INT NOT NULL,
    CONSTRAINT [LandingPageCategory_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [LandingPageCategory_sl_key] UNIQUE NONCLUSTERED ([sl])
);

-- AddForeignKey
ALTER TABLE [dbo].[LandingPageCategory] ADD CONSTRAINT [LandingPageCategory_blogCategoryId_fkey] FOREIGN KEY ([blogCategoryId]) REFERENCES [dbo].[BlogCategory]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
