BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[BlogSubCategory] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [blogCategoryId] INT NOT NULL,
    CONSTRAINT [BlogSubCategory_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[BlogSubCategory] ADD CONSTRAINT [BlogSubCategory_blogCategoryId_fkey] FOREIGN KEY ([blogCategoryId]) REFERENCES [dbo].[BlogCategory]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
