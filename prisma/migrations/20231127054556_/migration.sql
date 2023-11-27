/*
  Warnings:

  - You are about to drop the `BlogSubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[BlogSubCategory] DROP CONSTRAINT [BlogSubCategory_blogCategoryId_fkey];

-- DropTable
DROP TABLE [dbo].[BlogSubCategory];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
