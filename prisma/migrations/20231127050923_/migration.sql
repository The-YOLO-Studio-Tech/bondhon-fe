/*
  Warnings:

  - Added the required column `blogSubCategoryId` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Blog] ADD [blogSubCategoryId] INT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Blog] ADD CONSTRAINT [Blog_blogSubCategoryId_fkey] FOREIGN KEY ([blogSubCategoryId]) REFERENCES [dbo].[BlogSubCategory]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
