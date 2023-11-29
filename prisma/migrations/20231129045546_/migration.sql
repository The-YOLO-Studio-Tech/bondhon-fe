BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[LandingPageBlog] (
    [id] INT NOT NULL IDENTITY(1,1),
    [sl] INT NOT NULL,
    [blogId] INT NOT NULL,
    CONSTRAINT [LandingPageBlog_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [LandingPageBlog_sl_key] UNIQUE NONCLUSTERED ([sl])
);

-- AddForeignKey
ALTER TABLE [dbo].[LandingPageBlog] ADD CONSTRAINT [LandingPageBlog_blogId_fkey] FOREIGN KEY ([blogId]) REFERENCES [dbo].[Blog]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
