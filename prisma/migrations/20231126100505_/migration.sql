BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Blog] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [thumbnail_b64] VARCHAR(max) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Blog_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [blogCategoryId] INT NOT NULL,
    CONSTRAINT [Blog_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Blog_title_key] UNIQUE NONCLUSTERED ([title])
);

-- AddForeignKey
ALTER TABLE [dbo].[Blog] ADD CONSTRAINT [Blog_blogCategoryId_fkey] FOREIGN KEY ([blogCategoryId]) REFERENCES [dbo].[BlogCategory]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
